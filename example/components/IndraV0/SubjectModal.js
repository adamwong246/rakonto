import React, { useState, useContext, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { BackendContext } from './Backend.js';

export function SubjectModal({ show, onHide, subject, currentUser }) {
    const backend = useContext(BackendContext);
    const [userLoveHate, setUserLoveHate] = useState(null);
    const [allLoveHates, setAllLoveHates] = useState([]);
    const [users, setUsers] = useState([]);

    // Create a default subject if none is provided
    const displaySubject = subject || {
        id: 'default-subject',
        name: 'General Discussion',
        description: 'Discuss various topics and subjects'
    };

    useEffect(() => {
        const fetchData = async () => {
            if (!currentUser) return;
            
            try {
                // Get all users to display names
                const userList = await backend.getUsers();
                setUsers(userList);
                
                // Get current user's love/hate for this subject
                const userItems = currentUser.loveHateItems || [];
                const userItem = userItems.find(item => item.subjectId === displaySubject.id);
                setUserLoveHate(userItem ? (userItem.isLove ? 'love' : 'hate') : null);
                
                // Get all love/hate items for this subject from all users
                // For now, we'll use a placeholder implementation
                // In a real app, you'd have a backend method to get this
                const allItems = [];
                for (const user of userList) {
                    if (user.loveHateItems) {
                        const item = user.loveHateItems.find(i => i.subjectId === displaySubject.id);
                        if (item) {
                            allItems.push({
                                user,
                                isLove: item.isLove
                            });
                        }
                    }
                }
                setAllLoveHates(allItems);
            } catch (error) {
                console.error('Error fetching subject data:', error);
            }
        };

        if (show) {
            fetchData();
        }
    }, [show, displaySubject, currentUser, backend]);

    const handleLoveHate = async (action) => {
        if (!currentUser) return;
        
        try {
            const newLoveHate = action === 'love';
            const updatedItems = (currentUser.loveHateItems || []).filter(item => item.subjectId !== displaySubject.id);
            updatedItems.push({
                subjectId: displaySubject.id,
                isLove: newLoveHate
            });
            
            await backend.updateUser(currentUser.uid, {
                loveHateItems: updatedItems
            });
            
            setUserLoveHate(action);
            
            // Update allLoveHates
            const userIndex = allLoveHates.findIndex(item => item.user.uid === currentUser.uid);
            if (userIndex !== -1) {
                const newAllLoveHates = [...allLoveHates];
                newAllLoveHates[userIndex].isLove = newLoveHate;
                setAllLoveHates(newAllLoveHates);
            } else {
                setAllLoveHates([...allLoveHates, {
                    user: currentUser,
                    isLove: newLoveHate
                }]);
            }
        } catch (error) {
            console.error('Error updating love/hate:', error);
        }
    };

    const loves = allLoveHates.filter(item => item.isLove);
    const hates = allLoveHates.filter(item => !item.isLove);

    return (
        <Modal show={show} onHide={onHide} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Subject: {displaySubject.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <div style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        backgroundColor: '#4A154B',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '36px',
                        fontWeight: 'bold',
                        marginBottom: '20px'
                    }}>
                        📚
                    </div>
                    <h4>{displaySubject.name}</h4>
                    <p style={{ color: '#666' }}>{displaySubject.description}</p>
                </div>
                
                <div style={{ marginBottom: '30px' }}>
                    <h5 style={{ color: '#4A154B', marginBottom: '15px' }}>Your Reaction</h5>
                    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                        <Button 
                            variant={userLoveHate === 'love' ? 'success' : 'outline-success'}
                            onClick={() => handleLoveHate('love')}
                            style={{ padding: '10px 20px' }}
                        >
                            ❤️ Love
                        </Button>
                        <Button 
                            variant={userLoveHate === 'hate' ? 'danger' : 'outline-danger'}
                            onClick={() => handleLoveHate('hate')}
                            style={{ padding: '10px 20px' }}
                        >
                            💔 Hate
                        </Button>
                        {userLoveHate && (
                            <Button 
                                variant="outline-secondary"
                                onClick={() => handleLoveHate('remove')}
                                style={{ padding: '10px 20px' }}
                            >
                                Remove
                            </Button>
                        )}
                    </div>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                        <h5 style={{ color: '#4A154B', marginBottom: '15px' }}>Loved By ({loves.length})</h5>
                        <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                            {loves.map((item, index) => (
                                <div key={index} style={{
                                    padding: '8px',
                                    backgroundColor: '#f8f9fa',
                                    marginBottom: '5px',
                                    borderRadius: '4px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px'
                                }}>
                                    <div style={{
                                        width: '30px',
                                        height: '30px',
                                        borderRadius: '50%',
                                        backgroundColor: '#4A154B',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        fontSize: '12px',
                                        fontWeight: 'bold'
                                    }}>
                                        {item.user.name.charAt(0)}
                                    </div>
                                    {item.user.name}
                                </div>
                            ))}
                            {loves.length === 0 && (
                                <p style={{ color: '#666', textAlign: 'center' }}>No loves yet</p>
                            )}
                        </div>
                    </div>
                    
                    <div>
                        <h5 style={{ color: '#4A154B', marginBottom: '15px' }}>Hated By ({hates.length})</h5>
                        <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                            {hates.map((item, index) => (
                                <div key={index} style={{
                                    padding: '8px',
                                    backgroundColor: '#f8f9fa',
                                    marginBottom: '5px',
                                    borderRadius: '4px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px'
                                }}>
                                    <div style={{
                                        width: '30px',
                                        height: '30px',
                                        borderRadius: '50%',
                                        backgroundColor: '#4A154B',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        fontSize: '12px',
                                        fontWeight: 'bold'
                                    }}>
                                        {item.user.name.charAt(0)}
                                    </div>
                                    {item.user.name}
                                </div>
                            ))}
                            {hates.length === 0 && (
                                <p style={{ color: '#666', textAlign: 'center' }}>No hates yet</p>
                            )}
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}
