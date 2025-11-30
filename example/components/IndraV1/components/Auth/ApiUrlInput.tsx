import React from 'react';

interface ApiUrlInputProps {
  apiUrl: string;
  onTestConnection: () => void;
  testingConnection: boolean;
}

export const ApiUrlInput: React.FC<ApiUrlInputProps> = ({
  apiUrl,
  onTestConnection,
  testingConnection
}) => {
  return (
    <div className="form-group">
      <label>API Status:</label>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <button 
          type="button" 
          onClick={onTestConnection}
          disabled={testingConnection || !apiUrl}
          className="test-api-btn"
        >
          {testingConnection ? 'Testing...' : 'Test API Connection'}
        </button>
        {apiUrl && (
          <small style={{ color: '#666', fontSize: '12px' }}>
            API URL: {apiUrl}
          </small>
        )}
      </div>
    </div>
  );
};
