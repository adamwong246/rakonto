import React, { useState, useContext, useEffect } from 'react';
import { Modal, Button, Row } from 'react-bootstrap';
import { BackendContext } from './Backend.js';

import { BaseColor } from "./style.js"

export function UserMetricsModal({ show, onHide, targetUser, currentUser }) {
    const backend = useContext(BackendContext);
    const [userRatings, setUserRatings] = useState({
        isWhoTheySay: null,
        isBirthdateAccurate: null,
        isHuman: null
    });
    const [hasRated, setHasRated] = useState(false);
    const [allRatings, setAllRatings] = useState([]);

    useEffect(() => {
        if (show && targetUser && currentUser) {
            fetchUserRatings();
            fetchAllRatings();
        }
    }, [show, targetUser, currentUser]);

    const fetchUserRatings = async () => {
        try {
            const ratings = await backend.getUserRatings(currentUser.uid, targetUser.uid);
            if (ratings) {
                setUserRatings(ratings);
                setHasRated(true);
            } else {
                setUserRatings({
                    isWhoTheySay: null,
                    isBirthdateAccurate: null,
                    isHuman: null
                });
                setHasRated(false);
            }
        } catch (error) {
            console.error('Error fetching user ratings:', error);
        }
    };

    const fetchAllRatings = async () => {
        try {
            const ratings = await backend.getAllUserRatings(targetUser.uid);
            setAllRatings(ratings);
        } catch (error) {
            console.error('Error fetching all ratings:', error);
        }
    };

    const handleRatingChange = async (metric, value) => {
        const newRatings = {
            ...userRatings,
            [metric]: value
        };
        setUserRatings(newRatings);
        
        try {
            await backend.setUserRatings(currentUser.uid, targetUser.uid, newRatings);
            setHasRated(true);
            await fetchAllRatings();
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
            backgroundColor: isSelected ? BaseColor : 'white',
            color: isSelected ? 'white' : '#333',
            cursor: 'pointer',
            fontSize: '14px'
        };
    };

    const calculatePercentage = (metric, value) => {
        const ratingsWithValue = allRatings.filter(rating => 
            rating.ratings && rating.ratings[metric] === value
        );
        return allRatings.length > 0 ? Math.round((ratingsWithValue.length / allRatings.length) * 100) : 0;
    };

    if (!targetUser || !currentUser) return null;

    return (
        <Modal show={show} onHide={onHide} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title>User Verification - {targetUser.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p style={{ fontSize: '14px', color: '#6c757d', marginBottom: '20px' }}>
                    Help verify this user by answering these questions:
                </p>
                
                {/* Question 1: Is this person who they say they are? */}
                <div style={{ marginBottom: '25px' }}>
                    <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold', fontSize: '16px' }}>
                        1. Is this person who they say they are?
                    </label>
                    <div style={{ marginBottom: '10px' }}>
                        <button 
                            style={getButtonStyle('isWhoTheySay', true)}
                            onClick={() => handleRatingChange('isWhoTheySay', true)}
                        >
                            Yes ({calculatePercentage('isWhoTheySay', true)}%)
                        </button>
                        <button 
                            style={getButtonStyle('isWhoTheySay', false)}
                            onClick={() => handleRatingChange('isWhoTheySay', false)}
                        >
                            No ({calculatePercentage('isWhoTheySay', false)}%)
                        </button>
                        <button 
                            style={getButtonStyle('isWhoTheySay', null)}
                            onClick={() => handleRatingChange('isWhoTheySay', null)}
                        >
                            Unsure ({calculatePercentage('isWhoTheySay', null)}%)
                        </button>
                    </div>
                </div>
                
                {/* Question 2: Is this person's birthdate accurate? */}
                <div style={{ marginBottom: '25px' }}>
                    <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold', fontSize: '16px' }}>
                        2. Is this person's birthdate accurate?
                    </label>
                    <div style={{ marginBottom: '10px' }}>
                        <button 
                            style={getButtonStyle('isBirthdateAccurate', true)}
                            onClick={() => handleRatingChange('isBirthdateAccurate', true)}
                        >
                            Yes ({calculatePercentage('isBirthdateAccurate', true)}%)
                        </button>
                        <button 
                            style={getButtonStyle('isBirthdateAccurate', false)}
                            onClick={() => handleRatingChange('isBirthdateAccurate', false)}
                        >
                            No ({calculatePercentage('isBirthdateAccurate', false)}%)
                        </button>
                        <button 
                            style={getButtonStyle('isBirthdateAccurate', null)}
                            onClick={() => handleRatingChange('isBirthdateAccurate', null)}
                        >
                            Unsure ({calculatePercentage('isBirthdateAccurate', null)}%)
                        </button>
                    </div>
                </div>
                
                {/* Question 3: Is this user machine or human? */}
                <div style={{ marginBottom: '25px' }}>
                    <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold', fontSize: '16px' }}>
                        3. Is this user machine or human?
                    </label>
                    <div style={{ marginBottom: '10px' }}>
                        <button 
                            style={getButtonStyle('isHuman', true)}
                            onClick={() => handleRatingChange('isHuman', true)}
                        >
                            Human ({calculatePercentage('isHuman', true)}%)
                        </button>
                        <button 
                            style={getButtonStyle('isHuman', false)}
                            onClick={() => handleRatingChange('isHuman', false)}
                        >
                            Machine ({calculatePercentage('isHuman', false)}%)
                        </button>
                        <button 
                            style={getButtonStyle('isHuman', null)}
                            onClick={() => handleRatingChange('isHuman', null)}
                        >
                            Unsure ({calculatePercentage('isHuman', null)}%)
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

                {allRatings.length > 0 && (
                    <>
                        <hr />
                        <h5>All Ratings ({allRatings.length})</h5>
                        {allRatings.map((rating, index) => (
                            <div key={index} style={{ 
                                display: 'flex', 
                                justifyContent: 'space-between',
                                margin: '5px 0',
                                fontSize: '14px'
                            }}>
                                <span>User {rating.raterUid}</span>
                                <span>
                                    {rating.ratings.isWhoTheySay !== null ? (rating.ratings.isWhoTheySay ? 'Yes' : 'No') : '?'} / 
                                    {rating.ratings.isBirthdateAccurate !== null ? (rating.ratings.isBirthdateAccurate ? 'Yes' : 'No') : '?'} / 
                                    {rating.ratings.isHuman !== null ? (rating.ratings.isHuman ? 'Human' : 'Machine') : '?'}
                                </span>
                            </div>
                        ))}
                    </>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
