import { useState } from 'react';

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

interface UsageOperationsResult {
    userId: string;
    setUserId: React.Dispatch<React.SetStateAction<string>>;
    userUsage: UserUsage | null;
    setUserUsage: React.Dispatch<React.SetStateAction<UserUsage | null>>;
    userCosts: UserCosts | null;
    setUserCosts: React.Dispatch<React.SetStateAction<UserCosts | null>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    message: string;
    setMessage: React.Dispatch<React.SetStateAction<string>>;
    getUserUsage: (apiUrl: string) => Promise<void>;
}

export const useUsageOperations = (): UsageOperationsResult => {
    const [userId, setUserId] = useState('');
    const [userUsage, setUserUsage] = useState<UserUsage | null>(null);
    const [userCosts, setUserCosts] = useState<UserCosts | null>(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const getUserUsage = async (apiUrl: string) => {
        if (!apiUrl || !userId) {
            setMessage('Please enter both API URL and User ID');
            return;
        }
        
        setLoading(true);
        setMessage('');
        try {
            const [usageResponse, costsResponse] = await Promise.all([
                fetch(`${apiUrl.replace(/\/$/, '')}/usage/${userId}`),
                fetch(`${apiUrl.replace(/\/$/, '')}/costs/${userId}`)
            ]);
            
            if (usageResponse.ok) {
                const data = await usageResponse.json();
                setUserUsage(data);
                setMessage('Usage data loaded successfully!');
            } else {
                const error = await usageResponse.json();
                setMessage(`Error: ${error.error}`);
                setUserUsage(null);
            }

            if (costsResponse.ok) {
                const costsData = await costsResponse.json();
                setUserCosts(costsData);
            } else {
                setUserCosts(null);
            }
        } catch (error) {
            setMessage('Failed to fetch usage data');
            setUserUsage(null);
            setUserCosts(null);
        } finally {
            setLoading(false);
        }
    };

    return {
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
    };
};
