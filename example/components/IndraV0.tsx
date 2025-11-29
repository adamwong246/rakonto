import React, { useState, useContext, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Sidebar } from "./IndraV0/Sidebar.js";
import { BackendContext } from "./IndraV0/Backend.js";
import { HorizontalNav } from "./IndraV0/HorizontalNav.js";
import { RightSidebar } from "./IndraV0/RightSidebar.js";
import { MainContent } from "./IndraV0/MainContent.js";

export function IndraV0() {
  const [activeTab, setActiveTab] = useState("profile");
  const [profileUser, setProfileUser] = useState(null); // Track which user's profile to show
  const backend = useContext(BackendContext);
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [chatRooms, setChatRooms] = useState([]);
  const scrollTimeoutRef = useRef(null);

  const [focusedSubject, setFocusedSubject] = useState(null);

  const handleUserClick = async (item) => {
    console.log("handleUserClick called with:", item);
    console.log("Current focusedSubject before update:", focusedSubject);
    console.log("Current activeTab before update:", activeTab);
    
    if (item.type === 'subject') {
      console.log("Processing subject click");
      // If the full subject data is already available, use it
      if (item.subject) {
        console.log("Using provided subject data:", item.subject);
        setFocusedSubject(item.subject);
        setActiveTab("subject");
        console.log("Set focusedSubject to:", item.subject, "and activeTab to: subject");
      } else {
        try {
          console.log("Fetching subject data for uid:", item.uid);
          // Fetch the full subject data
          const subject = await backend.getSubject(item.uid);
          console.log("Fetched subject:", subject);
          setFocusedSubject(subject);
          setActiveTab("subject");
          console.log("Set focusedSubject to:", subject, "and activeTab to: subject");
        } catch (error) {
          console.error('Error fetching subject:', error);
          // Fallback to basic data
          const fallbackSubject = { id: item.uid, name: item.name };
          setFocusedSubject(fallbackSubject);
          setActiveTab("subject");
          console.log("Set focusedSubject to fallback:", fallbackSubject, "and activeTab to: subject");
        }
      }
    } else {
      console.log("Processing user profile click");
      setProfileUser(item);
      setActiveTab("profile");
      console.log("Set profileUser to:", item, "and activeTab to: profile");
    }
  };

  const handleMyProfileClick = () => {
    setProfileUser(null); // Reset to show current user's profile
    setActiveTab("profile");
  };

  useEffect(() => {
    // Fetch current user, users, and chat rooms when component mounts
    const fetchData = async () => {
      try {
        const [user, userList, roomList] = await Promise.all([
          backend.getCurrentUser(),
          backend.getUsers(),
          backend.getChatRooms(),
        ]);
        setCurrentUser(user);
        setUsers(userList);
        setChatRooms(roomList);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [backend]);

  // Scroll to bottom when activeTab changes
  useEffect(() => {
    const timer = setTimeout(() => {
      const scrollingElement = document.getElementById('scrolling-main-content-container');
      if (scrollingElement) {
        scrollingElement.scrollTop = scrollingElement.scrollHeight;
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <Container
      fluid
      style={{
        height: "100vh",
        padding: 0,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Row style={{ flex: 1, margin: 0, overflow: "hidden" }}>
        {/* Left Column - Fixed Tabs */}
        <Col
          xs={2}
          style={{
            backgroundColor: "#4A154B",
            padding: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </Col>

        {/* Middle Column - Main Content */}
        <Col
          xs={7}
          style={{
            padding: 0,
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <HorizontalNav
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onMyProfileClick={handleMyProfileClick}
          />
          <div id="scrolling-main-content-container" style={{ flex: 1, overflow: "auto" }}>
            <MainContent
              activeTab={activeTab}
              chatRooms={chatRooms}
              currentUser={currentUser}
              profileUser={profileUser}
              focusedSubject={focusedSubject}
              handleUserClick={handleUserClick}
            />
          </div>
        </Col>

        {/* Right Column - Chats and Discussions */}
        <Col
          xs={3}
          style={{ padding: 0, display: "flex", flexDirection: "column" }}
        >
          <RightSidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            chatRooms={chatRooms}
            users={users}
          />
        </Col>
      </Row>
    </Container>
  );
}
