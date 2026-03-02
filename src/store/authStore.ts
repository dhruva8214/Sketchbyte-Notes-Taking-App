import { create } from 'zustand';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { auth } from '../firebase/config';

interface AuthState {
    user: User | null;
    loading: boolean;
    setUser: (user: User | null) => void;
    setLoading: (loading: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    loading: true,
    setUser: (user) => set({ user }),
    setLoading: (loading) => set({ loading }),
}));

import { useBoardStore } from './boardStore';

// Start listening to auth state once — call this from main.tsx
export const initAuth = () => {
    onAuthStateChanged(auth, (user) => {
        useAuthStore.setState({ user, loading: false });
        useBoardStore.getState().reloadBoards();
    });
};
