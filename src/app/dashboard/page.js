'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const router = useRouter();
  const { isAuthenticated, isAdmin } = useAuth();

  useEffect(() => {
    // Check if user is authenticated and admin
    if (isAuthenticated && isAdmin) {
      // Redirect to admin dashboard
      router.push('/admin/dashboard');
    } else if (isAuthenticated) {
      // Redirect to homepage for non-admin users
      router.push('/');
    } else {
      // Redirect to login
      router.push('/admin/login');
    }
  }, [isAuthenticated, isAdmin, router]);

  // This component doesn't render anything as it's only used for redirection
  return null;
}
