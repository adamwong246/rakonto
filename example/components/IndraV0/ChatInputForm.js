import React from 'react';
import { Form, Button, InputGroup } from "react-bootstrap";

export function ChatInputForm({ message, setMessage, handleSubmit, position = 'top', replyingTo = null }) {
  const getPlaceholder = () => {
    return replyingTo ? "Type your reply..." : "Type your message...";
  };

  return (
    <div
      style={{
        padding: "20px 0",
        [position === 'top' ? 'borderBottom' : 'borderTop']: "1px solid #ddd",
        [position === 'top' ? 'marginBottom' : 'marginTop']: "20px",
      }}
    >
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          {replyingTo && (
            <InputGroup.Text style={{ fontSize: '12px', backgroundColor: '#e9ecef' }}>
              Replying...
            </InputGroup.Text>
          )}
          <Form.Control
            type="text"
            placeholder={getPlaceholder()}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button variant="primary" type="submit">
            {replyingTo ? 'Reply' : 'Send'}
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
}
