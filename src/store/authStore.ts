import { create } from 'zustand';
import { account } from '../lib/appwrite';

interface AuthState {
  user: any | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: true,
  error: null,
  login: async (email, password) => {
    try {
      set({ isLoading: true, error: null });
      const session = await account.createEmailSession(email, password);
      const user = await account.get();
      set({ user, isLoading: false });
    } catch (error) {
      set({ error: 'Login failed', isLoading: false });
    }
  },
  logout: async () => {
    try {
      await account.deleteSession('current');
      set({ user: null });
    } catch (error) {
      set({ error: 'Logout failed' });
    }
  },
  checkAuth: async () => {
    try {
      set({ isLoading: true });
      const user = await account.get();
      set({ user, isLoading: false });
    } catch (error) {
      set({ user: null, isLoading: false });
    }
  },
}));