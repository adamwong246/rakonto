import React from 'react';

interface CostProcessingProps {
  onTriggerCostProcessing: () => void;
  triggerLoading: boolean;
  triggerMessage: string;
  hasToken: boolean;
}

export const CostProcessing: React.FC<CostProcessingProps> = ({
  onTriggerCostProcessing,
  triggerLoading,
  triggerMessage,
  hasToken
}) => {
  return (
    <div className="usage-section">
      <h2>Manual Cost Processing</h2>
      <p>Trigger the AWS cost collection job manually. This normally runs daily at 2 AM.</p>
      <div className="form-group">
        <button 
          onClick={onTriggerCostProcessing} 
          disabled={triggerLoading || !hasToken}
          className="trigger-button"
        >
          {triggerLoading ? '🔄 Triggering...' : '🚀 Trigger Cost Processing'}
        </button>
      </div>
      {triggerMessage && (
        <div className={triggerMessage.includes('✅') ? 'success' : 'error'}>
          {triggerMessage}
        </div>
      )}
    </div>
  );
};
