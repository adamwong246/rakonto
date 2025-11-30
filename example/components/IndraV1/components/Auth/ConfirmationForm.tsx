import React from 'react';

interface ConfirmationFormProps {
  email: string;
  confirmationCode: string;
  onConfirmationCodeChange: (code: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onResendCode: () => void;
  onBackToLogin: () => void;
  loading: boolean;
}

export const ConfirmationForm: React.FC<ConfirmationFormProps> = ({
  email,
  confirmationCode,
  onConfirmationCodeChange,
  onSubmit,
  onResendCode,
  onBackToLogin,
  loading
}) => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Confirm Your Account</h1>
          <p>Enter the confirmation code sent to your email</p>
        </div>

        <form onSubmit={onSubmit} className="auth-form">
          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              value={email}
              disabled
              className="api-url-input"
            />
          </div>
          
          <div className="form-group">
            <label>Confirmation Code</label>
            <input 
              type="text" 
              value={confirmationCode}
              onChange={(e) => onConfirmationCodeChange(e.target.value)}
              placeholder="Enter 6-digit code"
              required
              maxLength={6}
            />
            <button 
              type="button" 
              onClick={onResendCode}
              disabled={loading}
              className="auth-switch-btn resend-code-btn"
            >
              Resend Code
            </button>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="auth-submit-btn"
          >
            {loading ? (
              <span className="loading">
                <span className="spinner"></span>
                Confirming...
              </span>
            ) : (
              'Confirm Account'
            )}
          </button>
        </form>

        <div className="auth-footer">
          <button 
            type="button" 
            onClick={onBackToLogin}
            className="auth-switch-btn"
          >
            Back to Sign In
          </button>
        </div>
      </div>
    </div>
  );
};
