import React from 'react';
import { ChatWall } from '../components/IndraV0/ChatWall.js';

export default function FeedChatWallStory() {
    return (
        <div>
            <ChatWall showInputForm={true} isFlatList={false} />
        </div>
    );
}
