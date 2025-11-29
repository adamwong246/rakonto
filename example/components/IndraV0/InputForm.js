import React from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';

export function InputForm({ activeTab, message, setMessage, handleSubmit }) {
    const getPlaceholder = () => {
        switch (activeTab) {
            case 'profile': return 'Add a public post...';
            case 'feed': return 'Post to your feed...';
            case 'alice': return 'Message Alice...';
            case 'bob': return 'Message Bob...';
            case 'alice-bob': return 'Message Alice & Bob...';
            default: return 'Type your message...';
        }
    };

    const getButtonText = () => {
        return ['alice', 'bob', 'alice-bob'].includes(activeTab) ? 'Send' : 'Post';
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
