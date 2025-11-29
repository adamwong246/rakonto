import React from 'react';
import { Tab } from 'react-bootstrap';
import { ChatWall } from './ChatWall.js';
import { Settings } from './Settings.js';
import { LandingPage } from './LandingPage.js';

export function MainContent({ activeTab, chatRooms, currentUser, profileUser, focusedSubject, handleUserClick }) {
    return (
        <div style={{ padding: '20px', minHeight: '100%' }}>
            <Tab.Content>
                <Tab.Pane active={activeTab === 'about'}>
                    <LandingPage />
                </Tab.Pane>
                <Tab.Pane active={activeTab === 'profile'}>
                    <ChatWall 
                        showInputForm={true} 
                        context="profile" 
                        scrollDirection="down" 
                        profileUser={profileUser || currentUser}
                        onUserClick={handleUserClick}
                    />
                </Tab.Pane>
                
                <Tab.Pane active={activeTab === 'subject'}>
                    {console.log("MainContent rendering subject tab with focusedSubject:", focusedSubject)}
                    <ChatWall 
                        showInputForm={true} 
                        context="subject" 
                        scrollDirection="down" 
                        onUserClick={handleUserClick}
                        focusedSubject={focusedSubject}
                    />
                </Tab.Pane>
                
                <Tab.Pane active={activeTab === 'feed'}>
                    <ChatWall showInputForm={true} context="feed" scrollDirection="down" onUserClick={handleUserClick} />
                </Tab.Pane>
                
                <Tab.Pane active={activeTab === 'recommendations'}>
                    <ChatWall showInputForm={false} context="recommendations" scrollDirection="down" onUserClick={handleUserClick} />
                </Tab.Pane>
                
                {chatRooms.map(room => (
                    <Tab.Pane key={room.id} active={activeTab === room.id}>
                        <ChatWall showInputForm={true} context="chat" scrollDirection="down" room={room.id} onUserClick={handleUserClick} />
                    </Tab.Pane>
                ))}
                <Tab.Pane active={activeTab === 'popular'}>
                    <ChatWall showInputForm={false} context="popular" scrollDirection="down" onUserClick={handleUserClick} />
                </Tab.Pane>
                <Tab.Pane active={activeTab === 'search'}>
                    <ChatWall showInputForm={false} context="search" scrollDirection="down" onUserClick={handleUserClick} />
                </Tab.Pane>
                <Tab.Pane active={activeTab === 'friends'}>
                    <ChatWall showInputForm={false} context="friends" scrollDirection="down" onUserClick={handleUserClick} />
                </Tab.Pane>
                <Tab.Pane active={activeTab === 'notifications'}>
                    <ChatWall showInputForm={false} context="notifications" scrollDirection="down" onUserClick={handleUserClick} />
                </Tab.Pane>
                <Tab.Pane active={activeTab === 'blocked'}>
                    <ChatWall showInputForm={false} context="blocked" scrollDirection="down" onUserClick={handleUserClick} />
                </Tab.Pane>
                <Tab.Pane active={activeTab === 'following'}>
                    <ChatWall showInputForm={false} context="following" scrollDirection="down" onUserClick={handleUserClick} />
                </Tab.Pane>
                <Tab.Pane active={activeTab === 'followers'}>
                    <ChatWall showInputForm={false} context="followers" scrollDirection="down" onUserClick={handleUserClick} />
                </Tab.Pane>
                <Tab.Pane active={activeTab === 'neighbors'}>
                    <div style={{ textAlign: 'center', padding: '50px 20px', color: '#666' }}>
                        <h3>Neighbors</h3>
                        <p>This feature is coming soon!</p>
                        <p>Find users near your location</p>
                    </div>
                </Tab.Pane>
                <Tab.Pane active={activeTab === 'settings'}>
                    <Settings />
                </Tab.Pane>
            </Tab.Content>
        </div>
    );
}
