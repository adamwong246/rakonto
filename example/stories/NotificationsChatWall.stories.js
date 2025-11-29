import React from 'react';
import { ChatWall } from '../components/IndraV0/ChatWall.js';

export default function NotificationsChatWallStory() {
    return (
        <div>
            <ChatWall showInputForm={false} context="notifications" scrollDirection="down" />
        </div>
    );
}
