import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";

export function ChatWall({ showInputForm = false, isFlatList = true, context = 'profile' }) {
  const [message, setMessage] = useState("");
  const [posts, setPosts] = useState(() => {
    // Different initial posts based on context
    if (context === 'profile') {
      return [
        {
          id: 1,
          user: "You",
          content: "Just finished my new project! Feeling accomplished!",
          time: "2 hours ago",
        },
        {
          id: 2,
          user: "You",
          content: "Beautiful day for a hike 🏞️",
          time: "1 day ago",
        },
        {
          id: 3,
          user: "You",
          content: "Learning React has been amazing!",
          time: "3 days ago",
        }
      ];
    } else if (context === 'feed') {
      return [
        {
          id: 1,
          user: "You",
          content: "Just finished my new project!",
          time: "2 hours ago",
        },
        {
          id: 2,
          user: "Alice",
          content: "Check out this cool article I found!",
          time: "1 hour ago",
        },
        {
          id: 3,
          user: "Bob",
          content: "Just released a new version of my app!",
          time: "3 hours ago",
        },
        {
          id: 4,
          user: "You",
          content: "Beautiful day for a hike 🏞️",
          time: "1 day ago",
        },
        {
          id: 5,
          user: "Charlie",
          content: "Anyone up for coffee this weekend?",
          time: "5 hours ago",
        }
      ];
    } else {
      // Chat context
      return [
        {
          id: 1,
          user: "Alice",
          content: "Hey, how are you doing?",
          time: "10:30 AM",
        },
        {
          id: 2,
          user: "You",
          content: "I'm good! Working on the new project.",
          time: "10:32 AM",
        },
        {
          id: 3,
          user: "Alice",
          content: "That sounds exciting! Let me know if you need help.",
          time: "10:35 AM",
        }
      ];
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      const newPost = {
        id: posts.length + 1,
        user: "You",
        content: message,
        time: "Just now",
      };
      setPosts([...posts, newPost]);
      setMessage("");
    }
  };

  const getPostStyle = (post) => {
    if (context === 'profile') {
      // Profile: always flat list
      return {
        margin: "10px 0",
        padding: "10px",
        borderRadius: "8px",
        backgroundColor: "#f5f5f5",
        maxWidth: "100%",
      };
    } else if (context === 'feed') {
      // Feed: user's posts on the right, others on the left
      return {
        margin: "10px 0",
        padding: "10px",
        borderRadius: "8px",
        backgroundColor: post.user === "You" ? "#e3f2fd" : "#f5f5f5",
        alignSelf: post.user === "You" ? "flex-end" : "flex-start",
        maxWidth: "70%",
        marginLeft: post.user === "You" ? "auto" : "0",
        marginRight: post.user === "You" ? "0" : "auto",
      };
    } else {
      // Chat: similar to feed
      return {
        margin: "10px 0",
        padding: "10px",
        borderRadius: "8px",
        backgroundColor: post.user === "You" ? "#e3f2fd" : "#f5f5f5",
        alignSelf: post.user === "You" ? "flex-end" : "flex-start",
        maxWidth: "70%",
        marginLeft: post.user === "You" ? "auto" : "0",
        marginRight: post.user === "You" ? "0" : "auto",
      };
    }
  };

  return (
    <div
      style={context !== 'profile' ? { display: "flex", flexDirection: "column" } : {}}
    >
      <h3>Chat Wall</h3>
      {posts.map((post) => (
        <div key={post.id} style={getPostStyle(post)}>
          {context === 'profile' ? (
            // Profile layout: always show user info and content
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "5px",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    backgroundColor: "#4A154B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    marginRight: "10px",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  {post.user.charAt(0)}
                </div>
                <div>
                  <strong>{post.user}</strong>
                  <div style={{ fontSize: "12px", color: "#666" }}>{post.time}</div>
                </div>
              </div>
              <div style={{ marginLeft: "42px" }}>
                {post.content}
              </div>
            </>
          ) : (
            // Feed and Chat layout: compact with user and time
            <>
              <div style={{ fontWeight: "bold" }}>{post.user}</div>
              <div>{post.content}</div>
              <div style={{ fontSize: "12px", color: "#666", textAlign: "right" }}>{post.time}</div>
            </>
          )}
        </div>
      ))}

      {showInputForm && (
        <div
          style={{
            padding: "20px 0",
            borderTop: "1px solid #ddd",
            marginTop: "20px",
          }}
        >
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button variant="primary" type="submit">
                Send
              </Button>
            </InputGroup>
          </Form>
        </div>
      )}
    </div>
  );
}
