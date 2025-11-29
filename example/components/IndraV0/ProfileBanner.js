import React, { useState, useContext, useEffect } from 'react';
import { BackendContext } from './Backend.js';
import { UserMetricsModal } from './UserMetricsModal.js';

export function ProfileBanner({ user }) {
    const backend = useContext(BackendContext);
    const [showMetricsModal, setShowMetricsModal] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [relationship, setRelationship] = useState('none');
    
    const displayName = user?.name || 'John Doe';
    const initials = displayName.split(' ').map(n => n[0]).join('').toUpperCase();
    
    // Fetch current user and relationship
    React.useEffect(() => {
        const fetchCurrentUserAndRelationship = async () => {
            try {
                const user = await backend.getCurrentUser();
                setCurrentUser(user);
                
                // Fetch relationship if viewing another user's profile
                if (user && user.uid !== user.uid) {
                    const rel = await backend.getRelationship(user.uid, user.uid);
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

    const handleRelationshipAction = async (action) => {
        try {
            await backend.updateRelationship(currentUser.uid, user.uid, action);
            // Refresh relationship status
            const newRel = await backend.getRelationship(currentUser.uid, user.uid);
            setRelationship(newRel);
        } catch (error) {
            console.error('Error updating relationship:', error);
        }
    };

    const renderRelationshipControls = () => {
        if (!currentUser || !user || currentUser.uid === user.uid) return null;
        
        const buttonStyle = {
            padding: '8px 16px',
            margin: '0 5px',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '20px',
            cursor: 'pointer',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '14px',
            transition: 'background-color 0.2s ease',
            backgroundColor: 'rgba(255, 255, 255, 0.2)'
        };

        const hoverStyle = {
            backgroundColor: 'rgba(255, 255, 255, 0.3)'
        };

        // Check individual relationship components
        const fromFollowsTo = relationship === 'following' || relationship === 'friends';
        const toFollowsFrom = relationship === 'followed-by' || relationship === 'friends';
        const fromBlocksTo = relationship === 'blocked';
        const toBlocksFrom = relationship === 'blocked-by';

        // If current user is blocked by the target user, show limited options
        if (toBlocksFrom) {
            return (
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <span style={{ 
                        padding: '8px 16px',
                        color: 'white',
                        fontSize: '14px'
                    }}>
                        This user has blocked you
                    </span>
                </div>
            );
        }

        // If current user has blocked the target user
        if (fromBlocksTo) {
            return (
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <span style={{ 
                        padding: '8px 16px',
                        color: 'white',
                        fontSize: '14px'
                    }}>
                        Blocked
                    </span>
                    <button 
                        onClick={() => handleRelationshipAction('unblock')}
                        style={buttonStyle}
                        onMouseEnter={(e) => Object.assign(e.target.style, hoverStyle)}
                        onMouseLeave={(e) => Object.assign(e.target.style, { backgroundColor: 'rgba(255, 255, 255, 0.2)' })}
                    >
                        Unblock
                    </button>
                </div>
            );
        }

        // Normal relationship controls when no blocking is involved
        if (fromFollowsTo && toFollowsFrom) {
            // Friends
            return (
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <span style={{ 
                        padding: '8px 16px',
                        color: 'white',
                        fontSize: '14px'
                    }}>
                        Friends
                    </span>
                    <button 
                        onClick={() => handleRelationshipAction('unfollow')}
                        style={buttonStyle}
                        onMouseEnter={(e) => Object.assign(e.target.style, hoverStyle)}
                        onMouseLeave={(e) => Object.assign(e.target.style, { backgroundColor: 'rgba(255, 255, 255, 0.2)' })}
                    >
                        Unfriend
                    </button>
                    <button 
                        onClick={() => handleRelationshipAction('block')}
                        style={buttonStyle}
                        onMouseEnter={(e) => Object.assign(e.target.style, hoverStyle)}
                        onMouseLeave={(e) => Object.assign(e.target.style, { backgroundColor: 'rgba(255, 255, 255, 0.2)' })}
                    >
                        Block
                    </button>
                </div>
            );
        } else if (fromFollowsTo) {
            // Following
            return (
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <span style={{ 
                        padding: '8px 16px',
                        color: 'white',
                        fontSize: '14px'
                    }}>
                        Following
                    </span>
                    <button 
                        onClick={() => handleRelationshipAction('unfollow')}
                        style={buttonStyle}
                        onMouseEnter={(e) => Object.assign(e.target.style, hoverStyle)}
                        onMouseLeave={(e) => Object.assign(e.target.style, { backgroundColor: 'rgba(255, 255, 255, 0.2)' })}
                    >
                        Unfollow
                    </button>
                    <button 
                        onClick={() => handleRelationshipAction('block')}
                        style={buttonStyle}
                        onMouseEnter={(e) => Object.assign(e.target.style, hoverStyle)}
                        onMouseLeave={(e) => Object.assign(e.target.style, { backgroundColor: 'rgba(255, 255, 255, 0.2)' })}
                    >
                        Block
                    </button>
                </div>
            );
        } else if (toFollowsFrom) {
            // Followed by
            return (
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <span style={{ 
                        padding: '8px 16px',
                        color: 'white',
                        fontSize: '14px'
                    }}>
                        Follows you
                    </span>
                    <button 
                        onClick={() => handleRelationshipAction('follow')}
                        style={buttonStyle}
                        onMouseEnter={(e) => Object.assign(e.target.style, hoverStyle)}
                        onMouseLeave={(e) => Object.assign(e.target.style, { backgroundColor: 'rgba(255, 255, 255, 0.2)' })}
                    >
                        Follow back
                    </button>
                    <button 
                        onClick={() => handleRelationshipAction('block')}
                        style={buttonStyle}
                        onMouseEnter={(e) => Object.assign(e.target.style, hoverStyle)}
                        onMouseLeave={(e) => Object.assign(e.target.style, { backgroundColor: 'rgba(255, 255, 255, 0.2)' })}
                    >
                        Block
                    </button>
                </div>
            );
        } else {
            // No relationship
            return (
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <button 
                        onClick={() => handleRelationshipAction('follow')}
                        style={buttonStyle}
                        onMouseEnter={(e) => Object.assign(e.target.style, hoverStyle)}
                        onMouseLeave={(e) => Object.assign(e.target.style, { backgroundColor: 'rgba(255, 255, 255, 0.2)' })}
                    >
                        Follow
                    </button>
                    <button 
                        onClick={() => handleRelationshipAction('block')}
                        style={buttonStyle}
                        onMouseEnter={(e) => Object.assign(e.target.style, hoverStyle)}
                        onMouseLeave={(e) => Object.assign(e.target.style, { backgroundColor: 'rgba(255, 255, 255, 0.2)' })}
                    >
                        Block
                    </button>
                </div>
            );
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
                    border: '4px solid rgba(255, 255, 255, 0.3)'
                }}>
                    {initials}
                </div>
                <div style={{ flex: 1 }}>
                    <h2 style={{ margin: 0, fontWeight: 'bold' }}>{displayName}</h2>
                    <p style={{ margin: '5px 0 0 0', opacity: 0.9 }}>
                        {user?.bio || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                    </p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-end' }}>
                    {/* Relationship Controls */}
                    {renderRelationshipControls()}
                    
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
        </>
    );
}
