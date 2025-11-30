import { useState } from 'react';

interface CostProcessingResult {
    triggerLoading: boolean;
    setTriggerLoading: React.Dispatch<React.SetStateAction<boolean>>;
    triggerMessage: string;
    setTriggerMessage: React.Dispatch<React.SetStateAction<string>>;
    triggerCostProcessing: (apiUrl: string, token: string | null) => Promise<void>;
}

export const useCostProcessing = (): CostProcessingResult => {
    const [triggerLoading, setTriggerLoading] = useState(false);
    const [triggerMessage, setTriggerMessage] = useState('');

    const triggerCostProcessing = async (apiUrl: string, token: string | null) => {
        if (!apiUrl || !token) {
            setTriggerMessage('Please ensure you are logged in and API URL is set');
            return;
        }
        
        setTriggerLoading(true);
        setTriggerMessage('');
        
        try {
            const url = `${apiUrl.replace(/\/$/, '')}/costs/process`;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });
            
            const data = await response.json();
            
            if (response.ok) {
                setTriggerMessage(`✅ ${data.message} (Job ID: ${data.jobId})`);
            } else {
                setTriggerMessage(`❌ Error: ${data.error}`);
            }
        } catch (error) {
            setTriggerMessage('❌ Failed to trigger cost processing - check API URL');
        } finally {
            setTriggerLoading(false);
        }
    };

    return {
        triggerLoading,
        setTriggerLoading,
        triggerMessage,
        setTriggerMessage,
        triggerCostProcessing
    };
};
