import React from 'react';

interface UserUsage {
  userId: string;
  usage: {
    posts: number;
    storage: number;
    apiCalls: number;
    messages: number;
  };
  billing: {
    baseCharges: number;
    totalCharges: number;
    periodStart: number;
    periodEnd: number;
  };
}

interface UserCosts {
  userId: string;
  totalCost: number;
  indraFee: number;
  totalWithFee: number;
  costByService: Record<string, number>;
}

interface UsageDisplayProps {
  userId: string;
  onUserIdChange: (userId: string) => void;
  onGetUserUsage: () => void;
  userUsage: UserUsage | null;
  userCosts: UserCosts | null;
  loading: boolean;
}

const formatBytes = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

export const UsageDisplay: React.FC<UsageDisplayProps> = ({
  userId,
  onUserIdChange,
  onGetUserUsage,
  userUsage,
  userCosts,
  loading
}) => {
  return (
    <div className="usage-section">
      <h2>Get User Usage & Billing</h2>
      <div className="form-group">
        <label>User ID:</label>
        <input 
          type="text" 
          value={userId} 
          onChange={(e) => onUserIdChange(e.target.value)}
          placeholder="Enter user ID to query"
        />
      </div>
      <button onClick={onGetUserUsage} disabled={loading}>
        {loading ? 'Loading...' : 'Get Usage'}
      </button>
      
      {userUsage && (
        <div className="billing-section">
          <h3>Usage for {userUsage.userId}</h3>
          <div className="usage-metrics">
            <div className="metric">
              <strong>Posts:</strong> {userUsage.usage.posts}
            </div>
            <div className="metric">
              <strong>Storage:</strong> {formatBytes(userUsage.usage.storage)}
            </div>
            <div className="metric">
              <strong>API Calls:</strong> {userUsage.usage.apiCalls}
            </div>
            <div className="metric">
              <strong>Messages:</strong> {userUsage.usage.messages}
            </div>
          </div>
          <h4>Billing Information</h4>
          <div className="billing-metrics">
            <div className="metric">
              <strong>Base Charges:</strong> {formatCurrency(userUsage.billing.baseCharges)}
            </div>
            <div className="metric total">
              <strong>Total Charges (with 10% fee):</strong> {formatCurrency(userUsage.billing.totalCharges)}
            </div>
          </div>
        </div>
      )}
      
      {userCosts && (
        <div className="billing-section">
          <h3>AWS Costs for {userCosts.userId}</h3>
          <div className="billing-metrics">
            <div className="metric">
              <strong>Total AWS Costs:</strong> {formatCurrency(userCosts.totalCost)}
            </div>
            <div className="metric">
              <strong>Indra Fee (10%):</strong> {formatCurrency(userCosts.indraFee)}
            </div>
            <div className="metric total">
              <strong>Total with Fee:</strong> {formatCurrency(userCosts.totalWithFee)}
            </div>
          </div>
          {userCosts.costByService && Object.keys(userCosts.costByService).length > 0 && (
            <>
              <h4>Costs by Service</h4>
              <div className="usage-metrics">
                {Object.entries(userCosts.costByService).map(([service, cost]) => (
                  <div key={service} className="metric">
                    <strong>{service}:</strong> {formatCurrency(cost as number)}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};
