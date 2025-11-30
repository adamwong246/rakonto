import { useState, useEffect } from 'react';

interface AuthState {
    isAuthenticated: boolean;
    user: { userId: string; email: string; name: string } | null;
    token: string | null;
    refreshToken?: string;
    idToken?: string;
}

export const useAuth = () => {
    const [auth, setAuth] = useState<AuthState>({
        isAuthenticated: false,
        user: null,
        token: null,
    });

    useEffect(() => {
        const storedAuth = localStorage.getItem('indra-auth');
        if (storedAuth) {
            const authData = JSON.parse(storedAuth);
            setAuth(authData);
        }
    }, []);

    const login = (userData: { userId: string; email: string; name: string }, token: string, refreshToken?: string, idToken?: string) => {
        const newAuth = {
            isAuthenticated: true,
            user: userData,
            token,
            refreshToken,
            idToken,
        };
        setAuth(newAuth);
        localStorage.setItem('indra-auth', JSON.stringify(newAuth));
    };

    const logout = () => {
        setAuth({ isAuthenticated: false, user: null, token: null });
        localStorage.removeItem('indra-auth');
    };

    return {
        auth,
        login,
        logout,
        setAuth
    };
};
