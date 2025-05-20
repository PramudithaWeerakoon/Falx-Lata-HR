'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import ScrollTriggeredMenu from '../../components/NavBar/ScrollTriggeredMenu';
import { motion } from 'framer-motion';

function JobApplicationForm({ job, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    coverLetter: '',
    resume: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files[0] }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const submitData = new FormData();
    submitData.append('jobTitle', job?.title || '');
    submitData.append('fullName', formData.fullName);
    submitData.append('email', formData.email);
    submitData.append('phone', formData.phone);
    submitData.append('coverLetter', formData.coverLetter);
    if (formData.resume) {
      submitData.append('resume', formData.resume);
    }
    const response = await fetch('/api/job-application', {
      method: 'POST',
      body: submitData,
    });
    const data = await response.json();
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTimeout(() => {
        onClose();
      }, 3000);
    }, 1500);
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3, type: 'spring', damping: 25 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-auto relative"
      >
        {/* Decorative elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 opacity-30"
        />
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 opacity-20"
        />
        {submitSuccess ? (
          <div className="p-12 text-center relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="w-24 h-24 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>
            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Application Submitted!
            </motion.h3>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-gray-600 mb-8 text-lg"
            >
              Thank you for applying for the <span className="font-semibold">{job?.title}</span> position. We'll review your application and get back to you shortly.
            </motion.p>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              onClick={onClose}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-300"
            >
              Close
            </motion.button>
          </div>
        ) : (
          <>
            <div className="p-8 border-b border-gray-200 relative z-10">
              <div className="flex justify-between items-center">
                <motion.h3 whileHover={{ x: 2 }} className="text-2xl font-bold text-gray-900">
                  Apply for <span className="text-blue-600">{job?.title}</span>
                </motion.h3>
                <motion.button
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none p-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="p-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 hover:border-gray-400" placeholder="Enter your full name" />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 hover:border-gray-400" placeholder="Enter your email" />
                </motion.div>
              </div>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 hover:border-gray-400" placeholder="Enter your phone number" />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mb-6">
                <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-2">Cover Letter</label>
                <textarea id="coverLetter" name="coverLetter" value={formData.coverLetter} onChange={handleInputChange} rows="5" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 hover:border-gray-400" placeholder="Tell us why you're interested in this position"></textarea>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mb-8">
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">Resume/CV * (PDF, DOC, DOCX)</label>
                <div className="flex items-center">
                  <input type="file" id="resume" name="resume" onChange={handleFileChange} accept=".pdf,.doc,.docx" required className="w-full text-sm text-gray-500 file:mr-4 file:py-3 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-colors duration-300" />
                </div>
              </motion.div>
              <div className="flex justify-end gap-4">
                <motion.button type="button" onClick={onClose} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-all duration-300">Cancel</motion.button>
                <motion.button type="submit" disabled={isSubmitting} whileHover={{ scale: isSubmitting ? 1 : 1.05 }} whileTap={{ scale: isSubmitting ? 1 : 0.95 }} className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-white font-medium transition-all duration-300 flex items-center shadow-md hover:shadow-lg">
                  {isSubmitting && (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  )}
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </motion.button>
              </div>
            </form>
          </>
        )}
      </motion.div>
    </div>
  );
}

export default function VacancyDetailsPage({ params }) {
  const router = useRouter();
  const { id } = params;
  
  const [vacancy, setVacancy] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  
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
    <div className="flex flex-col min-h-screen relative">
      {/* Gradient bar behind everything */}
      <div className="absolute top-0 left-0 w-full" style={{height: '340px', zIndex: -10}}>
        <div className="w-full h-full bg-gradient-to-r from-blue-900 to-indigo-800" style={{height: '100%'}}></div>
      </div>
      {/* Header with black text override for this page only */}
      <div className="relative z-20">
        <ScrollTriggeredMenu />
      </div>
      
      <main className="flex-grow pt-8 md:pt-28">
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
            <div className="relative">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-900 to-indigo-800 -z-10" style={{height: '100%', minHeight: '100px'}}></div>
              <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 pt-27 sm:pt-12">
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
                    <h1 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl text-white">
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
                      <button
                        onClick={() => setShowApplicationForm(true)}
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Apply Now
                      </button>
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
                  <div className="mt-6 bg-indigo-50 rounded-lg p-6 text-center">
                    <h3 className="text-lg font-medium text-indigo-800 mb-3">
                      Interested in this position?
                    </h3>
                    <button
                      onClick={() => setShowApplicationForm(true)}
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Apply Now
                    </button>
                  </div>
                  {showApplicationForm && (
                    <JobApplicationForm job={vacancy} onClose={() => setShowApplicationForm(false)} />
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
    </div>
  );
}
