import React from 'react';
import { ChatWall } from '../components/IndraV0/ChatWall.js';

export default function ThreadChatWallStory() {
    return (
        <div>
            <ChatWall showInputForm={true} isFlatList={false} />
        </div>
    );
}
