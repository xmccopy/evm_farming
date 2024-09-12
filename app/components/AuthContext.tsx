'use client'

import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from "react";

interface User {
    email: string;
}

interface AuthContextType {
    user: User | null;
    setUser: (user: User | null) => void;
    logout: () => void;
    // isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [user, setUser] = useState<User | null>(null);
    // const [isLoading, setIsLoading] = useState(true);

    const fetchUserData = useCallback(async (token: string) => {
        try {
            const response = await axios.get<User>(`/api/user`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setUser(response.data);
        } catch (error) {
            console.error('Failed to fetch user:', error);
            router.push('/signup');
        } finally {
            // setIsLoading(false);
        }
    }, [router]);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if(!storedToken) {
            router.push('/signin');
        } else {
            fetchUserData(storedToken);
        }
    }, [router, fetchUserData]);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        // setIsLoading(false);
    }, []);

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token && !user) {
            router.push('/signup');
        }

    }, [user, router]);

    const setUserAndStore = (newUser: User | null) => {
        setUser(newUser);
        if (newUser) {
            localStorage.setItem('user', JSON.stringify(newUser));
        } else {
            localStorage.removeItem('user');
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
        router.push('/login');
    };

    return (
        <AuthContext.Provider value={{ user, setUser: setUserAndStore, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};