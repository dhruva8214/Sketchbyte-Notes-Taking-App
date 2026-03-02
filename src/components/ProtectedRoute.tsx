import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

interface Props { children: React.ReactNode; }

const ProtectedRoute: React.FC<Props> = ({ children }) => {
    const { user, loading } = useAuthStore();

    if (loading) {
        return (
            <div className="auth-loading">
                <div className="auth-spinner" />
                <p>Loading...</p>
            </div>
        );
    }

    if (!user) return <Navigate to="/auth" replace />;
    return <>{children}</>;
};

export default ProtectedRoute;
