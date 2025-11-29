import React, { useContext, useEffect, useState } from 'react';
import { BackendContext } from './Backend.js';

export function ChatTab({ room }) {
    const backend = useContext(BackendContext);
    const [chatMessages, setChatMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsersAndSetMessages = async () => {
            try {
                const userList = await backend.getUsers();
                setUsers(userList);
                
                // Generate messages based on room
                let messages = [];
                if (room.startsWith('user-')) {
                    const userId = room.replace('user-', '');
                    const targetUser = userList.find(u => u.uid === userId);
                    if (targetUser) {
                        messages = [
                            { id: 1, user: targetUser.name, content: 'Hey, how are you doing?', time: '10:30 AM' },
                            { id: 2, user: 'You', content: 'I\'m good! Working on the new project.', time: '10:32 AM' },
                            { id: 3, user: targetUser.name, content: 'That sounds exciting! Let me know if you need help.', time: '10:35 AM' }
                        ];
                    }
                } else if (room === 'group-chat') {
                    const user1 = userList[0];
                    const user2 = userList[1];
                    messages = [
                        { id: 1, user: user1?.name || 'User 1', content: 'Hey both! Ready for the meeting?', time: '2:00 PM' },
                        { id: 2, user: user2?.name || 'User 2', content: 'Just finishing up some slides.', time: '2:05 PM' },
                        { id: 3, user: 'You', content: 'I\'ll be there in 5 minutes.', time: '2:07 PM' }
                    ];
                }
                setChatMessages(messages);
            } catch (error) {
                console.error('Error fetching users for chat:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUsersAndSetMessages();
    }, [backend, room]);

    const roomDisplayName = room === 'group-chat' ? 'Group Chat' : 
                           users.find(u => `user-${u.uid}` === room)?.name || 'Chat';
    
    if (isLoading) {
        return <div>Loading chat...</div>;
    }

    return (
        <>
            <h3>Chat with {roomDisplayName}</h3>
            {chatMessages[room]?.map(msg => (
                <div key={msg.id} style={{ 
                    margin: '10px 0',
                    padding: '10px',
                    borderRadius: '8px',
                    backgroundColor: msg.user === 'You' ? '#e3f2fd' : '#f5f5f5',
                    alignSelf: msg.user === 'You' ? 'flex-end' : 'flex-start',
                    maxWidth: '70%',
                    marginLeft: msg.user === 'You' ? 'auto' : '0',
                    marginRight: msg.user === 'You' ? '0' : 'auto'
                }}>
                    <div style={{ fontWeight: 'bold' }}>{msg.user}</div>
                    <div>{msg.content}</div>
                    <div style={{ fontSize: '12px', color: '#666', textAlign: 'right' }}>{msg.time}</div>
                </div>
            ))}
        </>
    );
}
