import React from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';

export function InputForm({ activeTab, message, setMessage, handleSubmit }) {
    const getPlaceholder = () => {
        if (activeTab === 'profile') return 'Add a public post...';
        if (activeTab === 'feed') return 'Post to your feed...';
        if (activeTab.startsWith('user-')) return 'Type your message...';
        if (activeTab === 'group-chat') return 'Message the group...';
        return 'Type your message...';
    };

    const getButtonText = () => {
        return (activeTab.startsWith('user-') || activeTab === 'group-chat') ? 'Send' : 'Post';
    };

    return (
        <div style={{ padding: '20px', borderTop: '1px solid #ddd' }}>
            <Form onSubmit={handleSubmit}>
                <InputGroup>
                    <Form.Control
                        type="text"
                        placeholder={getPlaceholder()}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <Button variant="primary" type="submit">
                        {getButtonText()}
                    </Button>
                </InputGroup>
            </Form>
        </div>
    );
}
