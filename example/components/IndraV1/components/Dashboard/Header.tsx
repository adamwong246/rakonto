import React from 'react';

interface HeaderProps {
  userName: string;
  userEmail: string;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ userName, userEmail, onLogout }) => {
  return (
    <div className="header">
      <h1>Indra Social Network Dashboard</h1>
      <div className="user-info">
        Welcome, {userName} ({userEmail})
        <button onClick={onLogout} className="logout-button">Logout</button>
      </div>
    </div>
  );
};
