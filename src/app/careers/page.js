'use client'

import {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import Navbar from '../components/NavBar/ScrollTriggeredMenu';
import {useRouter} from 'next/navigation';
import {useAuth} from '../context/AuthContext';
import Link from 'next/link';

function JobCard({job, onApplyClick}) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.4}}
            viewport={{once: true}}
            whileHover={{y: -3}}
            className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6 md:mb-8 border border-gray-100 relative"
        >
            {/* Decorative elements */}
            <motion.div
                initial={{scale: 0.8, opacity: 0}}
                whileInView={{scale: 1, opacity: 0.07}}
                transition={{duration: 0.6, delay: 0.2}}
                className="absolute -right-10 md:-right-20 -top-10 md:-top-20 w-40 md:w-64 h-40 md:h-64 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"
            />

            <div className="p-5 md:p-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-6">
                    <div className="flex-1">
                        <motion.h3
                            whileHover={{x: 3}}
                            className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3"
                        >
                            {job.title}
                        </motion.h3>

                        <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                            <motion.span
                                whileHover={{scale: 1.05}}
                                className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full"
                            >
                                {job.location}
                            </motion.span>
                            <motion.span
                                whileHover={{scale: 1.05}}
                                className="bg-green-100 text-green-600 text-xs font-medium px-2 py-1 rounded-full"
                            >
                                {job.type}
                            </motion.span>
                            <motion.span
                                whileHover={{scale: 1.05}}
                                className="bg-purple-100 text-purple-600 text-xs font-medium px-2 py-1 rounded-full"
                            >
                                {job.department}
                            </motion.span>
                        </div>

                        <p className="text-gray-600 text-sm md:text-base mb-5 md:mb-6">{job.shortDescription}</p>
                    </div>

                    <motion.button
                        whileHover={{scale: 1.03}}
                        whileTap={{scale: 0.97}}
                        onClick={() => onApplyClick(job)}
                        className="relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg text-sm md:text-base"
                    >
                        Apply Now
                        <motion.span
                            animate={{x: [0, 4, 0]}}
                            transition={{duration: 1.5, repeat: Infinity}}
                            className="ml-1 inline-block"
                        >
                            &rarr;
                        </motion.span>
                    </motion.button>
                </div>

                <div
                    className="flex flex-col sm:flex-row items-start sm:items-center text-xs md:text-sm text-gray-500 gap-3 md:gap-4 my-4 md:my-6">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 md:mr-2 text-blue-500"
                             fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                        <span>Posted {job.postedDate}</span>
                    </div>
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 md:mr-2 text-purple-500"
                             fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <span>{job.applicationDeadline}</span>
                    </div>
                </div>

                <motion.button
                    whileHover={{scale: 1.01}}
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-blue-600 hover:text-blue-800 text-xs md:text-sm font-medium flex items-center focus:outline-none transition-colors duration-300 group"
                >
                    {isExpanded ? 'Show Less' : 'Show More'}
                    <motion.svg
                        animate={{rotate: isExpanded ? 180 : 0}}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1 md:ml-2 transition-all duration-300 group-hover:translate-y-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                    </motion.svg>
                </motion.button>

                {isExpanded && (
                    <motion.div
                        initial={{opacity: 0, height: 0}}
                        animate={{opacity: 1, height: 'auto'}}
                        exit={{opacity: 0, height: 0}}
                        transition={{duration: 0.4, ease: 'easeInOut'}}
                        className="mt-4 md:mt-6 overflow-hidden text-sm md:text-base"
                    >
                        <div className="mb-6 md:mb-8">
                            <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4 flex items-center">
                                <motion.span
                                    animate={{rotate: [0, 10, -10, 0]}}
                                    transition={{duration: 2, repeat: Infinity}}
                                    className="mr-2"
                                >
                                    📝
                                </motion.span>
                                Job Description
                            </h4>
                            <p className="text-gray-600 mb-5 md:mb-6 pl-6 md:pl-8">{job.fullDescription}</p>
                        </div>

                        <div className="mb-6 md:mb-8">
                            <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4 flex items-center">
                                <motion.span
                                    animate={{scale: [1, 1.1, 1]}}
                                    transition={{duration: 1.5, repeat: Infinity}}
                                    className="mr-2"
                                >
                                    ✅
                                </motion.span>
                                Requirements
                            </h4>
                            <ul className="list-disc list-inside text-gray-600 space-y-1 md:space-y-2 pl-6 md:pl-8">
                                {job.requirements.map((req, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{x: -10, opacity: 0}}
                                        animate={{x: 0, opacity: 1}}
                                        transition={{delay: index * 0.07}}
                                        className="flex items-start"
                                    >
                                        <span className="mr-2">•</span> {req}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4 flex items-center">
                                <motion.span
                                    animate={{y: [0, -3, 0]}}
                                    transition={{duration: 2, repeat: Infinity}}
                                    className="mr-2"
                                >
                                    🔍
                                </motion.span>
                                Responsibilities
                            </h4>
                            <ul className="list-disc list-inside text-gray-600 space-y-1 md:space-y-2 pl-6 md:pl-8">
                                {job.responsibilities.map((resp, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{x: -10, opacity: 0}}
                                        animate={{x: 0, opacity: 1}}
                                        transition={{delay: index * 0.07}}
                                        className="flex items-start"
                                    >
                                        <span className="mr-2">•</span> {resp}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
}

function JobApplicationForm({job, onClose}) {

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
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    };

    const handleFileChange = (e) => {
        setFormData(prev => ({...prev, resume: e.target.files[0]}));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const submitData = new FormData();
        submitData.append('jobTitle', "Software Engineer");
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
        console.log('Response:', data);

        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitSuccess(true);

            console.log('Form submitted:', formData);


            setTimeout(() => {
                onClose();
            }, 3000);
        }, 1500);
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <motion.div
                initial={{opacity: 0, scale: 0.9}}
                animate={{opacity: 1, scale: 1}}
                exit={{opacity: 0, scale: 0.9}}
                transition={{duration: 0.3, type: 'spring', damping: 25}}
                className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-auto relative"
            >
                {/* Decorative elements */}
                <motion.div
                    animate={{rotate: 360}}
                    transition={{duration: 20, repeat: Infinity, ease: "linear"}}
                    className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 opacity-30"
                />

                <motion.div
                    animate={{scale: [1, 1.05, 1]}}
                    transition={{duration: 8, repeat: Infinity, ease: "easeInOut"}}
                    className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 opacity-20"
                />

                {submitSuccess ? (
                    <div className="p-12 text-center relative z-10">
                        <motion.div
                            initial={{scale: 0}}
                            animate={{scale: 1}}
                            transition={{delay: 0.2}}
                            className="w-24 h-24 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                            </svg>
                        </motion.div>
                        <motion.h3
                            initial={{y: 20, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            transition={{delay: 0.4}}
                            className="text-3xl font-bold text-gray-900 mb-4"
                        >
                            Application Submitted!
                        </motion.h3>
                        <motion.p
                            initial={{y: 20, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            transition={{delay: 0.6}}
                            className="text-gray-600 mb-8 text-lg"
                        >
                            Thank you for applying for the <span className="font-semibold">{job.title}</span> position.
                            We'll review your application and get back to you shortly.
                        </motion.p>
                        <motion.button
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.8}}
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
                                <motion.h3
                                    whileHover={{x: 2}}
                                    className="text-2xl font-bold text-gray-900"
                                >
                                    Apply for <span className="text-blue-600">{job.title}</span>
                                </motion.h3>
                                <motion.button
                                    whileHover={{rotate: 90}}
                                    whileTap={{scale: 0.9}}
                                    onClick={onClose}
                                    className="text-gray-500 hover:text-gray-700 focus:outline-none p-1"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                </motion.button>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="p-8 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <motion.div
                                    initial={{opacity: 0, y: 10}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{delay: 0.1}}
                                >
                                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 hover:border-gray-400"
                                        placeholder="Enter your full name"
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{opacity: 0, y: 10}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{delay: 0.2}}
                                >
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 hover:border-gray-400"
                                        placeholder="Enter your email"
                                    />
                                </motion.div>
                            </div>

                            <motion.div
                                initial={{opacity: 0, y: 10}}
                                animate={{opacity: 1, y: 0}}
                                transition={{delay: 0.3}}
                                className="mb-6"
                            >
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 hover:border-gray-400"
                                    placeholder="Enter your phone number"
                                />
                            </motion.div>

                            <motion.div
                                initial={{opacity: 0, y: 10}}
                                animate={{opacity: 1, y: 0}}
                                transition={{delay: 0.4}}
                                className="mb-6"
                            >
                                <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-2">
                                    Cover Letter
                                </label>
                                <textarea
                                    id="coverLetter"
                                    name="coverLetter"
                                    value={formData.coverLetter}
                                    onChange={handleInputChange}
                                    rows="5"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 hover:border-gray-400"
                                    placeholder="Tell us why you're interested in this position"
                                ></textarea>
                            </motion.div>

                            <motion.div
                                initial={{opacity: 0, y: 10}}
                                animate={{opacity: 1, y: 0}}
                                transition={{delay: 0.5}}
                                className="mb-8"
                            >
                                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                                    Resume/CV * (PDF, DOC, DOCX)
                                </label>
                                <div className="flex items-center">
                                    <input
                                        type="file"
                                        id="resume"
                                        name="resume"
                                        onChange={handleFileChange}
                                        accept=".pdf,.doc,.docx"
                                        required
                                        className="w-full text-sm text-gray-500 file:mr-4 file:py-3 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-colors duration-300"
                                    />
                                </div>
                            </motion.div>

                            <div className="flex justify-end gap-4">
                                <motion.button
                                    type="button"
                                    onClick={onClose}
                                    whileHover={{scale: 1.03}}
                                    whileTap={{scale: 0.97}}
                                    className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-all duration-300"
                                >
                                    Cancel
                                </motion.button>
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{scale: isSubmitting ? 1 : 1.05}}
                                    whileTap={{scale: isSubmitting ? 1 : 0.95}}
                                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-white font-medium transition-all duration-300 flex items-center shadow-md hover:shadow-lg"
                                >
                                    {isSubmitting && (
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                                    strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor"
                                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
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

function JobFilters({filters, onFilterChange, locations, departments, types}) {
    return (
        <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.4}}
            viewport={{once: true}}
            className="bg-white rounded-2xl shadow-lg p-8 mb-10 border border-gray-100"
        >
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <motion.span
                    animate={{rotate: [0, 10, -10, 0]}}
                    transition={{duration: 2, repeat: Infinity}}
                    className="mr-3"
                >
                    🔍
                </motion.span>
                Filter Jobs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                    whileHover={{y: -3}}
                >
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                        Location
                    </label>
                    <select
                        id="location"
                        name="location"
                        value={filters.location}
                        onChange={onFilterChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 hover:border-gray-400"
                    >
                        <option value="">All Locations</option>
                        {locations.map(location => (
                            <option key={location} value={location}>{location}</option>
                        ))}
                    </select>
                </motion.div>
                <motion.div
                    whileHover={{y: -3}}
                >
                    <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
                        Department
                    </label>
                    <select
                        id="department"
                        name="department"
                        value={filters.department}
                        onChange={onFilterChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 hover:border-gray-400"
                    >
                        <option value="">All Departments</option>
                        {departments.map(department => (
                            <option key={department} value={department}>{department}</option>
                        ))}
                    </select>
                </motion.div>
                <motion.div
                    whileHover={{y: -3}}
                >
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                        Job Type
                    </label>
                    <select
                        id="type"
                        name="type"
                        value={filters.type}
                        onChange={onFilterChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 hover:border-gray-400"
                    >
                        <option value="">All Types</option>
                        {types.map(type => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default function CareersSection() {
    const {isAdmin} = useAuth();
    const router = useRouter();
    const [filters, setFilters] = useState({
        location: '',
        department: '',
        type: '',
    });    
    const [selectedJob, setSelectedJob] = useState(null);
    const [showApplicationForm, setShowApplicationForm] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isMounted, setIsMounted] = useState(false);
    const [jobs, setJobs] = useState([]);
    const [allJobs, setAllJobs] = useState([]); // Store all jobs
    const [totalJobCount, setTotalJobCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [showAllJobs, setShowAllJobs] = useState(false); // State to track if we're showing all jobs
    const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
    const jobsPerPage = 10; // Number of jobs to show per page
    useEffect(() => {
        setIsMounted(true);

        // Fetch vacancies from the API
        const fetchVacancies = async () => {
            try {
                console.log('Fetching vacancies from API...');
                const response = await fetch('/api/vacancies');
                const data = await response.json();

                console.log('API response:', data);

                if (data.success && data.vacancies) {                    // Transform API data to match the expected format for display
                    const formattedVacancies = data.vacancies.map(vacancy => ({                        id: vacancy.id,
                        title: vacancy.title,
                        location: vacancy.location,
                        type: vacancy.type || 'Full-time', // Default value if not available in API
                        department: vacancy.category?.name || 'General',
                        postedDate: formatDate(vacancy.createdAt),
                        applicationDeadline: `Deadline: ${formatDeadline(vacancy.deadline, vacancy.applyLink)}`,
                        shortDescription: vacancy.description.substring(0, 150) + '...',
                        fullDescription: vacancy.description,
                        requirements: vacancy.requirements ? vacancy.requirements.split('\n').filter(req => req.trim()) : [],
                        responsibilities: vacancy.responsibilities ? vacancy.responsibilities.split('\n').filter(resp => resp.trim()) : []
                    }));

                    console.log('Formatted vacancies:', formattedVacancies);                    // Set state with formatted vacancies if there are any
                    if (formattedVacancies.length > 0) {
                        // Store total count of jobs
                        setTotalJobCount(formattedVacancies.length);
                        // Store all the vacancies
                        setAllJobs(formattedVacancies);
                        // Only display top 6 newest vacancies by default (they're already sorted by createdAt desc from the API)
                        setJobs(formattedVacancies.slice(0, 6));
                        setLoading(false);                    } else {
                        // Fallback to hardcoded jobs if no vacancies in the database
                        console.log('No vacancies found, using fallback data');
                        setTotalJobCount(jobListings.length);
                        setAllJobs(jobListings);
                        setJobs(jobListings.slice(0, 6));
                        setLoading(false);
                    }
                } else {
                    // Fallback to hardcoded jobs if API fails
                    console.log('API response unsuccessful, using fallback data');
                    setTotalJobCount(jobListings.length);
                    setJobs(jobListings.slice(0, 6));
                    setLoading(false);
                }            } catch (error) {
                console.error('Error fetching vacancies:', error);
                // Fallback to hardcoded jobs on error
                setTotalJobCount(jobListings.length);
                setAllJobs(jobListings);
                setJobs(jobListings.slice(0, 6));
                setLoading(false);
            }
        };

        fetchVacancies();
    }, []);

    // Helper function to format the posting date
    const formatDate = (dateString) => {
        if (!dateString) return '1 day ago';

        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now - date);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 1) return '1 day ago';
        if (diffDays < 7) return `${diffDays} days ago`;
        if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
        return `${Math.floor(diffDays / 30)} months ago`;
    };    // Helper function to format the deadline date from database
    const formatDeadline = (deadlineField, applyLinkField) => {
        // First, try to use the dedicated deadline field
        if (deadlineField) {
            const deadlineDate = new Date(deadlineField);
            if (!isNaN(deadlineDate.getTime())) {
                return deadlineDate.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'});
            }
        }
        
        // If no deadline field, try to parse the applyLink field which might contain the date
        if (applyLinkField) {
            try {
                // First, try direct date parsing
                const applyLinkDate = new Date(applyLinkField);
                
                if (!isNaN(applyLinkDate.getTime())) {
                    return applyLinkDate.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'});
                }
                
                // Next, try various date formats (DD/MM/YYYY, MM/DD/YYYY, etc.)
                const dateParts = applyLinkField.split(/[\/\-\.]/);
                if (dateParts.length === 3) {
                    // Try different combinations of the parts
                    const possibleDates = [
                        new Date(`${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`), // DD-MM-YYYY
                        new Date(`${dateParts[2]}-${dateParts[0]}-${dateParts[1]}`), // MM-DD-YYYY
                    ];
                    
                    // Find the first valid date
                    const validDate = possibleDates.find(d => !isNaN(d.getTime()));
                    if (validDate) {
                        return validDate.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'});
                    }
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
        return defaultDate.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'});
    };

    // Get unique values for filters
    const getUniqueLocations = () => {
        return [...new Set(jobs.map(job => job.location))]
            .filter(location => location) // Filter out undefined/null
            .sort();
    };

    const getUniqueDepartments = () => {
        return [...new Set(jobs.map(job => job.department))]
            .filter(department => department) // Filter out undefined/null
            .sort();
    };

    const getUniqueTypes = () => {
        return [...new Set(jobs.map(job => job.type))]
            .filter(type => type) // Filter out undefined/null
            .sort();
    };    // Handle filter change
    const handleFilterChange = (e) => {
        const {name, value} = e.target;
        setFilters(prev => ({...prev, [name]: value}));
        setCurrentPage(1); // Reset to first page when filters change
    };

    // Handle job application
    const handleApplyClick = (job) => {
        setSelectedJob(job);
        setShowApplicationForm(true);
    };

    // Handle search input
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1); // Reset to first page when search changes
    };

    // Handle "View All Jobs" button click
    const handleViewAllJobs = () => {
        setShowAllJobs(true);
        setCurrentPage(1); // Start from the first page
    };

    // Handle pagination
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        // Scroll to top of job listings when page changes
        window.scrollTo({
            top: document.getElementById('job-listings').offsetTop - 100,
            behavior: 'smooth'
        });
    };    // Filter jobs based on search and filters
    const filteredJobs = (showAllJobs ? allJobs : jobs).filter(job => {
        // Filter by search query
        if (searchQuery && !job.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
            !job.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())) {
            return false;
        }

        // Filter by location
        if (filters.location && job.location !== filters.location) {
            return false;
        }

        // Filter by department
        if (filters.department && job.department !== filters.department) {
            return false;
        }

        // Filter by type
        if (filters.type && job.type !== filters.type) {
            return false;
        }

        return true;
    });

    // Get current jobs for pagination
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
    
    // Calculate total pages
    const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

    return (
        <>
            <Navbar/>
            <div className="py-13 bg-gray-50 relative overflow-hidden">
                {/* Animated Bubbles Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="bubble bubble-1"></div>
                    <div className="bubble bubble-2"></div>
                    <div className="bubble bubble-3"></div>
                    <div className="bubble bubble-4"></div>
                    <div className="bubble bubble-5"></div>
                    <div className="bubble bubble-6"></div>
                    <div className="bubble bubble-7"></div>
                    <div className="bubble bubble-8"></div>
                </div>

                {/* Hero Section with Image */}
                <section className="relative h-[500px] md:h-[700px] mb-16">
                    /* Hero Background Image */
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/images/team.jpg"
                            alt="Careers at Falx Lata"
                            className="w-full h-full object-cover object-center"
                        />
                        {/* Removed the color overlay div */}
                    </div>

                    {/* Hero Content */}
                    <div
                        className="container mx-auto px-4 h-full relative z-10 flex flex-col items-center justify-center">
                        <div className="text-center text-white">
                            <motion.h1
                                initial={{opacity: 0, y: -20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.5}}
                                className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg"
                            >
                                Join Our Team
                            </motion.h1>
                            <motion.p
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{duration: 0.5, delay: 0.2}}
                                className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto drop-shadow-lg"
                            >
                                Discover exciting career opportunities and be part of our mission to transform HR
                                solutions
                            </motion.p>
                        </div>
                    </div>

                    {/* Floating decorations positioned below header but above other content */}
                    <div
                        className="absolute top-[270px] right-0 w-[36rem] h-[36rem] pointer-events-none hidden md:block z-30"
                        style={isMounted ? {animation: 'float 6s ease-in-out infinite'} : {}}>
                        <img
                            src="/images/floating_image_03-1.png"
                            alt="Floating decoration"
                            className="w-full h-full object-contain transform translate-x-1/5"
                        />
                    </div>
                    <div
                        className="absolute left-0 top-[0px] left-0 w-[21rem] h-[31rem] pointer-events-none hidden md:block z-30"
                        style={isMounted ? {animation: 'floatReverse 6s ease-in-out infinite'} : {}}>
                        <img
                            src="/images/floating_image_02.png"
                            alt="Floating decoration"
                            className="w-full h-full object-contain transform -translate-x-1/5"
                        />
                    </div>
                    <div
                        className="absolute top-[520px] left-0 w-[31rem] h-[31rem] pointer-events-none hidden md:block z-30"
                        style={isMounted ? {animation: 'floatReverse 6s ease-in-out infinite'} : {}}>
                        <img
                            src="/images/floating_image_04-1.png"
                            alt="Floating decoration"
                            className="w-full h-full object-contain transform -translate-x-1/5"
                        /></div>
                    {/* Wave Bottom Shape */}
                    <div className="absolute bottom-0 md:bottom-0 top-114 md:top-128 left-0 right-0 z-20 w-full">
                        <img
                            src="/images/bottom_wave_02_gray.png"
                            alt="Wave Shape"
                            className="w-full"
                        />
                    </div>
                </section>

                {/* Careers Introduction */}
                <section className="container mx-auto px-4 mb-16 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Grow Your Career With Falx Lata
                        </h2>
                        <p className="text-gray-600 text-lg mb-8">
                            At Falx Lata, we're building a team of passionate HR professionals who are dedicated to
                            transforming how organizations
                            manage their human resources. Join us to work with diverse clients across industries and
                            make a meaningful impact.
                        </p>
                        <p className="text-gray-600 text-lg">
                            We value innovation, excellence, and continuous learning. Our team members enjoy competitive
                            benefits,
                            flexible work arrangements, and numerous opportunities for professional growth.
                        </p>
                    </div>
                </section>

                {/* Search Bar */}
                <div className="container mx-auto px-4 mb-10 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search for jobs..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                                className="w-full px-5 py-4 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none shadow-sm"
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                            </svg>
                        </div>
                    </div>
                </div>
                {/* Job Filters */}
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <JobFilters
                            filters={filters}
                            onFilterChange={handleFilterChange}
                            locations={getUniqueLocations()}
                            departments={getUniqueDepartments()}
                            types={getUniqueTypes()}
                        />
                    </div>
                </div>                {/* Job Listings */}
                <div id="job-listings" className="container mx-auto px-4 mb-16 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                            <motion.span
                                animate={{scale: [1, 1.1, 1]}}
                                transition={{duration: 2, repeat: Infinity}}
                                className="mr-3"                            >
                                💼
                            </motion.span>
                            Available Positions
                            <span className="ml-3 text-lg font-medium text-gray-500">({filteredJobs.length} jobs)</span>
                        </h2>                        {loading ? (
                            <div className="bg-white rounded-2xl shadow-md p-8 text-center">
                                <div
                                    className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
                                <p className="text-gray-600">Loading job opportunities...</p>
                            </div>
                        ) : error ? (
                            <div className="bg-white rounded-2xl shadow-md p-8 text-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-16 w-16 mx-auto text-red-400 mb-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                          d="M12 9v2m0 4h.01M12 4a8 8 0 100 16 8 8 0 000-16z"/>
                                </svg>
                                <h3 className="text-xl font-semibold text-gray-700 mb-2">Error loading jobs</h3>
                                <p className="text-gray-500">
                                    {error}. Please try again later.
                                </p>
                            </div>                        ) : filteredJobs.length > 0 ? (
                            <>
                                {currentJobs.map(job => (
                                    <JobCard key={job.id} job={job} onApplyClick={handleApplyClick}/>
                                ))}
                                
                                {/* Pagination Controls */}
                                {totalPages > 1 && (
                                    <div className="flex justify-center mt-8">
                                        <div className="inline-flex rounded-md shadow-sm">
                                            <button
                                                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                                                disabled={currentPage === 1}
                                                className={`relative inline-flex items-center px-4 py-2 rounded-l-md border ${
                                                    currentPage === 1 
                                                        ? 'border-gray-300 bg-gray-100 text-gray-400 cursor-not-allowed' 
                                                        : 'border-blue-300 bg-white text-blue-700 hover:bg-blue-50'
                                                }`}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                <span className="ml-1">Previous</span>
                                            </button>
                                            
                                            {/* Page Numbers */}
                                            {Array.from({ length: Math.min(5, totalPages) }).map((_, index) => {
                                                let pageNum;
                                                
                                                if (totalPages <= 5) {
                                                    // If 5 or fewer pages, show all page numbers
                                                    pageNum = index + 1;
                                                } else if (currentPage <= 3) {
                                                    // If on pages 1-3, show pages 1-5
                                                    pageNum = index + 1;
                                                } else if (currentPage >= totalPages - 2) {
                                                    // If on last 3 pages, show last 5 pages
                                                    pageNum = totalPages - 4 + index;
                                                } else {
                                                    // Otherwise show currentPage and 2 pages on either side
                                                    pageNum = currentPage - 2 + index;
                                                }
                                                
                                                return (
                                                    <button
                                                        key={pageNum}
                                                        onClick={() => handlePageChange(pageNum)}
                                                        className={`relative inline-flex items-center px-4 py-2 border ${
                                                            currentPage === pageNum
                                                                ? 'z-10 bg-blue-600 border-blue-600 text-white' 
                                                                : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                                                        }`}
                                                    >
                                                        {pageNum}
                                                    </button>
                                                );
                                            })}
                                            
                                            <button
                                                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                                                disabled={currentPage === totalPages}
                                                className={`relative inline-flex items-center px-4 py-2 rounded-r-md border ${
                                                    currentPage === totalPages 
                                                        ? 'border-gray-300 bg-gray-100 text-gray-400 cursor-not-allowed' 
                                                        : 'border-blue-300 bg-white text-blue-700 hover:bg-blue-50'
                                                }`}
                                            >
                                                <span className="mr-1">Next</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                )}
                                
                                {/* Show "View All Jobs" button if we have more than 6 jobs total and not already showing all */}
                                {totalJobCount > 6 && !showAllJobs && !searchQuery && !filters.location && !filters.department && !filters.type && (
                                    <div className="text-center mt-8">
                                        <button
                                            onClick={handleViewAllJobs}
                                            className="inline-flex items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                        >
                                            View All {totalJobCount} Jobs
                                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="bg-white rounded-2xl shadow-md p-8 text-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-16 w-16 mx-auto text-gray-400 mb-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                <h3 className="text-xl font-semibold text-gray-700 mb-2">No jobs found</h3>
                                <p className="text-gray-500">
                                    Try adjusting your search filters or check back later for new opportunities.
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="container mx-auto px-4 mb-16 relative z-10">
                    {/* Image with wave decorations */}
                    <div className="relative">
                        {/* Top Wave Decoration - positioned at the top of the image */}
                        <div className="absolute top-0 left-0 right-0 z-10 w-full">
                            <img
                                src="/images/top_wave_01.png"
                                alt="Top wave decoration"
                                className="w-full"
                            />
                        </div>

                        {/* Main Image */}
                        <div className="mt-6">
                            <img
                                src="/images/cop-image.jpg"
                                alt="Professional HR Team"
                                className="w-full"
                            /></div>
                        {/* Bottom Wave Decoration - positioned at the bottom of the image */}
                        <div className="absolute top-203 md:bottom-0 left-0 right-0 z-10 w-full">
                            <img
                                src="/images/bottom_wave_02_gray.png"
                                alt="Bottom wave decoration"
                                className="w-full"
                            />
                        </div>
                        {/* Floating decorations positioned below header but above other content */}
                        <div
                            className="absolute top-[270px] right-0 w-[36rem] h-[36rem] pointer-events-none hidden md:block z-30"
                            style={isMounted ? {animation: 'float 10s ease-in-out infinite'} : {}}>
                            <img
                                src="/images/floating_image_03-1.png"
                                alt="Floating decoration"
                                className="w-full h-full object-contain transform translate-x-1/5"
                            />
                        </div>
                        <div
                            className="absolute left-0 top-[0px] left-0 w-[21rem] h-[31rem] pointer-events-none hidden md:block z-30"
                            style={isMounted ? {animation: 'floatReverse 10s ease-in-out infinite'} : {}}>
                            <img
                                src="/images/floating_image_02.png"
                                alt="Floating decoration"
                                className="w-full h-full object-contain transform -translate-x-1/5"
                            />
                        </div>
                        <div
                            className="absolute top-[520px] left-0 w-[31rem] h-[31rem] pointer-events-none hidden md:block z-30"
                            style={isMounted ? {animation: 'floatReverse 10s ease-in-out infinite'} : {}}>
                            <img
                                src="/images/floating_image_04-1.png"
                                alt="Floating decoration"
                                className="w-full h-full object-contain transform -translate-x-1/5"
                            />
                        </div>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div
                            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center mt-10">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Don't See the Right Fit?
                            </h2>
                            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                                We're always looking for talented individuals to join our team. Send us your resume and
                                we'll keep
                                you in mind for future opportunities.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="/contact"
                                    className="bg-white hover:bg-gray-100 text-blue-600 font-medium px-8 py-3 rounded-lg transition-colors duration-300 inline-flex items-center justify-center"
                                >
                                    Submit Your Resume
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-blue-600"
                                         viewBox="0 0 20 20"
                                         fill="currentColor">
                                        <path fillRule="evenodd"
                                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414z"
                                              clipRule="evenodd"/>
                                    </svg>
                                </a>
                                <a
                                    href="/about"
                                    className="bg-transparent hover:bg-blue-700 hover:bg-opacity-40 text-white border-2 border-white font-medium px-8 py-3 rounded-lg transition-colors duration-300 inline-flex items-center justify-center"
                                >
                                    Learn About Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Show application form if a job is selected */}
                {showApplicationForm && selectedJob && (
                    <JobApplicationForm job={selectedJob} onClose={() => setShowApplicationForm(false)}/>
                )}

                <style jsx global>{`
                    .bubble {
                        position: absolute;
                        background: linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
                        border-radius: 50%;
                        animation: float 15s infinite ease-in-out;
                    }

                    .bubble-1 {
                        width: 100px;
                        height: 100px;
                        left: 10%;
                        top: 20%;
                        animation-delay: 0s;
                    }

                    .bubble-2 {
                        width: 60px;
                        height: 60px;
                        left: 80%;
                        top: 50%;
                        animation-delay: 2s;
                    }

                    .bubble-3 {
                        width: 120px;
                        height: 120px;
                        left: 30%;
                        top: 70%;
                        animation-delay: 4s;
                    }

                    .bubble-4 {
                        width: 80px;
                        height: 80px;
                        left: 70%;
                        top: 10%;
                        animation-delay: 6s;
                    }

                    .bubble-5 {
                        width: 50px;
                        height: 50px;
                        left: 50%;
                        top: 85%;
                        animation-delay: 8s;
                    }

                    .bubble-6 {
                        width: 90px;
                        height: 90px;
                        left: 20%;
                        top: 50%;
                        animation-delay: 10s;
                    }

                    .bubble-7 {
                        width: 70px;
                        height: 70px;
                        left: 90%;
                        top: 30%;
                        animation-delay: 12s;
                    }

                    .bubble-8 {
                        width: 110px;
                        height: 110px;
                        left: 60%;
                        top: 60%;
                        animation-delay: 14s;
                    }

                    @keyframes float {
                        0%, 100% {
                            transform: translate(0, 0) rotate(0deg);
                        }
                        25% {
                            transform: translate(20px, -20px) rotate(5deg);
                        }
                        50% {
                            transform: translate(-20px, 20px) rotate(-5deg);
                        }
                        75% {
                            transform: translate(10px, -10px) rotate(3deg);
                        }
                    }

                    @keyframes floatReverse {
                        0%, 100% {
                            transform: translate(0, 0) rotate(0deg);
                        }
                        25% {
                            transform: translate(-15px, 15px) rotate(-3deg);
                        }
                        50% {
                            transform: translate(15px, -15px) rotate(3deg);
                        }
                        75% {
                            transform: translate(-10px, 10px) rotate(-2deg);
                        }
                    }                `}</style>
                
                {/* Additional CSS for pagination */}
                <style jsx global>{`
                    /* Pagination hover effects */
                    .pagination-button:hover {
                        transform: translateY(-1px);
                        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                    }
                    
                    .pagination-button:active {
                        transform: translateY(0);
                    }
                    
                    /* Smooth transitions for pagination */
                    .pagination-button {
                        transition: all 0.2s ease-in-out;
                    }
                `}</style>
            </div>
        </>
    );
}