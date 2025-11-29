import React from 'react';
import { Button } from 'react-bootstrap';

export function ActionButtons({ 
    onSaveAllRatings, 
    onSetLikability, 
    userLikabilityScore 
}) {
    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Button 
                variant="primary" 
                onClick={onSaveAllRatings}
                style={{ marginRight: '10px' }}
            >
                Save All Ratings
            </Button>
            <Button 
                variant="primary" 
                onClick={onSetLikability}
                style={{ marginRight: '10px' }}
            >
                {userLikabilityScore !== null ? 'Update Likability' : 'Set Likability'}
            </Button>
            <Button 
                variant="danger" 
                onClick={() => alert('Report submitted! Thank you for helping keep our community safe.')}
            >
                Report Post
            </Button>
        </div>
    );
}
