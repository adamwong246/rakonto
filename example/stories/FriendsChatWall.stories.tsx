import React from 'react';
import { ChatWall } from '../components/IndraV0/ChatWall.js';

export default function FriendsChatWallStory() {
    return (
        <div>
            <ChatWall showInputForm={false} context="friends" scrollDirection="down" />
        </div>
    );
}
