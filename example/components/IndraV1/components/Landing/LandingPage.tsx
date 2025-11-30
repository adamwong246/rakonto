import React from 'react';

export const LandingPage: React.FC = () => {
  return (
    <div className="landing-container">
      <div className="landing-hero">
        <div className="landing-content">
          <h1 className="landing-title">Indra</h1>
          <p className="landing-subtitle">
            A modern social network with transparent, usage-based billing
          </p>
          <div className="landing-features">
            <div className="feature">
              <h3>💰 Pay-as-you-go</h3>
              <p>Only pay for what you use, plus a simple 10% platform fee</p>
            </div>
            <div className="feature">
              <h3>🔒 Secure & Private</h3>
              <p>Your data is protected with enterprise-grade security</p>
            </div>
            <div className="feature">
              <h3>📊 Usage Tracking</h3>
              <p>Real-time visibility into your usage and costs</p>
            </div>
          </div>
          <div className="landing-cta">
            <p>Join thousands of users who trust Indra for their social networking needs</p>
          </div>
        </div>
      </div>
    </div>
  );
};
