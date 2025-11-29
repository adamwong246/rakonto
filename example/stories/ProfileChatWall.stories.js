import React from 'react';
import { ChatWall } from '../components/IndraV0/ChatWall.js';

export default function ProfileChatWallStory() {
    return (
        <div>
            <ChatWall showInputForm={true} context="profile" scrollDirection="down" />
        </div>
    );
}
