import React from 'react';
import { Nav } from 'react-bootstrap';

export function Sidebar({ activeTab, setActiveTab }) {
    return (
        <Nav variant="pills" className="flex-column" style={{ padding: '20px 0' }}>
            {/* Main Sections */}
            <Nav.Item>
                <Nav.Link 
                    eventKey="profile" 
                    active={activeTab === 'profile'}
                    onClick={() => setActiveTab('profile')}
                    style={{ 
                        color: 'white', 
                        borderRadius: 0,
                        backgroundColor: activeTab === 'profile' ? '#611f69' : 'transparent'
                    }}
                >
                    👤 Profile
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link 
                    eventKey="feed" 
                    active={activeTab === 'feed'}
                    onClick={() => setActiveTab('feed')}
                    style={{ 
                        color: 'white', 
                        borderRadius: 0,
                        backgroundColor: activeTab === 'feed' ? '#611f69' : 'transparent'
                    }}
                >
                    📰 Feed
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link 
                    eventKey="recommendations" 
                    active={activeTab === 'recommendations'}
                    onClick={() => setActiveTab('recommendations')}
                    style={{ 
                        color: 'white', 
                        borderRadius: 0,
                        backgroundColor: activeTab === 'recommendations' ? '#611f69' : 'transparent'
                    }}
                >
                    🔍 Recommendations
                </Nav.Link>
            </Nav.Item>
            
            {/* Chat Rooms */}
            <Nav.Item>
                <Nav.Link 
                    eventKey="alice" 
                    active={activeTab === 'alice'}
                    onClick={() => setActiveTab('alice')}
                    style={{ 
                        color: 'white', 
                        borderRadius: 0,
                        backgroundColor: activeTab === 'alice' ? '#611f69' : 'transparent'
                    }}
                >
                    💬 Alice
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link 
                    eventKey="bob" 
                    active={activeTab === 'bob'}
                    onClick={() => setActiveTab('bob')}
                    style={{ 
                        color: 'white', 
                        borderRadius: 0,
                        backgroundColor: activeTab === 'bob' ? '#611f69' : 'transparent'
                    }}
                >
                    💬 Bob
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link 
                    eventKey="alice-bob" 
                    active={activeTab === 'alice-bob'}
                    onClick={() => setActiveTab('alice-bob')}
                    style={{ 
                        color: 'white', 
                        borderRadius: 0,
                        backgroundColor: activeTab === 'alice-bob' ? '#611f69' : 'transparent'
                    }}
                >
                    💬 Alice & Bob
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}
