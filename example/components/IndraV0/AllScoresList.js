import React from 'react';

export function AllScoresList({ allScores }) {
    if (allScores.length === 0) return null;
    
    return (
        <>
            <hr />
            <h5>All Likability Ratings ({allScores.length})</h5>
            {allScores.map((ls, index) => (
                <div key={index} style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    margin: '5px 0'
                }}>
                    <span>User {ls.userId}</span>
                    <span>{ls.score}/100</span>
                </div>
            ))}
        </>
    );
}
