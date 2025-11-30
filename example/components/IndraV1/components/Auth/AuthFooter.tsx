import React from 'react';

interface AuthFooterProps {
  showLogin: boolean;
  onSwitchMode: () => void;
}

export const AuthFooter: React.FC<AuthFooterProps> = ({ showLogin, onSwitchMode }) => {
  return (
    <div className="auth-footer">
      <p>
        {showLogin ? "Don't have an account?" : "Already have an account?"}
        <button 
          type="button" 
          onClick={onSwitchMode}
          className="auth-switch-btn"
        >
          {showLogin ? 'Sign Up' : 'Sign In'}
        </button>
      </p>
    </div>
  );
};
