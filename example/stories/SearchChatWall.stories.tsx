import React from 'react';
import { ChatWall } from '../components/IndraV0/ChatWall.js';

export default function SearchChatWallStory() {
    return (
        <div>
            <ChatWall showInputForm={false} context="search" scrollDirection="down" />
        </div>
    );
}
