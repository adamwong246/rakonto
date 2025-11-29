import React, { useState } from 'react';
import { Container, Row, Col, Tab } from 'react-bootstrap';
import { Sidebar } from './IndraV0/Sidebar.js';
import { ChatWall } from './IndraV0/ChatWall.js';

export function IndraV0() {
    const [activeTab, setActiveTab] = useState('profile');
    
    return (
        <Container fluid style={{ height: '100vh', padding: 0 }}>
            <Row style={{ height: '100%' }}>
                {/* Left Column - Tabs */}
                <Col xs={2} style={{ backgroundColor: '#4A154B', padding: 0 }}>
                    <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
                </Col>
                
                {/* Right Column - Content */}
                <Col xs={10} style={{ padding: 0, backgroundColor: 'white', display: 'flex', flexDirection: 'column' }}>
                    {/* Main Content Area */}
                    <div style={{ flex: 1, padding: '20px', overflow: 'auto' }}>
                        <Tab.Content>
                            <Tab.Pane active={activeTab === 'profile'}>
                                <ChatWall showInputForm={true} context="profile" />
                            </Tab.Pane>
                            
                            <Tab.Pane active={activeTab === 'feed'}>
                                <ChatWall showInputForm={true} context="feed" />
                            </Tab.Pane>
                            
                            <Tab.Pane active={activeTab === 'recommendations'}>
                                <ChatWall showInputForm={false} context="profile" />
                            </Tab.Pane>
                            
                            {['alice', 'bob', 'alice-bob'].map(room => (
                                <Tab.Pane key={room} active={activeTab === room}>
                                    <ChatWall showInputForm={true} context="chat" />
                                </Tab.Pane>
                            ))}
                        </Tab.Content>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
