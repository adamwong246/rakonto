import React, { useState, useContext, useEffect } from 'react';
import { BackendContext } from './Backend.js';

export function UserMetrics({ targetUser, currentUser }) {
    const backend = useContext(BackendContext);
    const [userRatings, setUserRatings] = useState({
        isWhoTheySay: null,
        isBirthdateAccurate: null,
        isHuman: null
    });
    const [hasRated, setHasRated] = useState(false);

    useEffect(() => {
        const fetchUserRatings = async () => {
            if (!targetUser || !currentUser) return;
            
            try {
                const ratings = await backend.getUserRatings(currentUser.uid, targetUser.uid);
                if (ratings) {
                    setUserRatings(ratings);
                    setHasRated(true);
                }
            } catch (error) {
                console.error('Error fetching user ratings:', error);
            }
        };
        
        fetchUserRatings();
    }, [backend, targetUser, currentUser]);

    const handleRatingChange = async (metric, value) => {
        if (!targetUser || !currentUser) return;
        
        const newRatings = {
            ...userRatings,
            [metric]: value
        };
        setUserRatings(newRatings);
        
        try {
            await backend.setUserRatings(currentUser.uid, targetUser.uid, newRatings);
            setHasRated(true);
        } catch (error) {
            console.error('Error setting user ratings:', error);
        }
    };

    const getButtonStyle = (metric, value) => {
        const isSelected = userRatings[metric] === value;
        return {
            padding: '8px 16px',
            margin: '0 5px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            backgroundColor: isSelected ? '#4A154B' : 'white',
            color: isSelected ? 'white' : '#333',
            cursor: 'pointer',
            fontSize: '14px'
        };
    };

    if (!targetUser || targetUser.uid === currentUser?.uid) return null;

    return (
        <div style={{
            background: '#f8f9fa',
            borderRadius: '8px',
            padding: '20px',
            marginBottom: '20px',
            border: '1px solid #e9ecef'
        }}>
            <h5 style={{ marginBottom: '15px', color: '#495057' }}>User Verification</h5>
            <p style={{ fontSize: '14px', color: '#6c757d', marginBottom: '20px' }}>
                Help verify this user by answering these questions:
            </p>
            
            {/* Question 1: Is this person who they say they are? */}
            <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', fontSize: '14px' }}>
                    1. Is this person who they say they are?
                </label>
                <div>
                    <button 
                        style={getButtonStyle('isWhoTheySay', true)}
                        onClick={() => handleRatingChange('isWhoTheySay', true)}
                    >
                        Yes
                    </button>
                    <button 
                        style={getButtonStyle('isWhoTheySay', false)}
                        onClick={() => handleRatingChange('isWhoTheySay', false)}
                    >
                        No
                    </button>
                    <button 
                        style={getButtonStyle('isWhoTheySay', null)}
                        onClick={() => handleRatingChange('isWhoTheySay', null)}
                    >
                        Unsure
                    </button>
                </div>
            </div>
            
            {/* Question 2: Is this person's birthdate accurate? */}
            <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', fontSize: '14px' }}>
                    2. Is this person's birthdate accurate?
                </label>
                <div>
                    <button 
                        style={getButtonStyle('isBirthdateAccurate', true)}
                        onClick={() => handleRatingChange('isBirthdateAccurate', true)}
                    >
                        Yes
                    </button>
                    <button 
                        style={getButtonStyle('isBirthdateAccurate', false)}
                        onClick={() => handleRatingChange('isBirthdateAccurate', false)}
                    >
                        No
                    </button>
                    <button 
                        style={getButtonStyle('isBirthdateAccurate', null)}
                        onClick={() => handleRatingChange('isBirthdateAccurate', null)}
                    >
                        Unsure
                    </button>
                </div>
            </div>
            
            {/* Question 3: Is this user machine or human? */}
            <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', fontSize: '14px' }}>
                    3. Is this user machine or human?
                </label>
                <div>
                    <button 
                        style={getButtonStyle('isHuman', true)}
                        onClick={() => handleRatingChange('isHuman', true)}
                    >
                        Human
                    </button>
                    <button 
                        style={getButtonStyle('isHuman', false)}
                        onClick={() => handleRatingChange('isHuman', false)}
                    >
                        Machine
                    </button>
                    <button 
                        style={getButtonStyle('isHuman', null)}
                        onClick={() => handleRatingChange('isHuman', null)}
                    >
                        Unsure
                    </button>
                </div>
            </div>
            
            {hasRated && (
                <div style={{ 
                    marginTop: '15px', 
                    padding: '10px', 
                    backgroundColor: '#d4edda', 
                    borderRadius: '4px',
                    color: '#155724',
                    fontSize: '14px'
                }}>
                    Thank you for your ratings!
                </div>
            )}
        </div>
    );
}
