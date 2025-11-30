import { useState } from 'react';

interface FormData {
    email: string;
    password: string;
    name: string;
}

interface AuthOperationsResult {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    message: string;
    setMessage: React.Dispatch<React.SetStateAction<string>>;
    handleAuth: (apiUrl: string, showLogin: boolean, onLoginSuccess: (userData: any) => void, onSignupSuccess: (data: any) => void) => Promise<void>;
}

export const useAuthOperations = (): AuthOperationsResult => {
    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: '',
        name: '',
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleAuth = async (
        apiUrl: string, 
        showLogin: boolean, 
        onLoginSuccess: (userData: any) => void,
        onSignupSuccess: (data: any) => void
    ) => {
        console.log('handleAuth called with:', { apiUrl, showLogin, formData });
        
        if (!apiUrl) {
            setMessage('Please enter your API URL');
            return;
        }

        if (!formData.email || !formData.password) {
            setMessage('Please fill in all required fields');
            return;
        }

        if (!showLogin && !formData.name) {
            setMessage('Please enter your name');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setMessage('Please enter a valid email address');
            return;
        }

        if (formData.password.length < 6) {
            setMessage('Password must be at least 6 characters long');
            return;
        }

        setLoading(true);
        setMessage('');

        try {
            const endpoint = showLogin ? 'login' : 'signup';
            const url = `${apiUrl.replace(/\/$/, '')}/auth/${endpoint}`;
            console.log('Making request to:', url);
            
            const response = await fetch(url, {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            console.log('Response status:', response.status);
            
            if (response.ok) {
                const data = await response.json();
                console.log('Response data:', data);
                
                if (showLogin) {
                    onLoginSuccess(data);
                    setFormData({ email: '', password: '', name: '' });
                } else {
                    onSignupSuccess(data);
                }
            } else {
                const data = await response.json();
                console.log('Error response:', data);
                setMessage(`Error: ${data.error || 'Authentication failed'}`);
            }
        } catch (error) {
            console.error('Network error:', error);
            setMessage('Network error: Unable to connect to the server');
        } finally {
            setLoading(false);
        }
    };

    return {
        formData,
        setFormData,
        loading,
        setLoading,
        message,
        setMessage,
        handleAuth
    };
};
