'use client'

import { createContext, useContext, useState, useEffect } from 'react';

// Create the authentication context
const AuthContext = createContext();

// Create a provider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // Check for existing user session on mount
  useEffect(() => {
    const checkUserSession = () => {
      try {
        // Check if we have a user in localStorage
        const storedUser = localStorage.getItem('user');
        
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          // Set the user in state
          setUser(parsedUser);
        }
      } catch (error) {
        console.error('Error retrieving auth state:', error);
        // If there's an error parsing the user data, clear it
        localStorage.removeItem('user');
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    // Initial check
    checkUserSession();

    // Add event listener for storage changes
    window.addEventListener('storage', checkUserSession);
    
    // Cleanup
    return () => {
      window.removeEventListener('storage', checkUserSession);
    };
  }, []);
  // Login function
  const login = (userData) => {
    try {
      // First store user data in localStorage to ensure it persists
      localStorage.setItem('user', JSON.stringify(userData));
      // Then update state
      setUser(userData);
      console.log('User logged in successfully:', userData);
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  // Logout function
  const logout = () => {
    try {
      // First remove from localStorage
      localStorage.removeItem('user');
      // Then update state
      setUser(null);
      console.log('User logged out successfully');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };  // Context value
  const value = {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'ADMIN',
  };

  // Debug auth context state changes
  useEffect(() => {
    console.log('Auth Context State:', { 
      user: user ? `${user.email} (${user.role})` : 'No user',
      isAuthenticated: !!user,
      isAdmin: user?.role === 'ADMIN',
      loading
    });
  }, [user, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom hook to use the auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
