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

  const handleUserClick = (user) => {
    setProfileUser(user);
    setActiveTab("profile");
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
