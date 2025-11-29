import React from 'react';
import { Post } from './Post.js';

export function ChatWallContent({ 
    isLoading, 
    focusedPostId, 
    focusedPost, 
    displayPosts, 
    sortedPosts, 
    context, 
    onReply, 
    onUserClick 
}) {
    console.log("ChatWallContent rendering with onUserClick:", onUserClick);
    if (isLoading) {
        return <div style={{ textAlign: 'center', padding: '20px' }}>Loading...</div>;
    }

    if (focusedPostId) {
        // Show focused post's children (replies)
        return focusedPost.children && focusedPost.children.length > 0 ? (
            focusedPost.children.map((post) => (
                <Post 
                    key={post.id} 
                    post={post} 
                    context={context} 
                    onReply={onReply}
                    onUserClick={onUserClick}
                />
            ))
        ) : (
            <div style={{ textAlign: 'center', padding: '20px', color: '#666' }}>
                No replies yet. Be the first to reply!
            </div>
        );
    }

    if (sortedPosts.length > 0) {
        return sortedPosts.map((post) => (
            <Post 
                key={post.id} 
                post={post} 
                context={context} 
                onReply={onReply}
                onUserClick={onUserClick}
            />
        ));
    } else {
        // Show appropriate message based on context
        let message = "No posts found";
        if (context === 'profile') {
            message = "This user hasn't posted anything yet.";
        }
        return (
            <div style={{ textAlign: 'center', padding: '20px', color: '#666' }}>
                {message}
            </div>
        );
    }
}
