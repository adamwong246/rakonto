import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LandingPage as LandingPageComponent } from '../components/Landing/LandingPage';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/auth');
  };

  return (
    <div>
      <LandingPageComponent />
      <div style={{ textAlign: 'center', marginTop: '-100px', marginBottom: '50px' }}>
        <button 
          onClick={handleGetStarted}
          style={{
            padding: '15px 30px',
            fontSize: '1.2rem',
            backgroundColor: 'white',
            color: '#667eea',
            border: 'none',
            borderRadius: '25px',
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};
