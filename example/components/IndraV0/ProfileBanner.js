import React, { useState, useContext, useEffect } from 'react';
import { BackendContext } from './Backend.js';
import { UserMetricsModal } from './UserMetricsModal.js';
import { RelationshipModal } from './RelationshipModal.js';
import { AboutModal } from './AboutModal.js';

export function ProfileBanner({ user }) {
    const backend = useContext(BackendContext);
    const [showMetricsModal, setShowMetricsModal] = useState(false);
    const [showRelationshipModal, setShowRelationshipModal] = useState(false);
    const [showAboutModal, setShowAboutModal] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [relationship, setRelationship] = useState('none');
    
    const displayName = user?.name || 'John Doe';
    const initials = displayName.split(' ').map(n => n[0]).join('').toUpperCase();
    
    // Fetch current user and relationship
    React.useEffect(() => {
        const fetchCurrentUserAndRelationship = async () => {
            try {
                const currentUserData = await backend.getCurrentUser();
                setCurrentUser(currentUserData);
                
                // Fetch relationship if viewing another user's profile
                if (currentUserData && user && currentUserData.uid !== user.uid) {
                    const rel = await backend.getRelationship(currentUserData.uid, user.uid);
                    setRelationship(rel);
                }
            } catch (error) {
                console.error('Error fetching current user:', error);
            }
        };
        
        fetchCurrentUserAndRelationship();
    }, [backend, user]);

    // Update relationship when user changes
    useEffect(() => {
        const fetchRelationship = async () => {
            if (currentUser && user && currentUser.uid !== user.uid) {
                try {
                    const rel = await backend.getRelationship(currentUser.uid, user.uid);
                    setRelationship(rel);
                } catch (error) {
                    console.error('Error fetching relationship:', error);
                }
            }
        };
        
        fetchRelationship();
    }, [currentUser, user, backend]);

    const handleVerifyClick = () => {
        setShowMetricsModal(true);
    };

    const handleRelationshipClick = () => {
        setShowRelationshipModal(true);
    };

    const handleAboutClick = () => {
        setShowAboutModal(true);
    };

    const getRelationshipSummary = () => {
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
                return 'Blocked by user';
            default:
                return 'Not connected';
        }
    };

    return (
        <>
            <div style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '12px',
                padding: '30px',
                marginBottom: '20px',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                position: 'relative'
            }}>
                <div style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '36px',
                    fontWeight: 'bold',
                    border: '4px solid rgba(255, 255, 255, 0.3)',
                    cursor: 'pointer'
                }}
                onClick={handleAboutClick}>
                    {initials}
                </div>
                <div style={{ flex: 1 }}>
                    <h2 style={{ margin: 0, fontWeight: 'bold' }}>{displayName}</h2>
                    <p style={{ margin: '5px 0 0 0', opacity: 0.9, cursor: 'pointer' }}
                       onClick={handleAboutClick}>
                        {user?.aboutMe || user?.bio || 'This user hasn\'t written an about me yet.'}
                    </p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-end' }}>
                    {/* Relationship Summary and Button */}
                    {currentUser && user && currentUser.uid !== user.uid && (
                        <>
                            <div style={{ 
                                padding: '8px 16px',
                                color: 'white',
                                fontSize: '14px',
                                textAlign: 'center'
                            }}>
                                Status: <strong>{getRelationshipSummary()}</strong>
                            </div>
                            <button 
                                onClick={handleRelationshipClick}
                                style={{
                                    padding: '10px 20px',
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                    border: '1px solid rgba(255, 255, 255, 0.3)',
                                    borderRadius: '20px',
                                    cursor: 'pointer',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    fontSize: '14px',
                                    transition: 'background-color 0.2s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                                }}
                            >
                                Manage Relationship
                            </button>
                        </>
                    )}
                    
                    {/* About Button - Show for all users including own profile */}
                    <button 
                        onClick={handleAboutClick}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            border: '1px solid rgba(255, 255, 255, 0.3)',
                            borderRadius: '20px',
                            cursor: 'pointer',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '14px',
                            transition: 'background-color 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                        }}
                    >
                        View About
                    </button>
                    
                    {/* Verify Button - Only show if user is not viewing their own profile */}
                    {currentUser && user && currentUser.uid !== user.uid && (
                        <button 
                            onClick={handleVerifyClick}
                            style={{
                                padding: '10px 20px',
                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                border: '1px solid rgba(255, 255, 255, 0.3)',
                                borderRadius: '20px',
                                cursor: 'pointer',
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '14px',
                                transition: 'background-color 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                            }}
                        >
                            Verify User
                        </button>
                    )}
                </div>
            </div>
            
            {/* User Metrics Modal */}
            <UserMetricsModal 
                show={showMetricsModal}
                onHide={() => setShowMetricsModal(false)}
                targetUser={user}
                currentUser={currentUser}
            />
            
            {/* Relationship Modal */}
            <RelationshipModal 
                show={showRelationshipModal}
                onHide={() => setShowRelationshipModal(false)}
                targetUser={user}
                currentUser={currentUser}
            />
            
            {/* About Modal */}
            <AboutModal 
                show={showAboutModal}
                onHide={() => setShowAboutModal(false)}
                user={user}
            />
        </>
    );
}
