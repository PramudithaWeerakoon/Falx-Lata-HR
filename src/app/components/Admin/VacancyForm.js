'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/app/context/AuthContext';

export default function VacancyForm({ vacancyId }) {
  const router = useRouter();
  const { user, isAdmin, isAuthenticated } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  // Form validation state
  const [validationErrors, setValidationErrors] = useState({});

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    type: 'Full-time',
    description: '',
    requirements: '',
    responsibilities: '',
    salary: '',
    applyLink: '',
    active: true,
    categoryId: '',
  });

  // Redirect if not authenticated or not an admin
  useEffect(() => {
    if (!isLoading && (!isAuthenticated || !isAdmin)) {
      router.push('/admin/login');
    }
  }, [isAuthenticated, isAdmin, isLoading, router]);

  // Fetch categories and vacancy data if editing
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);

        // Fetch categories
        const categoryResponse = await fetch('/api/admin/categories');
        if (!categoryResponse.ok) throw new Error('Failed to fetch categories');
        const categoryData = await categoryResponse.json();
        setCategories(categoryData.categories);

        // If editing an existing vacancy, fetch its data
        if (vacancyId) {
          const vacancyResponse = await fetch(`/api/admin/vacancies/${vacancyId}`);
          if (!vacancyResponse.ok) throw new Error('Failed to fetch vacancy');
          const vacancyData = await vacancyResponse.json();
            // Update form data with vacancy data
          setFormData({
            title: vacancyData.vacancy.title,
            company: vacancyData.vacancy.company || '',
            location: vacancyData.vacancy.location || '',
            type: vacancyData.vacancy.type || 'Full-time',
            description: vacancyData.vacancy.description,
            requirements: vacancyData.vacancy.requirements || '',
            responsibilities: vacancyData.vacancy.responsibilities || '',
            salary: vacancyData.vacancy.salary || '',
            applyLink: vacancyData.vacancy.applyLink || '',
            active: vacancyData.vacancy.active,
            categoryId: vacancyData.vacancy.categoryId || '',
          });
        }
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load data. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [vacancyId]);

  // Validate form fields
  const validateForm = () => {
    const errors = {};

    // Validate each field
    if (!formData.title.trim()) errors.title = 'Job title is required';
    if (!formData.company.trim()) errors.company = 'Company name is required';
    if (!formData.location.trim()) errors.location = 'Location is required';
    if (!formData.type) errors.type = 'Job type is required';
    if (!formData.description.trim()) errors.description = 'Job description is required';
    if (!formData.requirements.trim()) errors.requirements = 'Requirements are required';
    if (!formData.responsibilities.trim()) errors.responsibilities = 'Responsibilities are required';
    if (!formData.salary.trim()) errors.salary = 'Salary information is required';
    if (!formData.applyLink.trim()) errors.applyLink = 'Application link is required';
    if (!formData.categoryId) errors.categoryId = 'Category is required';

    // URL validation for applyLink
    if (formData.applyLink.trim() && !/^https?:\/\/.+/.test(formData.applyLink)) {
      errors.applyLink = 'Please enter a valid URL starting with http:// or https://';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  }

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear validation error when field is edited
    if (validationErrors[name]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    // Validate all fields
    if (!validateForm()) {
      // Scroll to the first error
      const firstErrorField = Object.keys(validationErrors)[0];
      document.getElementById(firstErrorField)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setIsSubmitting(true);

    try {
      const url = vacancyId
        ? `/api/admin/vacancies/${vacancyId}`
        : '/api/admin/vacancies';

      const method = vacancyId ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          userId: user.id, // Add the current user's ID as the creator
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to save vacancy');
      }

      setSuccessMessage(vacancyId ? 'Vacancy updated successfully!' : 'Vacancy created successfully!');

      // Redirect to dashboard after short delay
      setTimeout(() => {
        router.push('/admin/dashboard');
      }, 1500);
    } catch (err) {
      console.error('Error saving vacancy:', err);
      setError(err.message || 'Failed to save vacancy. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper function to render input field with validation
  const renderField = (name, label, type = 'text', placeholder = '', options = null) => {
    const isTextarea = type === 'textarea';
    const isSelect = type === 'select';
    const hasError = validationErrors[name];

    return (
      <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
          {label} <span className="text-red-500">*</span>
        </label>

        {isTextarea ? (
          <textarea
            id={name}
            name={name}
            rows={name === 'description' ? 5 : 4}
            value={formData[name]}
            onChange={handleChange}
            placeholder={placeholder}
            className={`mt-1 block w-full border ${hasError ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          />
        ) : isSelect ? (
          <select
            id={name}
            name={name}
            value={formData[name]}
            onChange={handleChange}
            className={`mt-1 block w-full border ${hasError ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          >
            {options}
          </select>
        ) : (
          <input
            type={type}
            id={name}
            name={name}
            value={formData[name]}
            onChange={handleChange}
            placeholder={placeholder}
            className={`mt-1 block w-full border ${hasError ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          />
        )}

        {hasError && (
          <p className="mt-1 text-sm text-red-600">{validationErrors[name]}</p>
        )}
      </div>
    );
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500 mx-auto"></div>
          <p className="mt-3 text-indigo-600 font-semibold">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {vacancyId ? 'Edit Vacancy' : 'Create New Vacancy'}
            </h1>
            <p className="mt-1 text-sm text-gray-600">
              {vacancyId
                ? 'Update the details of an existing job vacancy'
                : 'Fill in the details to create a new job vacancy'}
            </p>
            <p className="mt-1 text-sm text-red-600 font-medium">All fields are required</p>
          </div>
          <Link href="/admin/dashboard" className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Dashboard
          </Link>
        </div>

        {/* Form */}
        <div className="bg-white shadow rounded-lg p-6">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          {successMessage && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            {renderField('title', 'Job Title', 'text')}

            {/* Company */}
            {renderField('company', 'Company Name', 'text')}

            {/* Two column layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Location */}
              {renderField('location', 'Location', 'text', 'e.g., Colombo, Sri Lanka or Remote')}

              {/* Job Type */}
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                  Job Type <span className="text-red-500">*</span>
                </label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className={`mt-1 block w-full border ${validationErrors.type ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                  <option value="Temporary">Temporary</option>
                </select>
                {validationErrors.type && (
                  <p className="mt-1 text-sm text-red-600">{validationErrors.type}</p>
                )}
              </div>

              {/* Category */}
              <div>
                <label htmlFor="categoryId" className="block text-sm font-medium text-gray-700">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  id="categoryId"
                  name="categoryId"
                  value={formData.categoryId}
                  onChange={handleChange}
                  className={`mt-1 block w-full border ${validationErrors.categoryId ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                >
                  <option value="">Select a category</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
                {validationErrors.categoryId && (
                  <p className="mt-1 text-sm text-red-600">{validationErrors.categoryId}</p>
                )}
              </div>

              {/* Salary */}
              {renderField('salary', 'Salary Range', 'text', 'e.g., Rs. 50,000 - 80,000 per month')}

              {/* Apply Link */}
              {renderField('applyLink', 'Application Link', 'url', 'e.g., https://example.com/apply')}
            </div>

            {/* Description */}
            {renderField('description', 'Job Description', 'textarea', 'Provide a detailed description of the job...')}

            {/* Requirements */}
            {renderField('requirements', 'Requirements', 'textarea', 'List the skills, qualifications, and experience required...')}

            {/* Responsibilities */}
            {renderField('responsibilities', 'Responsibilities', 'textarea', 'List the key responsibilities and duties...')}

            {/* Active Status */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="active"
                name="active"
                checked={formData.active}
                onChange={handleChange}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="active" className="ml-2 block text-sm text-gray-900">
                Active (Publically visible)
              </label>
            </div>

            {/* Form Actions */}
            <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
              <Link
                href="/admin/dashboard"
                className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {isSubmitting
                  ? 'Saving...'
                  : vacancyId
                    ? 'Update Vacancy'
                    : 'Create Vacancy'
                }
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}