import React from 'react';
import { Form, Col } from 'react-bootstrap';

export function MetricSection({ 
    title, 
    score, 
    userScore, 
    onUserScoreChange,
    scoreMessage,
    color
}) {
    return (
        <Col md={6}>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h5>{title}</h5>
                <div style={{ 
                    fontSize: '24px', 
                    fontWeight: 'bold',
                    color: color,
                    margin: '10px 0'
                }}>
                    {score}/100
                </div>
                <div style={{ 
                    height: '15px',
                    backgroundColor: '#e9ecef',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    margin: '10px 0'
                }}>
                    <div 
                        style={{ 
                            height: '100%',
                            backgroundColor: color,
                            width: `${score}%`,
                            transition: 'width 0.3s ease'
                        }}
                    />
                </div>
                <p style={{ color: '#666', fontSize: '14px' }}>
                    {scoreMessage}
                </p>
                
                <Form.Group>
                    <Form.Label>Your Rating</Form.Label>
                    <Form.Range
                        min="0"
                        max="100"
                        value={userScore}
                        onChange={onUserScoreChange}
                    />
                    <div>{userScore}/100</div>
                </Form.Group>
            </div>
        </Col>
    );
}
