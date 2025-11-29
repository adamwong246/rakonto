import React, { useState, useContext, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { BackendContext } from './Backend.js';

import { BaseColor } from "./style.js";

export function RelationshipModal({ show, onHide, targetUser, currentUser }) {
    const backend = useContext(BackendContext);
    const [relationship, setRelationship] = useState('none');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchRelationship = async () => {
            if (!targetUser || !currentUser) return;
            try {
                const rel = await backend.getRelationship(currentUser.uid, targetUser.uid);
                setRelationship(rel);
            } catch (error) {
                console.error('Error fetching relationship:', error);
            }
        };

        if (show) {
            fetchRelationship();
        }
    }, [show, targetUser, currentUser, backend]);

    const handleRelationshipAction = async (action) => {
        if (!targetUser || !currentUser) return;
        
        setIsLoading(true);
        try {
            await backend.updateRelationship(currentUser.uid, targetUser.uid, action);
            const newRel = await backend.getRelationship(currentUser.uid, targetUser.uid);
            setRelationship(newRel);
        } catch (error) {
            console.error('Error updating relationship:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const getRelationshipStatus = () => {
        switch (relationship) {
            case 'friends':
                return 'Friends';
            case 'following':
                return 'Following';
            case 'followed-by':
                return 'Follows you';
            case 'blocked':
                return 'Blocked';
            case 'blocked-by':
                return 'This user has blocked you';
            default:
                return 'Not connected';
        }
    };

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Manage Relationship with {targetUser?.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <div style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        backgroundColor: BaseColor,
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        marginBottom: '15px'
                    }}>
                        {targetUser?.name?.charAt(0) || 'U'}
                    </div>
                    <h5>{targetUser?.name}</h5>
                    <p style={{ color: '#666', marginBottom: '20px' }}>
                        Current status: <strong>{getRelationshipStatus()}</strong>
                    </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {relationship === 'none' && (
                        <>
                            <Button 
                                variant="primary" 
                                onClick={() => handleRelationshipAction('follow')}
                                disabled={isLoading}
                            >
                                Follow
                            </Button>
                            <Button 
                                variant="outline-danger" 
                                onClick={() => handleRelationshipAction('block')}
                                disabled={isLoading}
                            >
                                Block
                            </Button>
                        </>
                    )}
                    
                    {relationship === 'following' && (
                        <>
                            <Button 
                                variant="outline-primary" 
                                onClick={() => handleRelationshipAction('unfollow')}
                                disabled={isLoading}
                            >
                                Unfollow
                            </Button>
                            <Button 
                                variant="outline-danger" 
                                onClick={() => handleRelationshipAction('block')}
                                disabled={isLoading}
                            >
                                Block
                            </Button>
                        </>
                    )}
                    
                    {relationship === 'followed-by' && (
                        <>
                            <Button 
                                variant="primary" 
                                onClick={() => handleRelationshipAction('follow')}
                                disabled={isLoading}
                            >
                                Follow Back
                            </Button>
                            <Button 
                                variant="outline-danger" 
                                onClick={() => handleRelationshipAction('block')}
                                disabled={isLoading}
                            >
                                Block
                            </Button>
                        </>
                    )}
                    
                    {relationship === 'friends' && (
                        <>
                            <Button 
                                variant="outline-primary" 
                                onClick={() => handleRelationshipAction('unfollow')}
                                disabled={isLoading}
                            >
                                Unfriend
                            </Button>
                            <Button 
                                variant="outline-danger" 
                                onClick={() => handleRelationshipAction('block')}
                                disabled={isLoading}
                            >
                                Block
                            </Button>
                        </>
                    )}
                    
                    {relationship === 'blocked' && (
                        <>
                            <Button 
                                variant="outline-primary" 
                                onClick={() => handleRelationshipAction('unblock')}
                                disabled={isLoading}
                            >
                                Unblock
                            </Button>
                        </>
                    )}
                    
                    {relationship === 'blocked-by' && (
                        <p style={{ textAlign: 'center', color: '#666' }}>
                            You cannot perform actions on this user as they have blocked you.
                        </p>
                    )}
                </div>
            </Modal.Body>
        </Modal>
    );
}
