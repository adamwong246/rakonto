import { useState, useEffect } from 'react';
import { getApiUrl } from '../config'; // Change this import

export const useApi = () => {
    const [apiUrl] = useState(() => {
        // Use the injected API URL first
        const injectedUrl = getApiUrl();
        if (injectedUrl) return injectedUrl;
        
        // Fallback for local development
        if (process.env.NODE_ENV === 'development') {
            return 'http://localhost:3000';
        }
        return '';
    });
    const [testingConnection, setTestingConnection] = useState(false);

    const testApiConnection = async () => {
        if (!apiUrl) {
            throw new Error('API URL is not configured');
        }
        
        setTestingConnection(true);
        try {
            const testUrl = `${apiUrl.replace(/\/$/, '')}/auth/login`;
            console.log('Testing API connection to:', testUrl);
            
            const response = await fetch(testUrl, {
                method: 'OPTIONS',
                headers: { 
                    'Content-Type': 'application/json',
                    'Access-Control-Request-Method': 'POST',
                    'Access-Control-Request-Headers': 'Content-Type'
                },
            });
            
            console.log('API test response status:', response.status);
            
            if (response.status === 200) {
                return '✅ API is reachable! CORS is configured correctly.';
            } else {
                return `⚠️ API responded with status: ${response.status}. The API might be reachable but CORS configuration may be incorrect.`;
            }
        } catch (error) {
            console.error('API test error:', error);
            throw new Error('❌ API is not reachable. Please check the deployment status.');
        } finally {
            setTestingConnection(false);
        }
    };

    return {
        apiUrl,
        testingConnection,
        testApiConnection
    };
};
