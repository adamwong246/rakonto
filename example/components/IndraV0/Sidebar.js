import React from "react";
import { Nav } from "react-bootstrap";

export function Sidebar({ activeTab, setActiveTab }) {
  return (
    <Nav variant="pills" className="flex-column" style={{ padding: "20px 0" }}>
      {/* Main Sections */}
      <Nav.Item>
        <Nav.Link
          eventKey="popular"
          active={activeTab === "popular"}
          onClick={() => setActiveTab("popular")}
          style={{
            color: "#FFD700",
            borderRadius: 0,
            backgroundColor:
              activeTab === "popular" ? "#611f69" : "transparent",
            fontWeight: "bold",
            fontSize: "16px",
            // borderBottom: "2px solid #FFD700",
            // padding: "15px 20px"
          }}
        >
          Indra
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="feed"
          active={activeTab === "feed"}
          onClick={() => setActiveTab("feed")}
          style={{
            color: "white",
            borderRadius: 0,
            backgroundColor: activeTab === "feed" ? "#611f69" : "transparent",
          }}
        >
          📰 Feed
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="recommendations"
          active={activeTab === "recommendations"}
          onClick={() => setActiveTab("recommendations")}
          style={{
            color: "white",
            borderRadius: 0,
            backgroundColor:
              activeTab === "recommendations" ? "#611f69" : "transparent",
          }}
        >
          💡 Recommendations
        </Nav.Link>
      </Nav.Item>
      
      {/* Horizontal Rule */}
      <hr style={{ 
        margin: "10px 20px", 
        borderColor: "#611f69",
        opacity: 0.5 
      }} />
      
      <Nav.Item>
        <Nav.Link
          eventKey="friends"
          active={activeTab === "friends"}
          onClick={() => setActiveTab("friends")}
          style={{
            color: "white",
            borderRadius: 0,
            backgroundColor:
              activeTab === "friends" ? "#611f69" : "transparent",
          }}
        >
          👥 Friends
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="following"
          active={activeTab === "following"}
          onClick={() => setActiveTab("following")}
          style={{
            color: "white",
            borderRadius: 0,
            backgroundColor:
              activeTab === "following" ? "#611f69" : "transparent",
          }}
        >
          👀 Following
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="followers"
          active={activeTab === "followers"}
          onClick={() => setActiveTab("followers")}
          style={{
            color: "white",
            borderRadius: 0,
            backgroundColor:
              activeTab === "followers" ? "#611f69" : "transparent",
          }}
        >
          👥 Followers
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="neighbors"
          active={activeTab === "neighbors"}
          onClick={() => setActiveTab("neighbors")}
          style={{
            color: "white",
            borderRadius: 0,
            backgroundColor:
              activeTab === "neighbors" ? "#611f69" : "transparent",
          }}
        >
          🏠 Neighbors
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="blocked"
          active={activeTab === "blocked"}
          onClick={() => setActiveTab("blocked")}
          style={{
            color: "white",
            borderRadius: 0,
            backgroundColor:
              activeTab === "blocked" ? "#611f69" : "transparent",
          }}
        >
          🚫 Blocked
        </Nav.Link>
      </Nav.Item>
      
      {/* Horizontal Rule */}
      <hr style={{ 
        margin: "10px 20px", 
        borderColor: "#611f69",
        opacity: 0.5 
      }} />
      
      {/* About Link */}
      <Nav.Item>
        <Nav.Link
          eventKey="about"
          active={activeTab === "about"}
          onClick={() => setActiveTab("about")}
          style={{
            color: "white",
            borderRadius: 0,
            backgroundColor: activeTab === "about" ? "#611f69" : "transparent",
          }}
        >
          ℹ️ About
        </Nav.Link>
      </Nav.Item>
      
      {/* Login/Logout Button Stub */}
      <Nav.Item>
        <Nav.Link
          eventKey="login"
          onClick={() => alert('Login/Logout functionality would go here')}
          style={{
            color: "white",
            borderRadius: 0,
            backgroundColor: "transparent",
            cursor: 'pointer'
          }}
        >
          🔐 Login/Logout
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
