import React, { useState, useContext, useEffect } from 'react';
import { BackendContext } from './Backend.js';

export function Post({ post, context, onReply, onUserClick, depth = 0 }) {
  const backend = useContext(BackendContext);
  const [relationship, setRelationship] = useState('none');
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchCurrentUserAndRelationship = async () => {
      try {
        const user = await backend.getCurrentUser();
        setCurrentUser(user);
        // Only fetch relationship if the post has a user uid and it's not the current user
        // Handle recommendation users specially
        let targetUid = post.uid;
        if (post.type === 'user-recommendation') {
          targetUid = post.user.uid;
        }
        
        if (targetUid && targetUid !== user.uid) {
          const rel = await backend.getRelationship(user.uid, targetUid);
          setRelationship(rel);
        }
        
      } catch (error) {
        console.error('Error fetching relationship:', error);
      }
    };
    
    fetchCurrentUserAndRelationship();
  }, [backend, post.uid, post.id, post.hasLikability]);

  const handleRelationshipAction = async (action) => {
    try {
      // For recommendation users, use the post's user uid
      const targetUid = post.type === 'user-recommendation' ? post.user.uid : post.uid;
      await backend.updateRelationship(currentUser.uid, targetUid, action);
      // Refresh relationship status
      const newRel = await backend.getRelationship(currentUser.uid, targetUid);
      setRelationship(newRel);
      
      // If it's a recommendation and we followed, we might want to remove it from recommendations
      // For now, we'll just update the UI
    } catch (error) {
      console.error('Error updating relationship:', error);
    }
  };

  const renderRelationshipActions = () => {
    // Only show relationship actions for user posts in specific contexts
    if (!currentUser || post.uid === currentUser.uid || 
        post.uid === 'system' ||
        (context !== 'friends' && context !== 'blocked' && context !== 'following')) return null;
    
    switch (relationship) {
      case 'none':
        return (
          <div style={{ marginTop: '10px' }}>
            <button 
              onClick={() => handleRelationshipAction('follow')}
              style={{ marginRight: '5px', fontSize: '12px', padding: '5px 10px' }}
            >
              Follow
            </button>
            <button 
              onClick={() => handleRelationshipAction('block')}
              style={{ fontSize: '12px', padding: '5px 10px' }}
            >
              Block
            </button>
          </div>
        );
      case 'following':
        return (
          <div style={{ marginTop: '10px' }}>
            <span style={{ fontSize: '12px', color: '#666', marginRight: '10px' }}>Following</span>
            <button 
              onClick={() => handleRelationshipAction('unfollow')}
              style={{ fontSize: '12px', padding: '5px 10px' }}
            >
              Unfollow
            </button>
          </div>
        );
      case 'followed-by':
        return (
          <div style={{ marginTop: '10px' }}>
            <span style={{ fontSize: '12px', color: '#666', marginRight: '10px' }}>Follows you</span>
            <button 
              onClick={() => handleRelationshipAction('follow')}
              style={{ marginRight: '5px', fontSize: '12px', padding: '5px 10px' }}
            >
              Follow back
            </button>
            <button 
              onClick={() => handleRelationshipAction('block')}
              style={{ fontSize: '12px', padding: '5px 10px' }}
            >
              Block
            </button>
          </div>
        );
      case 'friends':
        return (
          <div style={{ marginTop: '10px' }}>
            <span style={{ fontSize: '12px', color: '#666', marginRight: '10px' }}>Friends</span>
            <button 
              onClick={() => handleRelationshipAction('unfollow')}
              style={{ fontSize: '12px', padding: '5px 10px' }}
            >
              Unfriend
            </button>
          </div>
        );
      case 'blocked':
        return (
          <div style={{ marginTop: '10px' }}>
            <span style={{ fontSize: '12px', color: '#666', marginRight: '10px' }}>Blocked</span>
            <button 
              onClick={() => handleRelationshipAction('unblock')}
              style={{ fontSize: '12px', padding: '5px 10px' }}
            >
              Unblock
            </button>
          </div>
        );
      default:
        return null;
    }
  };
  const getPostStyle = () => {
    if (context === 'notifications') {
      // Different background colors based on notification subtype
      let backgroundColor = "#f8f9fa";
      let borderColor = "#e9ecef";
      
      if (post.subtype === 'like') {
        backgroundColor = "#fff3cd";
        borderColor = "#ffeaa7";
      } else if (post.subtype === 'follow') {
        backgroundColor = "#d1ecf1";
        borderColor = "#bee5eb";
      } else if (post.subtype === 'comment') {
        backgroundColor = "#d4edda";
        borderColor = "#c3e6cb";
      } else if (post.subtype === 'trending') {
        backgroundColor = "#f8d7da";
        borderColor = "#f5c6cb";
      } else if (post.subtype === 'mention') {
        backgroundColor = "#e2e3e5";
        borderColor = "#d6d8db";
      } else if (post.subtype === 'digest') {
        backgroundColor = "#cce7ff";
        borderColor = "#b3d9ff";
      } else if (post.subtype === 'event') {
        backgroundColor = "#fff0f6";
        borderColor = "#ffdeeb";
      } else if (post.subtype === 'friend_joined') {
        backgroundColor = "#f0f8ff";
        borderColor = "#e1f5fe";
      }
      
      return {
        margin: "10px 0",
        padding: "15px",
        borderRadius: "8px",
        backgroundColor: backgroundColor,
        maxWidth: "100%",
        border: `1px solid ${borderColor}`,
      };
    } else if (context === 'friends' || context === 'blocked' || context === 'following') {
      return {
        margin: "10px 0",
        padding: "15px",
        borderRadius: "8px",
        backgroundColor: "#f8f9fa",
        maxWidth: "100%",
        border: "1px solid #e9ecef",
      };
    } else if (context === 'profile' || context === 'search') {
      return {
        margin: "10px 0",
        padding: "10px",
        borderRadius: "8px",
        backgroundColor: "#f5f5f5",
        maxWidth: "100%",
      };
    } else if (context === 'feed') {
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
    } else if (context === 'recommendations') {
      return {
        margin: "10px 0",
        padding: "15px",
        borderRadius: "8px",
        backgroundColor: "#f0f8ff",
        maxWidth: "100%",
        border: "1px solid #d1ecf1",
      };
    } else {
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

  // Add reply functionality
  const handleReply = () => {
    if (onReply) {
      onReply(post.id);
    }
  };

  // Handle user name click
  const handleUserNameClick = () => {
    if (onUserClick && post.uid) {
      onUserClick({ name: post.user, uid: post.uid });
    }
  };

  // Handle subject click
  const handleSubjectClick = () => {
    console.log("handleSubjectClick called with post:", post);
    if (onUserClick && post.subject) {
      console.log("Calling onUserClick with subject:", post.subject);
      onUserClick({ 
        name: post.subject.name, 
        uid: post.subject.id, 
        type: 'subject',
        subject: post.subject // Pass the full subject data
      });
    } else {
      console.log("onUserClick not available or post.subject missing");
    }
  };

  // Handle reply to subject
  const handleReplyToSubject = () => {
    console.log("handleReplyToSubject called with post:", post);
    if (onUserClick && post.subject) {
      console.log("Calling onUserClick with subject:", post.subject);
      onUserClick({ 
        name: post.subject.name, 
        uid: post.subject.id, 
        type: 'subject',
        subject: post.subject // Pass the full subject data
      });
    } else {
      console.log("onUserClick not available or post.subject missing");
    }
  };

  return (
    <div style={getPostStyle()}>
      {/* Reply button */}
      {context !== 'notifications' && context !== 'friends' && context !== 'blocked' && context !== 'following' && (
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '5px' }}>
          <button 
            onClick={handleReply}
            style={{
              fontSize: '12px',
              padding: '2px 8px',
              backgroundColor: 'transparent',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Reply
          </button>
        </div>
      )}
      {context === 'notifications' ? (
        <>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
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
                marginRight: "12px",
                fontSize: "14px",
                fontWeight: "bold",
                flexShrink: 0,
                cursor: onUserClick && post.uid ? 'pointer' : 'default'
              }}
              onClick={handleUserNameClick}
            >
              {post.user.charAt(0)}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <strong 
                  style={{ 
                    fontSize: "14px", 
                    cursor: onUserClick && post.uid ? 'pointer' : 'default',
                    textDecoration: onUserClick && post.uid ? 'underline' : 'none'
                  }}
                  onClick={handleUserNameClick}
                >
                  {post.user}
                </strong>
                <div style={{ 
                  fontSize: "12px", 
                  color: "#666",
                }}>
                  {post.time}
                </div>
              </div>
              <div style={{ fontSize: "14px", color: "#495057", lineHeight: "1.4", marginTop: "4px" }}>
                {post.content}
              </div>
            </div>
            {post.hasLikability && (
              <div style={{ 
                display: 'flex', 
                justifyContent: 'flex-end',
                marginTop: '10px'
              }}>
                <button 
                  onClick={() => setShowLikabilityModal(true)}
                  style={{
                    fontSize: '12px',
                    padding: '5px 10px',
                    backgroundColor: '#f8f9fa',
                    border: '1px solid #dee2e6',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Likability: {averageLikability}%
                </button>
              </div>
            )}
          </div>
        </>
      ) : context === 'friends' ? (
        <>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: "#4A154B",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                marginRight: "15px",
                fontSize: "18px",
                fontWeight: "bold",
                flexShrink: 0,
                cursor: onUserClick && post.uid ? 'pointer' : 'default'
              }}
              onClick={handleUserNameClick}
            >
              {post.user.charAt(0)}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <strong 
                  style={{ 
                    fontSize: "16px", 
                    cursor: onUserClick && post.uid ? 'pointer' : 'default',
                    textDecoration: onUserClick && post.uid ? 'underline' : 'none'
                  }}
                  onClick={handleUserNameClick}
                >
                  {post.user}
                </strong>
                <div style={{ 
                  fontSize: "12px", 
                  color: post.time === "Online" ? "#28a745" : "#666",
                  fontWeight: post.time === "Online" ? "bold" : "normal"
                }}>
                  {post.time}
                </div>
              </div>
              {post.mutualFriends && (
                <div style={{ fontSize: "14px", color: "#6c757d", marginBottom: "5px" }}>
                  {post.mutualFriends} mutual friends
                </div>
              )}
              <div style={{ fontSize: "14px", color: "#495057", lineHeight: "1.4" }}>
                {post.content}
              </div>
            </div>
          </div>
        </>
      ) : context === 'profile' || context === 'search' ? (
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
                cursor: onUserClick && post.uid ? 'pointer' : 'default'
              }}
              onClick={handleUserNameClick}
            >
              {post.user.charAt(0)}
            </div>
            <div>
              <strong 
                style={{ 
                  cursor: onUserClick && post.uid ? 'pointer' : 'default', 
                  textDecoration: onUserClick && post.uid ? 'underline' : 'none' 
                }}
                onClick={handleUserNameClick}
              >
                {post.user}
              </strong>
              <div style={{ fontSize: "12px", color: "#666" }}>{post.time}</div>
            </div>
          </div>
          <div style={{ marginLeft: "42px" }}>
            {post.content}
            <div style={{ 
              marginTop: '10px'
            }}>
              {renderRelationshipActions()}
            </div>
          </div>
        </>
      ) : context === 'search' ? (
        // Special rendering for search results
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
                cursor: (onUserClick && post.uid) || (onUserClick && post.type === 'search-subject') ? 'pointer' : 'default'
              }}
              onClick={post.type === 'search-subject' ? handleSubjectClick : handleUserNameClick}
            >
              {post.type === 'search-user' ? '👤' : 
               post.type === 'search-subject' ? '📚' : '📝'}
            </div>
            <div>
              <strong 
                style={{ 
                  cursor: (onUserClick && post.uid) || (onUserClick && post.type === 'search-subject') ? 'pointer' : 'default',
                  textDecoration: (onUserClick && post.uid) || (onUserClick && post.type === 'search-subject') ? 'underline' : 'none'
                }}
                onClick={post.type === 'search-subject' ? handleSubjectClick : handleUserNameClick}
              >
                {post.user}
              </strong>
              <div style={{ fontSize: "12px", color: "#666" }}>{post.time}</div>
            </div>
          </div>
          <div style={{ marginLeft: "42px" }}>
            {post.content}
            <div style={{ 
              marginTop: '10px'
            }}>
              {post.type === 'search-user' && (
                <button 
                  onClick={() => {
                    if (onUserClick) {
                      onUserClick({ name: post.user, uid: post.uid });
                    }
                  }}
                  style={{ 
                    marginRight: '5px', 
                    fontSize: '12px', 
                    padding: '5px 10px',
                    backgroundColor: '#4A154B',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  View Profile
                </button>
              )}
              {post.type === 'search-subject' && (
                <button 
                  onClick={handleSubjectClick}
                  style={{ 
                    fontSize: '12px', 
                    padding: '5px 10px',
                    backgroundColor: '#4A154B',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  View Subject
                </button>
              )}
              {post.type === 'search-post' && (
                <button 
                  onClick={handleReply}
                  style={{ 
                    fontSize: '12px', 
                    padding: '5px 10px',
                    backgroundColor: 'transparent',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Reply
                </button>
              )}
            </div>
          </div>
        </>
      ) : context === 'recommendations' ? (
        // Special rendering for recommendations
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
                cursor: onUserClick && post.uid ? 'pointer' : 'default'
              }}
              onClick={handleUserNameClick}
            >
              {post.type === 'user-recommendation' ? '👤' : 
               post.type === 'room-recommendation' ? '💬' : '📝'}
            </div>
            <div>
              <strong 
                style={{ 
                  cursor: onUserClick && post.uid ? 'pointer' : 'default',
                  textDecoration: onUserClick && post.uid ? 'underline' : 'none'
                }}
                onClick={handleUserNameClick}
              >
                {post.user || 'System'}
              </strong>
              <div style={{ fontSize: "12px", color: "#666" }}>{post.time}</div>
            </div>
          </div>
          <div style={{ marginLeft: "42px" }}>
            {post.content}
            <div style={{ 
              marginTop: '10px'
            }}>
              {post.type === 'user-recommendation' && (
                <button 
                  onClick={() => handleRelationshipAction('follow')}
                  style={{ 
                    marginRight: '5px', 
                    fontSize: '12px', 
                    padding: '5px 10px',
                    backgroundColor: '#4A154B',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Follow
                </button>
              )}
              {post.type === 'room-recommendation' && (
                <button 
                  onClick={() => {
                    // In a real app, this would navigate to the chat room
                    alert(`Joining ${post.room.name}`);
                  }}
                  style={{ 
                    fontSize: '12px', 
                    padding: '5px 10px',
                    backgroundColor: '#4A154B',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Join Chat
                </button>
              )}
              {post.type === 'post-recommendation' && (
                <button 
                  onClick={handleReply}
                  style={{ 
                    fontSize: '12px', 
                    padding: '5px 10px',
                    backgroundColor: 'transparent',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Reply
                </button>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <div 
            style={{ 
              fontWeight: "bold", 
              cursor: onUserClick && post.uid ? 'pointer' : 'default',
              textDecoration: onUserClick && post.uid ? 'underline' : 'none'
            }}
            onClick={handleUserNameClick}
          >
            {post.user}
          </div>
          <div>{post.content}</div>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginTop: '10px'
          }}>
            <div style={{ fontSize: "12px", color: "#666" }}>{post.time}</div>
          </div>
          {renderRelationshipActions()}
        </>
      )}
      
    </div>
  );
}
