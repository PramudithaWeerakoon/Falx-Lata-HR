'use client'

import { useAuth } from '../../context/AuthContext';
import Link from 'next/link';

const UserMenuButton = () => {
  const { user, isAuthenticated, logout } = useAuth();
  
  // If user is not authenticated, don't render anything
  if (!isAuthenticated) {
    return null;
  }
  
  return (
    <div className="relative group">
      <button className="flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-full text-indigo-700 hover:bg-indigo-100 transition-colors">
        <span className="hidden sm:inline">
          {user?.name || user?.fullName || 'User'}
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
      </button>
      
      {/* Dropdown menu */}
      <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block z-50">
        <Link href="admin/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          Dashboard
        </Link>
        <button 
          onClick={logout} 
          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Sign out
        </button>
      </div>
    </div>
  );
};

export default UserMenuButton;
