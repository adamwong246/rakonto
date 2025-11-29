import React, { useState, useContext } from 'react';
import { Form, Button, InputGroup } from "react-bootstrap";
import { BackendContext } from './Backend.js';

export function SearchForm({ onSearch, context }) {
  const [query, setQuery] = useState("");
  const backend = useContext(BackendContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Always perform search, even with empty query
    // Get current user to filter out blocked users
    const currentUser = await backend.getCurrentUser();
    // Search for users, posts, and subjects
    const [userResults, postResults, subjectResults] = await Promise.all([
      backend.searchUsers(query, currentUser.uid),
      backend.searchPosts(query),
      backend.searchSubjects(query)
    ]);
    
    // Combine all results
    const allResults = [
      ...userResults.map(user => ({ type: 'user', data: user })),
      ...postResults.map(post => ({ type: 'post', data: post })),
      ...subjectResults.map(subject => ({ type: 'subject', data: subject }))
    ];
    
    onSearch(allResults);
  };

  const getPlaceholder = () => {
    if (context === 'friends') {
      return "Search for friends...";
    } else if (context === 'search') {
      return "Search users, posts, and subjects...";
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
