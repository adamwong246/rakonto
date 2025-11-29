import React, { useState } from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';

export function Settings() {
    const [notifications, setNotifications] = useState(true);
    const [emailUpdates, setEmailUpdates] = useState(false);
    const [theme, setTheme] = useState('light');
    const [language, setLanguage] = useState('english');
    const [privacy, setPrivacy] = useState('public');

    const handleSaveSettings = () => {
        alert('Settings saved successfully!');
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Settings</h2>
            
            <Card style={{ marginBottom: '20px' }}>
                <Card.Header>
                    <h5>Notification Preferences</h5>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Check
                            type="switch"
                            id="notifications-switch"
                            label="Enable push notifications"
                            checked={notifications}
                            onChange={(e) => setNotifications(e.target.checked)}
                        />
                        <Form.Check
                            type="switch"
                            id="email-updates-switch"
                            label="Email updates"
                            checked={emailUpdates}
                            onChange={(e) => setEmailUpdates(e.target.checked)}
                        />
                    </Form>
                </Card.Body>
            </Card>

            <Card style={{ marginBottom: '20px' }}>
                <Card.Header>
                    <h5>Appearance</h5>
                </Card.Header>
                <Card.Body>
                    <Form.Group>
                        <Form.Label>Theme</Form.Label>
                        <Form.Select 
                            value={theme} 
                            onChange={(e) => setTheme(e.target.value)}
                        >
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                            <option value="auto">Auto</option>
                        </Form.Select>
                    </Form.Group>
                </Card.Body>
            </Card>

            <Card style={{ marginBottom: '20px' }}>
                <Card.Header>
                    <h5>Language & Region</h5>
                </Card.Header>
                <Card.Body>
                    <Form.Group>
                        <Form.Label>Language</Form.Label>
                        <Form.Select 
                            value={language} 
                            onChange={(e) => setLanguage(e.target.value)}
                        >
                            <option value="english">English</option>
                            <option value="spanish">Spanish</option>
                            <option value="french">French</option>
                            <option value="german">German</option>
                            <option value="chinese">Chinese</option>
                        </Form.Select>
                    </Form.Group>
                </Card.Body>
            </Card>

            <Card style={{ marginBottom: '20px' }}>
                <Card.Header>
                    <h5>Privacy</h5>
                </Card.Header>
                <Card.Body>
                    <Form.Group>
                        <Form.Label>Default Post Privacy</Form.Label>
                        <Form.Select 
                            value={privacy} 
                            onChange={(e) => setPrivacy(e.target.value)}
                        >
                            <option value="public">Public</option>
                            <option value="friends">Friends Only</option>
                            <option value="private">Private</option>
                        </Form.Select>
                    </Form.Group>
                </Card.Body>
            </Card>

            <Card style={{ marginBottom: '20px' }}>
                <Card.Header>
                    <h5>Account</h5>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col>
                            <Button variant="outline-primary" style={{ marginRight: '10px' }}>
                                Change Password
                            </Button>
                            <Button variant="outline-secondary" style={{ marginRight: '10px' }}>
                                Export Data
                            </Button>
                            <Button variant="outline-danger">
                                Delete Account
                            </Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

            <div style={{ textAlign: 'center', marginTop: '30px' }}>
                <Button variant="primary" onClick={handleSaveSettings} size="lg">
                    Save Settings
                </Button>
            </div>
        </div>
    );
}
