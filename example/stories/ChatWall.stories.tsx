import React from 'react';
import { ChatWall } from '../components/IndraV0/ChatWall.js';

export default function ChatWallStory() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
                <h3>Default ChatWall (Flat List, No Input)</h3>
                <ChatWall />
            </div>
            <div>
                <h3>ChatWall with Input Form (Flat List)</h3>
                <ChatWall showInputForm={true} />
            </div>
            <div>
                <h3>ChatWall as Chat Thread (No Input)</h3>
                <ChatWall isFlatList={false} />
            </div>
            <div>
                <h3>ChatWall as Chat Thread with Input</h3>
                <ChatWall showInputForm={true} isFlatList={false} />
            </div>
        </div>
    );
}
