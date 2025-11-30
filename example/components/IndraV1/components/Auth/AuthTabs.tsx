import React from 'react';

console.log("HelloAuthTabs")
interface AuthTabsProps {
  showLogin: boolean;
  onTabChange: (showLogin: boolean) => void;
}

export const AuthTabs: React.FC<AuthTabsProps> = ({ showLogin, onTabChange }) => {
  return (
    <div className="auth-tabs">
      <button 
        className={`tab ${showLogin ? 'active' : ''}`}
        onClick={() => onTabChange(true)}
      >
        Login
      </button>
      <button 
        className={`tab ${!showLogin ? 'active' : ''}`}
        onClick={() => onTabChange(false)}
      >
        Sign Up
      </button>
    </div>
  );
};
