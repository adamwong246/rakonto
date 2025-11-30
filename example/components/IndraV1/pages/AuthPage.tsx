import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthTabs } from '../components/Auth/AuthTabs';
import { AuthFooter } from '../components/Auth/AuthFooter';
import { ApiUrlInput } from '../components/Auth/ApiUrlInput';
import { LoginForm } from '../components/Auth/LoginForm';
import { SignupForm } from '../components/Auth/SignupForm';
import { ConfirmationForm } from '../components/Auth/ConfirmationForm';
import { useAuth } from '../hooks/useAuth';
import { useApi } from '../hooks/useApi';
import { useAuthOperations } from '../hooks/useAuthOperations';
import { useUsageOperations } from '../hooks/useUsageOperations';

export const AuthPage: React.FC = () => {
  const { auth, login } = useAuth();
  const { apiUrl, testingConnection, testApiConnection } = useApi();
  const { 
    formData, 
    setFormData, 
    loading, 
    setLoading, 
    message, 
    setMessage, 
    handleAuth 
  } = useAuthOperations();
  const {
    message: usageMessage  
  } = useUsageOperations();
  
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(true);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [pendingEmail, setPendingEmail] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");

  // Handle login success
  const handleLoginSuccess = (data: any) => {
    login(
      { userId: data.userId, email: data.email, name: data.name },
      data.token,
      data.refreshToken,
      data.idToken
    );
    setMessage("Login successful!");
    navigate('/dashboard');
  };

  // Handle signup success
  const handleSignupSuccess = (data: any) => {
    if (data.needsConfirmation) {
      setPendingEmail(formData.email);
      setShowConfirmation(true);
      setMessage(data.message || "Please check your email for the confirmation code");
      setFormData({ ...formData, password: "" });
    } else {
      setMessage("Account created successfully! Please sign in.");
      setShowLogin(true);
      setFormData({ email: "", password: "", name: "" });
    }
  };

  // Test API connection with error handling
  const handleTestConnection = async () => {
    try {
      const result = await testApiConnection();
      setMessage(result);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'An error occurred');
    }
  };

  // Use the imported handleAuth function from useAuthOperations hook
  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('handleAuthSubmit called');
    await handleAuth(apiUrl, showLogin, handleLoginSuccess, handleSignupSuccess);
  };

  // Confirmation form
  if (showConfirmation) {
    const handleConfirmation = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!confirmationCode) {
        setMessage("Please enter the confirmation code");
        return;
      }

      setLoading(true);
      setMessage("");

      try {
        const url = `${apiUrl.replace(/\/$/, "")}/auth/confirm`;
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: pendingEmail,
            confirmationCode: confirmationCode,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          setMessage("Account confirmed successfully! You can now sign in.");
          setShowConfirmation(false);
          setShowLogin(true);
          setConfirmationCode("");
          setPendingEmail("");
          setFormData({ email: pendingEmail, password: "", name: "" });
        } else {
          setMessage(`Error: ${data.error || "Confirmation failed"}`);
        }
      } catch (error) {
        setMessage("Network error: Unable to confirm account");
      } finally {
        setLoading(false);
      }
    };

    const resendConfirmationCode = async () => {
      setLoading(true);
      setMessage("");

      try {
        const url = `${apiUrl.replace(/\/$/, "")}/auth/resend-confirmation`;
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: pendingEmail,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          setMessage("Confirmation code sent successfully! Check your email.");
        } else {
          setMessage(`Error: ${data.error || "Failed to resend code"}`);
        }
      } catch (error) {
        setMessage("Network error: Unable to resend confirmation code");
      } finally {
        setLoading(false);
      }
    };

    return (
      <ConfirmationForm
        email={pendingEmail}
        confirmationCode={confirmationCode}
        onConfirmationCodeChange={setConfirmationCode}
        onSubmit={handleConfirmation}
        onResendCode={resendConfirmationCode}
        onBackToLogin={() => {
          setShowConfirmation(false);
          setShowLogin(true);
          setConfirmationCode("");
          setPendingEmail("");
          setMessage("");
        }}
        loading={loading}
      />
    );
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Indra</h1>
          <button 
            onClick={() => navigate('/')}
            style={{
              background: 'none',
              border: 'none',
              color: '#667eea',
              cursor: 'pointer',
              textDecoration: 'underline',
              marginTop: '10px'
            }}
          >
            ← Back to Home
          </button>
        </div>

        <ApiUrlInput
          apiUrl={apiUrl}
          onTestConnection={handleTestConnection}
          testingConnection={testingConnection}
        />

        <AuthTabs showLogin={showLogin} onTabChange={setShowLogin} />

        {showLogin ? (
          <LoginForm
            email={formData.email}
            password={formData.password}
            onEmailChange={(email) => setFormData({ ...formData, email })}
            onPasswordChange={(password) =>
              setFormData({ ...formData, password })
            }
            onSubmit={handleAuthSubmit}
            loading={loading}
          />
        ) : (
          <SignupForm
            name={formData.name}
            email={formData.email}
            password={formData.password}
            onNameChange={(name) => setFormData({ ...formData, name })}
            onEmailChange={(email) => setFormData({ ...formData, email })}
            onPasswordChange={(password) =>
              setFormData({ ...formData, password })
            }
            onSubmit={handleAuthSubmit}
            loading={loading}
          />
        )}

        <AuthFooter
          showLogin={showLogin}
          onSwitchMode={() => {
            setShowLogin(!showLogin);
            setMessage("");
          }}
        />

        {(message || usageMessage) && (
          <div
            className={`auth-message ${
              (message || usageMessage).includes("Error") ? "error" : "success"
            }`}
          >
            {message || usageMessage}
          </div>
        )}
      </div>
    </div>
  );
};
