import React from 'react';
import { ChatWall } from '../components/IndraV0/ChatWall.js';

export default function PopularChatWallStory() {
    return (
        <div>
            <ChatWall showInputForm={false} context="popular" scrollDirection="down" />
        </div>
    );
}
