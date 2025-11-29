import React from 'react';
import { Form, Col } from 'react-bootstrap';

export function LikabilitySection({ 
    averageLikability, 
    score, 
    onScoreChange,
    scoreMessage,
    color
}) {
    return (
        <Col md={6}>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h5>Likability</h5>
                <div style={{ 
                    fontSize: '36px', 
                    fontWeight: 'bold',
                    color: color,
                    margin: '10px 0'
                }}>
                    {averageLikability}/100
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
                            width: `${averageLikability}%`,
                            transition: 'width 0.3s ease'
                        }}
                    />
                </div>
                <p style={{ color: '#666', fontSize: '14px' }}>
                    {scoreMessage}
                </p>
                
                <Form.Group>
                    <Form.Label>Your Likability Rating</Form.Label>
                    <Form.Range
                        min="0"
                        max="100"
                        value={score}
                        onChange={onScoreChange}
                    />
                    <div>{score}/100</div>
                </Form.Group>
            </div>
        </Col>
    );
}
