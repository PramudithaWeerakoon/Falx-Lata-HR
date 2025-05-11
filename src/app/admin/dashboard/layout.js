'use client'

import { useAuth } from '@/app/context/AuthContext';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AdminSidebar from '@/app/components/Admin/AdminSidebar';

export default function AdminDashboardLayout({ children }) {
  const { isAuthenticated, isAdmin, loading, user } = useAuth();
  const router = useRouter();
  
  // Debug auth state
  useEffect(() => {
    console.log('Dashboard Layout - Auth State:', { 
      isAuthenticated, 
      isAdmin, 
      loading,
      user: user ? `${user.email} (${user.role})` : 'No user'
    });
  }, [isAuthenticated, isAdmin, loading, user]);
    
  // Redirect if not authenticated as admin
  useEffect(() => {
    // Add a small delay to ensure authentication state is loaded
    const checkAuth = setTimeout(() => {
      if (!loading) {
        if (!isAuthenticated || !isAdmin) {
          console.log('Not authenticated as admin, redirecting to login');
          router.push('/admin/login');
        } else {
          console.log('User is authenticated as admin, showing dashboard');
        }
      }
    }, 500);
    
    return () => clearTimeout(checkAuth);
  }, [isAuthenticated, isAdmin, loading, router]);
  
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }
  
  // Don't render anything while redirecting
  if (!isAuthenticated || !isAdmin) {
    return null;
  }
  
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <AdminSidebar />
      
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none pt-2 pb-6 md:pt-0 md:pb-0">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
