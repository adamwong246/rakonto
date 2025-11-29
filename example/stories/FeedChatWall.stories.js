import React from 'react';
import { ChatWall } from '../components/IndraV0/ChatWall.js';

export default function FeedChatWallStory() {
    return (
        <div>
            <ChatWall showInputForm={true} context="feed" scrollDirection="down" />
        </div>
    );
}
