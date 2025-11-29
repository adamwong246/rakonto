import React from 'react';

export function SubjectBanner({ subject, onShowSubjectModal }) {
    console.log("SubjectBanner rendering with subject:", subject);
    console.log("onShowSubjectModal function:", onShowSubjectModal);
    
    // Create a default subject if none is provided
    const displaySubject = subject || {
        name: 'General Discussion',
        description: 'Discuss various topics and subjects'
    };
    
    return (
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
            onClick={onShowSubjectModal}>
                📚
            </div>
            <div style={{ flex: 1 }}>
                <h2 style={{ margin: 0, fontWeight: 'bold' }}>{displaySubject.name}</h2>
                <p style={{ margin: '5px 0 0 0', opacity: 0.9 }}>
                    {displaySubject.description}
                </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-end' }}>
                <button 
                    onClick={onShowSubjectModal}
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
                    View Subject Details
                </button>
            </div>
        </div>
    );
}
