import React from 'react';

interface SignupFormProps {
  name: string;
  email: string;
  password: string;
  onNameChange: (name: string) => void;
  onEmailChange: (email: string) => void;
  onPasswordChange: (password: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  loading: boolean;
}

export const SignupForm: React.FC<SignupFormProps> = ({
  name,
  email,
  password,
  onNameChange,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  loading
}) => {
  return (
    <form onSubmit={onSubmit} className="auth-form">
      <div className="form-group">
        <label>Full Name</label>
        <input 
          type="text" 
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          placeholder="Enter your full name"
          required
        />
      </div>
      
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
            Creating account...
          </span>
        ) : (
          'Create Account'
        )}
      </button>
    </form>
  );
};
