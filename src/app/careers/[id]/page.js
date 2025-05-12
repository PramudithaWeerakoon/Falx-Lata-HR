'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Header from '../../components/Main/Header';
import Footer from '../../components/Main/Footer';
import ConditionalWhatsAppButton from '../../components/Main/ConditionalWhatsAppButton';

export default function VacancyDetailsPage({ params }) {
  const router = useRouter();
  const { id } = params;
  
  const [vacancy, setVacancy] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Fetch vacancy details
  useEffect(() => {
    async function fetchVacancy() {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/vacancies/${id}`);
        
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Vacancy not found');
          }
          throw new Error('Failed to fetch vacancy details');
        }
        
        const data = await response.json();
        setVacancy(data.vacancy);
      } catch (err) {
        console.error('Error fetching vacancy:', err);
        setError(err.message || 'Failed to load vacancy details');
      } finally {
        setIsLoading(false);
      }
    }
    
    if (id) {
      fetchVacancy();
    }
  }, [id]);
  
  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };
  
  // Format salary display
  const formatSalary = (salary) => {
    if (!salary) return 'Not specified';
    return salary;
  };
  
  // Format deadline
  const formatDeadline = (deadlineField, applyLinkField) => {
    // First, try to use the dedicated deadline field
    if (deadlineField) {
      const deadlineDate = new Date(deadlineField);
      if (!isNaN(deadlineDate.getTime())) {
        return deadlineDate.toLocaleDateString('en-US', {
          year: 'numeric', 
          month: 'long', 
          day: 'numeric'
        });
      }
    }
    
    // If no deadline field, try to parse the applyLink field which might contain the date
    if (applyLinkField) {
      try {
        // First, try direct date parsing
        const applyLinkDate = new Date(applyLinkField);
        
        if (!isNaN(applyLinkDate.getTime())) {
          return applyLinkDate.toLocaleDateString('en-US', {
            year: 'numeric', 
            month: 'long', 
            day: 'numeric'
          });
        }
        
        // If it's a string but not a parseable date, just return it as is
        return applyLinkField;
      } catch (e) {
        console.error('Error parsing date from applyLink:', e);
        // If parsing fails, return the string as is
        return applyLinkField;
      }
    }

    // If no deadline data available, generate a default deadline (30 days from now)
    const defaultDate = new Date();
    defaultDate.setDate(defaultDate.getDate() + 30);
    return defaultDate.toLocaleDateString('en-US', {
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    });
  };
  
  // Format sections with line breaks
  const formatText = (text) => {
    if (!text) return null;
    
    return text.split('\n').map((line, index) => (
      <p key={index} className="mb-2">
        {line}
      </p>
    ));
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent"></div>
            <p className="ml-4 text-indigo-600">Loading vacancy details...</p>
          </div>
        ) : error ? (
          <div className="max-w-3xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-9v4a1 1 0 102 0V9a1 1 0 10-2 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">{error}</p>
                  <div className="mt-4">
                    <Link href="/careers" className="text-red-700 underline font-medium hover:text-red-600">
                      Back to all vacancies
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : vacancy ? (
          <>
            {/* Header section */}
            <div className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
              <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between flex-wrap">
                  <div>
                    <Link 
                      href="/careers" 
                      className="inline-flex items-center text-blue-100 hover:text-white"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                      </svg>
                      Back to all vacancies
                    </Link>
                    <h1 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
                      {vacancy.title}
                    </h1>
                    {vacancy.company && (
                      <p className="mt-2 text-lg text-blue-100">
                        {vacancy.company}
                      </p>
                    )}
                  </div>
                  
                  {vacancy.applyLink && (
                    <div className="mt-4 md:mt-0">
                      <a
                        href={vacancy.applyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Apply Now
                        <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
                  <div className="mt-6 flex flex-wrap gap-4">
                  {vacancy.category && (
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {vacancy.category.name}
                    </span>
                  )}
                  
                  {/* Show deadline information */}
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    Deadline: {formatDeadline(vacancy.deadline, vacancy.applyLink)}
                  </span>
                  
                  {vacancy.location && (
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                      <svg className="mr-1.5 h-2 w-2 text-indigo-600" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                      {vacancy.location}
                    </span>
                  )}
                  
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    Posted on {formatDate(vacancy.createdAt)}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Main content */}
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left column - Main details */}
                <div className="lg:col-span-2">
                  <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Job Description
                      </h3>
                    </div>
                    <div className="px-4 py-5 sm:p-6 prose max-w-none">
                      {formatText(vacancy.description)}
                    </div>
                    
                    {vacancy.responsibilities && (
                      <div className="border-t border-gray-200">
                        <div className="px-4 py-5 sm:px-6">
                          <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Responsibilities
                          </h3>
                        </div>
                        <div className="px-4 py-5 sm:p-6 prose max-w-none">
                          {formatText(vacancy.responsibilities)}
                        </div>
                      </div>
                    )}
                    
                    {vacancy.requirements && (
                      <div className="border-t border-gray-200">
                        <div className="px-4 py-5 sm:px-6">
                          <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Requirements
                          </h3>
                        </div>
                        <div className="px-4 py-5 sm:p-6 prose max-w-none">
                          {formatText(vacancy.requirements)}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Apply button (bottom) */}
                  {vacancy.applyLink && (
                    <div className="mt-6 bg-indigo-50 rounded-lg p-6 text-center">
                      <h3 className="text-lg font-medium text-indigo-800 mb-3">
                        Interested in this position?
                      </h3>
                      <a
                        href={vacancy.applyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Apply Now
                      </a>
                    </div>
                  )}
                </div>
                
                {/* Right column - Summary */}
                <div className="lg:col-span-1">
                  <div className="bg-white shadow overflow-hidden sm:rounded-lg sticky top-8">
                    <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Job Summary
                      </h3>
                    </div>
                    <div className="px-4 py-5 sm:p-6">
                      <dl className="space-y-4">
                        <div>
                          <dt className="text-sm font-medium text-gray-500">
                            Position
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            {vacancy.title}
                          </dd>
                        </div>
                        
                        {vacancy.company && (
                          <div>
                            <dt className="text-sm font-medium text-gray-500">
                              Company
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {vacancy.company}
                            </dd>
                          </div>
                        )}
                        
                        {vacancy.location && (
                          <div>
                            <dt className="text-sm font-medium text-gray-500">
                              Location
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {vacancy.location}
                            </dd>
                          </div>
                        )}
                        
                        {vacancy.category && (
                          <div>
                            <dt className="text-sm font-medium text-gray-500">
                              Category
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {vacancy.category.name}
                            </dd>
                          </div>
                        )}
                        
                        {vacancy.salary && (
                          <div>
                            <dt className="text-sm font-medium text-gray-500">
                              Salary
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {formatSalary(vacancy.salary)}
                            </dd>
                          </div>
                        )}
                        
                        <div>
                          <dt className="text-sm font-medium text-gray-500">
                            Posted
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            {formatDate(vacancy.createdAt)}
                          </dd>
                        </div>
                      </dl>
                      
                      <div className="mt-8">
                        <Link
                          href="/contact"
                          className="block w-full text-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </main>
      
      <ConditionalWhatsAppButton />
      <Footer />
    </div>
  );
}
