import React from 'react';

export function ChatTab({ room }) {
    const roomDisplayName = room === 'alice-bob' ? 'Alice & Bob' : room.charAt(0).toUpperCase() + room.slice(1);
    
    // Sample chat messages
    const chatMessages = {
        'alice': [
            { id: 1, user: 'Alice', content: 'Hey, how are you doing?', time: '10:30 AM' },
            { id: 2, user: 'You', content: 'I\'m good! Working on the new project.', time: '10:32 AM' },
            { id: 3, user: 'Alice', content: 'That sounds exciting! Let me know if you need help.', time: '10:35 AM' }
        ],
        'bob': [
            { id: 1, user: 'Bob', content: 'Did you see the game last night?', time: '9:15 AM' },
            { id: 2, user: 'You', content: 'No, I missed it. Who won?', time: '9:20 AM' },
            { id: 3, user: 'Bob', content: 'Our team crushed it 3-0!', time: '9:22 AM' }
        ],
        'alice-bob': [
            { id: 1, user: 'Alice', content: 'Hey both! Ready for the meeting?', time: '2:00 PM' },
            { id: 2, user: 'Bob', content: 'Just finishing up some slides.', time: '2:05 PM' },
            { id: 3, user: 'You', content: 'I\'ll be there in 5 minutes.', time: '2:07 PM' }
        ]
    };
    
    return (
        <>
            <h3>Chat with {roomDisplayName}</h3>
            {chatMessages[room].map(msg => (
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
