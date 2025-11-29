import React from 'react';
import { ChatWall } from '../components/IndraV0/ChatWall.js';

export default function RecommendationsChatWallStory() {
    return (
        <div>
            <ChatWall showInputForm={false} isFlatList={true} />
        </div>
    );
}
