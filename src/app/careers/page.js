'use client'

import {useState} from 'react';
import {motion} from 'framer-motion';
import Navbar from '../components/NavBar/ScrollTriggeredMenu';

// Job Card Component
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

                <div className="flex flex-col sm:flex-row items-start sm:items-center text-xs md:text-sm text-gray-500 gap-3 md:gap-4 my-4 md:my-6">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 md:mr-2 text-blue-500" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                        <span>Posted {job.postedDate}</span>
                    </div>
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 md:mr-2 text-purple-500" fill="none"
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

// Job Application Form
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

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            console.log('Form submitted:', formData);
            setIsSubmitting(false);
            setSubmitSuccess(true);

            // Reset and close after success message
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

// Job Filters
function JobFilters({filters, onFilterChange}) {
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
                        <option value="New York">New York</option>
                        <option value="Remote">Remote</option>
                        <option value="London">London</option>
                        <option value="Colombo">Colombo</option>
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
                        <option value="HR">HR</option>
                        <option value="IT">IT</option>
                        <option value="Finance">Finance</option>
                        <option value="Marketing">Marketing</option>
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
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                        <option value="Internship">Internship</option>
                    </select>
                </motion.div>
            </div>
        </motion.div>
    );
}

// Main Careers Component
export default function CareersSection() {
    const [filters, setFilters] = useState({
        location: '',
        department: '',
        type: '',
    });

    const [selectedJob, setSelectedJob] = useState(null);
    const [showApplicationForm, setShowApplicationForm] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    // Sample job data
    const jobListings = [
        {
            id: 1,
            title: 'HR Recruitment Specialist',
            location: 'Colombo',
            type: 'Full-time',
            department: 'HR',
            postedDate: '2 days ago',
            applicationDeadline: 'Deadline: May 30, 2025',
            shortDescription: 'We are looking for an experienced HR Recruitment Specialist to join our growing team and help us find and hire top talent.',
            fullDescription: 'As an HR Recruitment Specialist at Falx Lata, you will be responsible for the end-to-end recruitment process, from sourcing candidates to conducting interviews and making job offers. You will work closely with department managers to understand their hiring needs and find the best candidates for open positions.',
            requirements: [
                'Bachelor\'s degree in Human Resources, Business Administration, or related field',
                '3+ years of experience in recruitment or talent acquisition',
                'Strong knowledge of recruitment methods and best practices',
                'Excellent communication and interpersonal skills',
                'Experience with Applicant Tracking Systems (ATS)',
            ],
            responsibilities: [
                'Develop and implement effective recruiting strategies',
                'Source and attract candidates using various channels',
                'Screen resumes and conduct preliminary interviews',
                'Coordinate with department managers to identify hiring needs',
                'Conduct job interviews and evaluate candidates',
                'Prepare job offer letters and complete onboarding paperwork',
            ],
        },
        {
            id: 2,
            title: 'Senior HR Consultant',
            location: 'Remote',
            type: 'Full-time',
            department: 'HR',
            postedDate: '1 week ago',
            applicationDeadline: 'Deadline: June 15, 2025',
            shortDescription: 'We are seeking a Senior HR Consultant to provide expert guidance on HR strategies, policies, and processes to our clients.',
            fullDescription: 'As a Senior HR Consultant at Falx Lata, you will work with clients to assess their HR needs and develop customized solutions to address their challenges. You will provide expert advice on a wide range of HR matters, including talent management, performance management, and compliance with employment laws and regulations.',
            requirements: [
                'Bachelor\'s degree in Human Resources, Business Administration, or related field (Master\'s preferred)',
                '7+ years of experience in HR consulting or senior HR positions',
                'Strong knowledge of HR best practices and employment laws',
                'Excellent analytical and problem-solving skills',
                'Superior communication and presentation skills',
            ],
            responsibilities: [
                'Conduct HR assessments and identify areas for improvement',
                'Develop and implement HR strategies aligned with business objectives',
                'Design and update HR policies and procedures',
                'Provide guidance on complex HR issues',
                'Lead HR transformation projects',
                'Deliver training programs on HR topics',
            ],
        },
        {
            id: 3,
            title: 'Payroll Specialist',
            location: 'Colombo',
            type: 'Full-time',
            department: 'Finance',
            postedDate: '3 days ago',
            applicationDeadline: 'Deadline: May 25, 2025',
            shortDescription: 'We are looking for a detail-oriented Payroll Specialist to manage payroll processing for our clients and ensure accurate and timely payments.',
            fullDescription: 'As a Payroll Specialist at Falx Lata, you will be responsible for processing payroll for multiple clients, ensuring accuracy, compliance with tax regulations, and timely disbursement of payments. You will work closely with the HR and Finance teams to ensure seamless payroll operations.',
            requirements: [
                'Bachelor\'s degree in Finance, Accounting, or related field',
                '3+ years of experience in payroll processing',
                'Strong knowledge of payroll systems and tax regulations',
                'Excellent attention to detail and accuracy',
                'Proficiency in Microsoft Excel and payroll software',
            ],
            responsibilities: [
                'Process bi-weekly and monthly payrolls for multiple clients',
                'Calculate and verify employee wages, bonuses, and deductions',
                'Prepare and file tax reports and returns',
                'Resolve payroll discrepancies and address employee inquiries',
                'Maintain payroll records and ensure data confidentiality',
                'Stay updated on changes in tax laws and regulations',
            ],
        },
        {
            id: 4,
            title: 'HR Systems Administrator',
            location: 'New York',
            type: 'Full-time',
            department: 'IT',
            postedDate: '5 days ago',
            applicationDeadline: 'Deadline: June 5, 2025',
            shortDescription: 'Join our team as an HR Systems Administrator to maintain and optimize our HR technology infrastructure and support digital HR initiatives.',
            fullDescription: 'As an HR Systems Administrator at Falx Lata, you will be responsible for managing and maintaining HR information systems and applications. You will work on system configurations, upgrades, and integrations to ensure optimal performance and user experience. Your role will be critical in supporting our digital HR transformation efforts.',
            requirements: [
                'Bachelor\'s degree in Information Technology, Computer Science, or related field',
                '4+ years of experience in HRIS administration',
                'Strong knowledge of HR technologies and applications',
                'Experience with system implementation and integration',
                'Excellent analytical and problem-solving skills',
            ],
            responsibilities: [
                'Administer and maintain HR information systems',
                'Configure system settings and user permissions',
                'Conduct system upgrades and implement new features',
                'Provide technical support to HR users',
                'Develop and maintain system documentation',
                'Train users on HR applications and tools',
            ],
        },
        {
            id: 5,
            title: 'HR Business Partner',
            location: 'London',
            type: 'Full-time',
            department: 'HR',
            postedDate: '1 week ago',
            applicationDeadline: 'Deadline: June 10, 2025',
            shortDescription: 'We are seeking an experienced HR Business Partner to work closely with business leaders and provide strategic HR guidance and support.',
            fullDescription: 'As an HR Business Partner at Falx Lata, you will serve as a strategic partner to business leaders, aligning HR initiatives with business objectives and driving organizational effectiveness. You will provide guidance on a wide range of HR matters, including talent management, employee relations, and performance management, to support business growth and success.',
            requirements: [
                'Bachelor\'s degree in Human Resources, Business Administration, or related field',
                '5+ years of experience in HR business partner or similar roles',
                'Strong knowledge of HR best practices and employment laws',
                'Excellent communication and interpersonal skills',
                'Strategic thinking and problem-solving abilities',
            ],
            responsibilities: [
                'Partner with business leaders to understand their needs and provide HR solutions',
                'Develop and implement HR strategies aligned with business objectives',
                'Provide guidance on employee relations issues and performance management',
                'Support talent acquisition, development, and retention efforts',
                'Drive employee engagement and organizational change initiatives',
                'Analyze HR metrics and provide insights to business leaders',
            ],
        },
        {
            id: 6,
            title: 'Talent Development Specialist',
            location: 'Remote',
            type: 'Part-time',
            department: 'HR',
            postedDate: '2 weeks ago',
            applicationDeadline: 'Deadline: June 20, 2025',
            shortDescription: 'Join our team as a Talent Development Specialist to design and deliver training programs that enhance employee skills and drive organizational performance.',
            fullDescription: 'As a Talent Development Specialist at Falx Lata, you will be responsible for designing, developing, and delivering training programs that address the learning needs of our clients\' employees. You will work closely with HR and business leaders to identify skill gaps and create development initiatives that enhance employee capabilities and drive organizational performance.',
            requirements: [
                'Bachelor\'s degree in Human Resources, Education, or related field',
                '3+ years of experience in talent development or training',
                'Strong knowledge of adult learning principles and training methodologies',
                'Excellent presentation and facilitation skills',
                'Experience with learning management systems',
                'Creativity and innovation in training design',
            ],
            responsibilities: [
                'Assess training needs and identify skill gaps',
                'Design and develop training programs and materials',
                'Deliver workshops, webinars, and e-learning modules',
                'Evaluate training effectiveness and make improvements',
                'Coach and mentor employees on career development',
                'Stay updated on learning and development trends',
            ],
        },
    ];

    // Handle filter change
    const handleFilterChange = (e) => {
        const {name, value} = e.target;
        setFilters(prev => ({...prev, [name]: value}));
    };

    // Handle job application
    const handleApplyClick = (job) => {
        setSelectedJob(job);
        setShowApplicationForm(true);
    };

    // Handle search input
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Filter jobs based on search and filters
    const filteredJobs = jobListings.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesLocation = filters.location === '' || job.location === filters.location;
        const matchesDepartment = filters.department === '' || job.department === filters.department;
        const matchesType = filters.type === '' || job.type === filters.type;

        return matchesSearch && matchesLocation && matchesDepartment && matchesType;
    });

    return (
        <>

            <Navbar/>

            <div
                className="relative bg-gradient-to-br from-gray-50 to-gray-100 pt-40 pb-20 min-h-screen">        {/* Animated background elements */}
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1}}
                    className="absolute inset-0 overflow-hidden"
                >
                    {/* Floating bubble animation */}
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{
                                y: Math.random() * 100 + 50,
                                x: Math.random() * 100 - 50,
                                opacity: 0
                            }}
                            animate={{
                                y: [0, Math.random() * 100 - 50],
                                x: [0, Math.random() * 100 - 50],
                                opacity: [0.2, 0.4, 0.2],
                            }}
                            transition={{
                                duration: Math.random() * 10 + 10,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut",
                                delay: Math.random() * 3
                            }}
                            className={`absolute rounded-full ${i % 3 === 0 ? 'bg-blue-200' : i % 2 === 0 ? 'bg-purple-200' : 'bg-teal-200'}`}
                            style={{
                                width: Math.random() * 200 + 100,
                                height: Math.random() * 200 + 100,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                filter: 'blur(40px)',
                            }}
                        />
                    ))}
                </motion.div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                        viewport={{once: true}}
                        className="text-center mb-16"
                    >
                        <motion.span
                            whileHover={{scale: 1.05}}
                            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium px-6 py-2 rounded-full text-sm mb-6 shadow-md"
                        >
                            Join Our Team
                        </motion.span>
                        <motion.h2
                            whileHover={{x: 5}}
                            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                        >
                            Explore <span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Career Opportunities</span>
                        </motion.h2>
                        <motion.div
                            initial={{width: 0}}
                            whileInView={{width: 120}}
                            transition={{duration: 0.8}}
                            viewport={{once: true}}
                            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-8 mx-auto"
                        />
                        <motion.p
                            whileHover={{y: 2}}
                            className="text-xl text-gray-600 max-w-3xl mx-auto"
                        >
                            Discover exciting job opportunities at Falx Lata. Join our team of HR professionals and make
                            a difference in organizations around the world.
                        </motion.p>
                    </motion.div>

                    {/* Search Bar */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: 0.2}}
                        viewport={{once: true}}
                        className="mb-12 max-w-3xl mx-auto"
                    >
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search for jobs..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                                className="w-full px-6 py-4 pr-12 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 hover:border-gray-400 shadow-sm"
                            />
                            <motion.div
                                whileHover={{scale: 1.1}}
                                className="absolute right-4 top-4 text-gray-400 hover:text-blue-600"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                                </svg>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Filters */}
                    <JobFilters filters={filters} onFilterChange={handleFilterChange}/>

                    {/* Job Listings */}
                    <motion.div
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 0.6, delay: 0.4}}
                        viewport={{once: true}}
                    >
                        {filteredJobs.length > 0 ? (
                            <div className="space-y-8">
                                {filteredJobs.map(job => (
                                    <JobCard
                                        key={job.id}
                                        job={job}
                                        onApplyClick={handleApplyClick}
                                    />
                                ))}
                            </div>
                        ) : (
                            <motion.div
                                initial={{scale: 0.9, opacity: 0}}
                                whileInView={{scale: 1, opacity: 1}}
                                transition={{duration: 0.6}}
                                viewport={{once: true}}
                                className="text-center py-16 bg-white rounded-2xl shadow-lg"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-6"
                                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">No jobs found</h3>
                                <p className="text-gray-600 max-w-md mx-auto">
                                    Try adjusting your search or filter criteria to find what you're looking for.
                                </p>
                                <motion.button
                                    whileHover={{scale: 1.05}}
                                    whileTap={{scale: 0.95}}
                                    onClick={() => {
                                        setFilters({location: '', department: '', type: ''});
                                        setSearchQuery('');
                                    }}
                                    className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300"
                                >
                                    Reset Filters
                                </motion.button>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Job Alert Subscription */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: 0.2}}
                        viewport={{once: true}}
                        className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 text-center relative overflow-hidden"
                    >
                        {/* Decorative elements */}
                        <motion.div
                            animate={{rotate: 360}}
                            transition={{duration: 20, repeat: Infinity, ease: "linear"}}
                            className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white opacity-5"
                        />
                        <motion.div
                            animate={{rotate: -360}}
                            transition={{duration: 25, repeat: Infinity, ease: "linear"}}
                            className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-white opacity-5"
                        />

                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold text-white mb-4">
                                Never Miss a Job Opportunity
                            </h3>
                            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
                                Subscribe to our job alerts and be the first to know about new career opportunities at
                                Falx Lata.
                            </p>
                            <div className="max-w-xl mx-auto">
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-white/30 focus:border-white/30 outline-none transition-all duration-300"
                                    />
                                    <motion.button
                                        whileHover={{scale: 1.05}}
                                        whileTap={{scale: 0.95}}
                                        className="bg-white hover:bg-white/90 text-blue-600 font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-md whitespace-nowrap"
                                    >
                                        Subscribe
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Job Application Form Modal */}
                {showApplicationForm && selectedJob && (
                    <JobApplicationForm
                        job={selectedJob}
                        onClose={() => setShowApplicationForm(false)}
                    />
                )}
            </div>
        </>
    );
}