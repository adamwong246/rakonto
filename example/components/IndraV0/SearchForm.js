import React, { useState, useContext } from 'react';
import { Form, Button, InputGroup } from "react-bootstrap";
import { BackendContext } from './Backend.js';

export function SearchForm({ onSearch, context }) {
  const [query, setQuery] = useState("");
  const backend = useContext(BackendContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (query.trim()) {
      // Get current user to filter out blocked users
      const currentUser = await backend.getCurrentUser();
      const results = await backend.searchUsers(query, currentUser.uid);
      onSearch(results);
    }
  };

  const getPlaceholder = () => {
    if (context === 'friends') {
      return "Search for friends...";
    } else if (context === 'search') {
      return "Search for posts, users, or topics...";
    } else {
      return "Search...";
    }
  };

  return (
    <div
      style={{
        padding: "20px 0",
        borderBottom: "1px solid #ddd",
        marginBottom: "20px",
      }}
    >
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Form.Control
            type="text"
            placeholder={getPlaceholder()}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button variant="primary" type="submit">
            Search
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
}
