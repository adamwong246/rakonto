import React from 'react';

export function FocusedPostBanner({ focusedPost, onBack, onShowLikabilityModal }) {
    return (
        <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '12px',
            padding: '20px',
            marginBottom: '20px',
            color: 'white',
            position: 'relative'
        }}>
            <button 
                onClick={onBack}
                style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    background: 'rgba(255, 255, 255, 0.2)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    color: 'white',
                    cursor: 'pointer'
                }}
            >
                ←
            </button>
            <div style={{ marginLeft: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                    <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        border: '2px solid rgba(255, 255, 255, 0.3)'
                    }}>
                        {focusedPost.user?.charAt(0) || 'U'}
                    </div>
                    <div>
                        <h4 style={{ margin: 0, fontWeight: 'bold' }}>{focusedPost.user}</h4>
                        <div style={{ fontSize: '14px', opacity: 0.9 }}>{focusedPost.time}</div>
                    </div>
                </div>
                <div style={{ fontSize: '16px', lineHeight: '1.4', marginBottom: '10px' }}>
                    {focusedPost.content}
                </div>
                {/* Assessment button in the focused post banner */}
                {focusedPost.hasLikability && (
                    <button 
                        onClick={onShowLikabilityModal}
                        style={{
                            fontSize: '14px',
                            padding: '8px 16px',
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            border: '1px solid rgba(255, 255, 255, 0.3)',
                            borderRadius: '20px',
                            cursor: 'pointer',
                            color: 'white',
                            fontWeight: 'bold'
                        }}
                    >
                        Assess Post: {focusedPost.likability || 0}%
                    </button>
                )}
            </div>
        </div>
    );
}
