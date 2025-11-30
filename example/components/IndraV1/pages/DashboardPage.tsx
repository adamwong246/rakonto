import React from 'react';
import { Header } from '../components/Dashboard/Header';
import { ApiUrlInput } from '../components/Auth/ApiUrlInput';
import { useAuth } from '../hooks/useAuth';
import { useApi } from '../hooks/useApi';
import { useUsageOperations } from '../hooks/useUsageOperations';
import { useCostProcessing } from '../hooks/useCostProcessing';
import { UsageDisplay } from '../components/Dashboard/UsageDisplay';
import { CostProcessing } from '../components/Dashboard/CostProcessing';

export const        DashboardPage: React.FC = () => {
  const { auth, logout } = useAuth();
  const { apiUrl, testingConnection, testApiConnection } = useApi();
  const {
    userId,
    setUserId,
    userUsage,
    setUserUsage,
    userCosts,
    setUserCosts,
    loading,
    setLoading,
    message,
    setMessage,
    getUserUsage
  } = useUsageOperations();
  const {
    triggerLoading,
    setTriggerLoading,
    triggerMessage,
    setTriggerMessage,
    triggerCostProcessing
  } = useCostProcessing();

  // Test API connection with error handling
  const handleTestConnection = async () => {
    try {
      const result = await testApiConnection();
      setMessage(result);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'An error occurred');
    }
  };

  const handleGetUserUsage = () => {
    getUserUsage(apiUrl);
  };

  const handleTriggerCostProcessing = () => {
    triggerCostProcessing(apiUrl, auth.token);
  };

  return (
    <div className="container">
      <Header
        userName={auth.user?.name || ""}
        userEmail={auth.user?.email || ""}
        onLogout={logout}
      />

      <ApiUrlInput
        apiUrl={apiUrl}
        onTestConnection={handleTestConnection}
        testingConnection={testingConnection}
      />

      {(message || triggerMessage) && (
        <div className={(message || triggerMessage).includes("Error") ? "error" : "success"}>
          {message || triggerMessage}
        </div>
      )}

      <UsageDisplay
        userId={userId}
        onUserIdChange={setUserId}
        onGetUserUsage={handleGetUserUsage}
        userUsage={userUsage}
        userCosts={userCosts}
        loading={loading}
      />

      <CostProcessing
        onTriggerCostProcessing={handleTriggerCostProcessing}
        triggerLoading={triggerLoading}
        triggerMessage={triggerMessage}
        hasToken={!!auth.token}
      />
      
      
    </div>
  );
};
