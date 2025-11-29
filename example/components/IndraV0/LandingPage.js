import React from 'react';

export function LandingPage() {
    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 20px',
            textAlign: 'center'
        }}>
            {/* Header */}
            <div style={{ marginBottom: '60px' }}>
                <h1 style={{
                    fontSize: '4rem',
                    fontWeight: 'bold',
                    marginBottom: '20px',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                }}>
                    Indra
                </h1>
                <p style={{
                    fontSize: '1.5rem',
                    opacity: 0.9,
                    maxWidth: '600px',
                    margin: '0 auto'
                }}>
                    Scrolling down got you down? Try a healthier, happier social network.
                </p>
            </div>

            {/* Features Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '30px',
                maxWidth: '1200px',
                width: '100%',
                marginBottom: '60px'
            }}>
                {/* Feature 1 */}
                <div style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    padding: '30px',
                    borderRadius: '15px',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                    <div style={{
                        fontSize: '3rem',
                        marginBottom: '20px'
                    }}>
                        💬
                    </div>
                    <h3 style={{
                        fontSize: '1.5rem',
                        marginBottom: '15px'
                    }}>
                        Free of Dark Patterns
                    </h3>
                    <p style={{
                        opacity: 0.8,
                        lineHeight: '1.6'
                    }}>
                        Indra is designed to help, not hurt. We'll never use deceptive design or UX patterns that harm the user.
                    </p>
                </div>

                {/* Feature 2 */}
                <div style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    padding: '30px',
                    borderRadius: '15px',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                    <div style={{
                        fontSize: '3rem',
                        marginBottom: '20px'
                    }}>
                        🌟
                    </div>
                    <h3 style={{
                        fontSize: '1.5rem',
                        marginBottom: '15px'
                    }}>
                        Pay as you go
                    </h3>
                    <p style={{
                        opacity: 0.8,
                        lineHeight: '1.6'
                    }}>
                        Indra is metered, which means you pay for only what you use, and you'll never see an advertisement. The average user spends about 5$ a month.
                    </p>
                </div>

                {/* Feature 3 */}
                <div style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    padding: '30px',
                    borderRadius: '15px',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                    <div style={{
                        fontSize: '3rem',
                        marginBottom: '20px'
                    }}>
                        🔒
                    </div>
                    <h3 style={{
                        fontSize: '1.5rem',
                        marginBottom: '15px'
                    }}>
                        Privacy for everyone
                    </h3>
                    <p style={{
                        opacity: 0.8,
                        lineHeight: '1.6'
                    }}>
                        Control your data and who sees your content with comprehensive privacy settings. We'll will never sell your data. 
                    </p>
                </div>

                {/* Feature 4 */}
                <div style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    padding: '30px',
                    borderRadius: '15px',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                    <div style={{
                        fontSize: '3rem',
                        marginBottom: '20px'
                    }}>
                        🧠
                    </div>
                    <h3 style={{
                        fontSize: '1.5rem',
                        marginBottom: '15px'
                    }}>
                        Self-Moderation
                    </h3>
                    <p style={{
                        opacity: 0.8,
                        lineHeight: '1.6'
                    }}>
                        Indra is the first entirely self-moderated social network. Users validate one another and everyone one polices the content. We provide easy tools for reporting illegal content to the police.

                    </p>
                </div>

                {/* Feature 5 */}
                <div style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    padding: '30px',
                    borderRadius: '15px',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                    <div style={{
                        fontSize: '3rem',
                        marginBottom: '20px'
                    }}>
                        🌐
                    </div>
                    <h3 style={{
                        fontSize: '1.5rem',
                        marginBottom: '15px'
                    }}>
                        Indra is free (as in free speech)
                    </h3>
                    <p style={{
                        opacity: 0.8,
                        lineHeight: '1.6'
                    }}>
                        Indra will never be an arbiter of truth or morality. Our user's can decide for themselves whats real and whats right, but we provide the means of rating content based on it's likability, age appropriateness, fact or fiction, truth or deceptive and even machine generated or human made. 

                    </p>
                </div>

                {/* Feature 6 - Call to Action */}
                <div style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    padding: '30px',
                    borderRadius: '15px',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <div style={{
                        fontSize: '3rem',
                        marginBottom: '20px'
                    }}>
                        🚀
                    </div>
                    <h3 style={{
                        fontSize: '1.5rem',
                        marginBottom: '15px'
                    }}>
                        Ready to Get Started?
                    </h3>
                    <p style={{
                        opacity: 0.8,
                        lineHeight: '1.6',
                        marginBottom: '20px'
                    }}>
                        Join thousands of users already connecting on Indra.
                    </p>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px'
                    }}>
                        <button style={{
                            padding: '12px 24px',
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            backgroundColor: 'white',
                            color: '#667eea',
                            border: 'none',
                            borderRadius: '25px',
                            cursor: 'pointer',
                            transition: 'transform 0.2s ease',
                            width: '100%'
                        }}
                        onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                        onClick={() => alert('Sign up functionality would go here')}
                        >
                            Sign Up Free
                        </button>
                        <button style={{
                            padding: '12px 24px',
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            backgroundColor: 'transparent',
                            color: 'white',
                            border: '2px solid white',
                            borderRadius: '25px',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            width: '100%'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = 'white';
                            e.target.style.color = '#667eea';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                            e.target.style.color = 'white';
                        }}
                        onClick={() => alert('Learn more functionality would go here')}
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div style={{
                marginTop: '60px',
                paddingTop: '30px',
                borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                width: '100%',
                maxWidth: '1200px'
            }}>
                <p style={{
                    opacity: 0.7,
                    fontSize: '0.9rem'
                }}>
                    © 2024 Indra. All rights reserved.
                </p>
            </div>
        </div>
    );
}
