'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/app/context/AuthContext';

export default function ManageCategories() {
  const router = useRouter();
  const { isAdmin, isAuthenticated } = useAuth();
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  
  // New category form state
  const [newCategory, setNewCategory] = useState({ name: '', description: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Edit state
  const [editMode, setEditMode] = useState(false);
  const [editingCategoryId, setEditingCategoryId] = useState(null);
  
  // Validation state
  const [validationErrors, setValidationErrors] = useState({});

  // Redirect if not authenticated or not an admin
  useEffect(() => {
    if (!isLoading && (!isAuthenticated || !isAdmin)) {
      router.push('/admin/login');
    }
  }, [isAuthenticated, isAdmin, isLoading, router]);

  // Fetch categories
  useEffect(() => {
    async function fetchCategories() {
      try {
        setIsLoading(true);
        const response = await fetch('/api/admin/categories');
        if (!response.ok) throw new Error('Failed to fetch categories');
        const data = await response.json();
        setCategories(data.categories);
      } catch (err) {
        console.error('Error fetching categories:', err);
        setError('Failed to load categories. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchCategories();
  }, []);

  // Validate form
  const validateForm = () => {
    const errors = {};

    // Name validation
    if (!newCategory.name.trim()) {
      errors.name = 'Category name is required';
    } else if (newCategory.name.trim().length < 2) {
      errors.name = 'Category name must be at least 2 characters';
    } else if (newCategory.name.trim().length > 50) {
      errors.name = 'Category name must be less than 50 characters';
    }

    // Description validation - optional but has constraints if provided
    if (newCategory.description && newCategory.description.trim().length > 200) {
      errors.description = 'Description must be less than 200 characters';
    }

    // Check for duplicate category name (only for new categories)
    if (!editMode && categories.some(cat =>
      cat.name.toLowerCase() === newCategory.name.trim().toLowerCase())) {
      errors.name = 'A category with this name already exists';
    }

    // For edit mode, check if name conflicts with other categories
    if (editMode && categories.some(cat =>
      cat.id !== editingCategoryId &&
      cat.name.toLowerCase() === newCategory.name.trim().toLowerCase())) {
      errors.name = 'A category with this name already exists';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCategory(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear validation error for this field
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

    // Validate form first
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const url = editMode
        ? `/api/admin/categories/${editingCategoryId}`
        : '/api/admin/categories';

      const method = editMode ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: newCategory.name.trim(),
          description: newCategory.description.trim()
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to save category');
      }

      // Update local state
      if (editMode) {
        setCategories(prev =>
          prev.map(category =>
            category.id === editingCategoryId ? data.category : category
          )
        );
        setSuccessMessage('Category updated successfully!');
      } else {
        setCategories(prev => [...prev, data.category]);
        setSuccessMessage('Category created successfully!');
      }

      // Reset form
      setNewCategory({ name: '', description: '' });
      setEditMode(false);
      setEditingCategoryId(null);
    } catch (err) {
      console.error('Error saving category:', err);
      setError(err.message || 'Failed to save category. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle edit button click
  const handleEdit = (category) => {
    // Clear any existing validation errors
    setValidationErrors({});

    // Set the form to edit mode
    setNewCategory({
      name: category.name,
      description: category.description || '',
    });
    setEditMode(true);
    setEditingCategoryId(category.id);
  };

  // Handle delete category
  const handleDelete = async (id) => {
    // Check if this category is being used by any vacancies
    if (categories.find(cat => cat.id === id)._count?.vacancies > 0) {
      setError('Cannot delete a category that is assigned to vacancies. Reassign vacancies first.');
      return;
    }

    if (!window.confirm('Are you sure you want to delete this category?')) {
      return;
    }

    setError('');
    setSuccessMessage('');

    try {
      const response = await fetch(`/api/admin/categories/${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to delete category');
      }

      // Update local state
      setCategories(prev => prev.filter(category => category.id !== id));
      setSuccessMessage('Category deleted successfully!');
    } catch (err) {
      console.error('Error deleting category:', err);
      setError(err.message || 'Failed to delete category. Please try again.');
    }
  };

  // Handle cancel edit
  const handleCancelEdit = () => {
    setNewCategory({ name: '', description: '' });
    setEditMode(false);
    setEditingCategoryId(null);
    setValidationErrors({});
  };

  // Character count for description
  const descriptionCharCount = newCategory.description.length;
  const descriptionMaxLength = 200;

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
              Manage Categories
            </h1>
            <p className="mt-1 text-sm text-gray-600">
              Create, edit, and manage job categories for vacancies
            </p>
          </div>
          <Link href="/admin/dashboard" className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Dashboard
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Category List */}
          <div className="md:col-span-8">
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="px-4 py-5 border-b border-gray-200 sm:px-6 flex justify-between items-center">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Categories
                </h3>
                <span className="text-sm text-gray-500">
                  {categories.length} {categories.length === 1 ? 'category' : 'categories'}
                </span>
              </div>

              {error && (
                <div className="m-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-md">
                  {error}
                </div>
              )}

              {successMessage && (
                <div className="m-4 p-4 bg-green-50 border border-green-200 text-green-700 rounded-md">
                  {successMessage}
                </div>
              )}

              {categories.length === 0 ? (
                <div className="px-4 py-5 sm:px-6 text-center text-gray-500">
                  No categories found. Create your first category!
                </div>
              ) : (
                <ul className="divide-y divide-gray-200">
                  {categories.map((category) => (
                    <li key={category.id} className="px-4 py-4 sm:px-6 flex items-center justify-between hover:bg-gray-50">
                      <div>
                        <h4 className="text-md font-medium text-gray-900">{category.name}</h4>
                        {category.description && (
                          <p className="text-sm text-gray-500 mt-1">{category.description}</p>
                        )}
                        {category._count?.vacancies > 0 && (
                          <span className="inline-flex items-center mt-1 px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                            {category._count.vacancies} {category._count.vacancies === 1 ? 'vacancy' : 'vacancies'}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleEdit(category)}
                          className="text-indigo-600 hover:text-indigo-900 p-2 rounded hover:bg-indigo-50"
                          title="Edit category"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                          </svg>
                        </button>
                        <button
                          onClick={() => handleDelete(category.id)}
                          className="text-red-600 hover:text-red-900 p-2 rounded hover:bg-red-50"
                          title="Delete category"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Category Form */}
          <div className="md:col-span-4">
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {editMode ? 'Edit Category' : 'Add New Category'}
                </h3>
              </div>

              <div className="px-4 py-5 sm:px-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Category Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={newCategory.name}
                      onChange={handleChange}
                      className={`mt-1 block w-full border ${validationErrors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                      placeholder="e.g., Technology, Healthcare, Marketing"
                    />
                    {validationErrors.name && (
                      <p className="mt-1 text-sm text-red-600">{validationErrors.name}</p>
                    )}
                    <p className="mt-1 text-xs text-gray-500">
                      2-50 characters
                    </p>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                      Description <span className="text-gray-400">(optional)</span>
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={3}
                      value={newCategory.description}
                      onChange={handleChange}
                      className={`mt-1 block w-full border ${validationErrors.description ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                      placeholder="Brief description of this category..."
                    />
                    {validationErrors.description ? (
                      <p className="mt-1 text-sm text-red-600">{validationErrors.description}</p>
                    ) : (
                      <p className={`mt-1 text-xs ${descriptionCharCount > descriptionMaxLength ? 'text-red-500' : 'text-gray-500'}`}>
                        {descriptionCharCount}/{descriptionMaxLength} characters
                      </p>
                    )}
                  </div>

                  <div className="flex justify-end space-x-2">
                    {editMode && (
                      <button
                        type="button"
                        onClick={handleCancelEdit}
                        className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Cancel
                      </button>
                    )}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      {isSubmitting
                        ? 'Saving...'
                        : editMode
                          ? 'Update Category'
                          : 'Add Category'
                      }
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}