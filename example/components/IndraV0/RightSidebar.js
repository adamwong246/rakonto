import React, { useState, useContext, useEffect } from 'react';
import { BackendContext } from './Backend.js';

export function RightSidebar({ activeTab, setActiveTab, chatRooms, users }) {
    const [isActiveChatsOpen, setIsActiveChatsOpen] = useState(true);
    const [isOnlineFriendsOpen, setIsOnlineFriendsOpen] = useState(true);
    const [isOfflineFriendsOpen, setIsOfflineFriendsOpen] = useState(true);
    const [currentUser, setCurrentUser] = useState(null);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const backend = useContext(BackendContext);

    // Fetch current user and filter out blocked users
    useEffect(() => {
        const fetchCurrentUserAndFilterUsers = async () => {
            try {
                const user = await backend.getCurrentUser();
                setCurrentUser(user);
                
                // Filter users to exclude those with blocking relationships
                const filtered = await Promise.all(
                    users.map(async (userItem) => {
                        // Check if there's a blocking relationship in either direction
                        const relationship = await backend.getRelationship(user.uid, userItem.uid);
                        // If current user blocks this user or is blocked by this user, exclude them
                        if (relationship === 'blocked' || relationship === 'blocked-by') {
                            return null;
                        }
                        return userItem;
                    })
                );
                setFilteredUsers(filtered.filter(Boolean));
            } catch (error) {
                console.error('Error fetching current user or filtering users:', error);
                setFilteredUsers(users);
            }
        };
        
        fetchCurrentUserAndFilterUsers();
    }, [backend, users]);

    return (
        <div style={{ 
            backgroundColor: '#4A154B', 
            padding: '20px 0', 
            borderLeft: '1px solid #611f69',
            overflowY: 'auto',
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
        }}>
            
            {/* Active Chats */}
            <div style={{ marginBottom: '30px' }}>
                <div 
                    style={{ 
                        padding: '0 20px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'pointer'
                    }}
                    onClick={() => setIsActiveChatsOpen(!isActiveChatsOpen)}
                >
                    <h6 style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '15px' }}>Active Chats</h6>
                    <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        {isActiveChatsOpen ? '▼' : '▶'}
                    </span>
                </div>
                {isActiveChatsOpen && chatRooms.filter(room => {
                    // For private 1-1 chats, check if the other participant is blocked
                    if (room.type === "private-1-1") {
                        // Find the other participant (not current user)
                        const otherParticipant = room.participants.find(uid => uid !== (currentUser?.uid || "0"));
                        // Check if this user is in the filteredUsers list
                        const isBlocked = !filteredUsers.some(user => user.uid === otherParticipant);
                        return !isBlocked;
                    }
                    // For group chats, always show them for now
                    return true;
                }).slice(0, 3).map(room => (
                    <div 
                        key={room.id} 
                        style={{
                            padding: '10px 20px',
                            marginBottom: '5px',
                            backgroundColor: activeTab === room.id ? '#611f69' : 'transparent',
                            cursor: 'pointer',
                            borderLeft: activeTab === room.id ? '3px solid #ffffff' : '3px solid transparent'
                        }}
                        onClick={() => setActiveTab(room.id)}
                        onMouseEnter={(e) => {
                            if (activeTab !== room.id) {
                                e.target.style.backgroundColor = '#611f69';
                                e.target.style.borderLeftColor = '#ffffff';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (activeTab !== room.id) {
                                e.target.style.backgroundColor = 'transparent';
                                e.target.style.borderLeftColor = 'transparent';
                            }
                        }}
                    >
                        <div style={{ fontWeight: 'bold', fontSize: '14px', color: 'white' }}>
                            {room.type === "private-1-1" ? "💬" : 
                             room.type === "private-group" ? "👥" : "🌐"} {room.name}
                        </div>
                        <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)' }}>
                            Last message: Just now
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Online Friends */}
            <div style={{ marginBottom: '30px' }}>
                <div 
                    style={{ 
                        padding: '0 20px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'pointer'
                    }}
                    onClick={() => setIsOnlineFriendsOpen(!isOnlineFriendsOpen)}
                >
                    <h6 style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '15px' }}>Online Friends</h6>
                    <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        {isOnlineFriendsOpen ? '▼' : '▶'}
                    </span>
                </div>
                {isOnlineFriendsOpen && filteredUsers.slice(0, 4).map(user => {
                    // Find or create a private chat room ID for this user
                    const privateChatRoom = chatRooms.find(room => 
                        room.type === "private-1-1" && 
                        room.participants.includes(user.uid)
                    );
                    const roomId = privateChatRoom ? privateChatRoom.id : `private-1-${user.uid}`;
                    
                    return (
                        <div 
                            key={user.uid} 
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '8px 20px',
                                marginBottom: '5px',
                                backgroundColor: activeTab === roomId ? '#611f69' : 'transparent',
                                cursor: 'pointer',
                                borderLeft: activeTab === roomId ? '3px solid #ffffff' : '3px solid transparent'
                            }}
                            onClick={() => setActiveTab(roomId)}
                            onMouseEnter={(e) => {
                                if (activeTab !== roomId) {
                                    e.target.style.backgroundColor = '#611f69';
                                    e.target.style.borderLeftColor = '#ffffff';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (activeTab !== roomId) {
                                    e.target.style.backgroundColor = 'transparent';
                                    e.target.style.borderLeftColor = 'transparent';
                                }
                            }}
                        >
                            <div style={{
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                backgroundColor: '#28a745',
                                marginRight: '10px'
                            }}></div>
                            <div style={{ fontSize: '14px', color: 'white' }}>
                                {user.name}
                            </div>
                        </div>
                    );
                })}
            </div>
            
            {/* Offline Friends */}
            <div>
                <div 
                    style={{ 
                        padding: '0 20px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'pointer'
                    }}
                    onClick={() => setIsOfflineFriendsOpen(!isOfflineFriendsOpen)}
                >
                    <h6 style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '15px' }}>Offline Friends</h6>
                    <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        {isOfflineFriendsOpen ? '▼' : '▶'}
                    </span>
                </div>
                {isOfflineFriendsOpen && filteredUsers.slice(4, 8).map(user => {
                    // Find or create a private chat room ID for this user
                    const privateChatRoom = chatRooms.find(room => 
                        room.type === "private-1-1" && 
                        room.participants.includes(user.uid)
                    );
                    const roomId = privateChatRoom ? privateChatRoom.id : `private-1-${user.uid}`;
                    
                    return (
                        <div 
                            key={user.uid} 
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '8px 20px',
                                marginBottom: '5px',
                                backgroundColor: activeTab === roomId ? '#611f69' : 'transparent',
                                cursor: 'pointer',
                                borderLeft: activeTab === roomId ? '3px solid #ffffff' : '3px solid transparent'
                            }}
                            onClick={() => setActiveTab(roomId)}
                            onMouseEnter={(e) => {
                                if (activeTab !== roomId) {
                                    e.target.style.backgroundColor = '#611f69';
                                    e.target.style.borderLeftColor = '#ffffff';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (activeTab !== roomId) {
                                    e.target.style.backgroundColor = 'transparent';
                                    e.target.style.borderLeftColor = 'transparent';
                                }
                            }}
                        >
                            <div style={{
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                backgroundColor: '#6c757d',
                                marginRight: '10px'
                            }}></div>
                            <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)' }}>
                                {user.name}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
