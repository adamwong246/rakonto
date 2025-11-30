import React from 'react';

interface LoginFormProps {
  email: string;
  password: string;
  onEmailChange: (email: string) => void;
  onPasswordChange: (password: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  loading: boolean;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  loading
}) => {
  return (
    <form onSubmit={onSubmit} className="auth-form">
      <div className="form-group">
        <label>Email Address</label>
        <input 
          type="email" 
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          placeholder="Enter your email"
          required
        />
      </div>
      
      <div className="form-group">
        <label>Password</label>
        <input 
          type="password" 
          value={password}
          onChange={(e) => onPasswordChange(e.target.value)}
          placeholder="Enter your password"
          required
          minLength={6}
        />
        <small className="password-hint">
          Password must be at least 6 characters long
        </small>
      </div>

      <button 
        type="submit" 
        disabled={loading}
        className="auth-submit-btn"
      >
        {loading ? (
          <span className="loading">
            <span className="spinner"></span>
            Signing in...
          </span>
        ) : (
          'Sign In'
        )}
      </button>
    </form>
  );
};
