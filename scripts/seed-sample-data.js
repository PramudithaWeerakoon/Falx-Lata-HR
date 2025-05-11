// Sample data initialization script for Falx-Lata-HR
const { PrismaClient } = require('../src/generated/prisma');
require('dotenv').config();

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding sample data...');
  
  try {
    // Get admin user
    const admin = await prisma.user.findFirst({
      where: { role: 'ADMIN' }
    });
    
    if (!admin) {
      console.error('Admin user not found. Please run seed-admin.js first.');
      return;
    }
    
    // Create categories
    const categories = [
      {
        name: 'Human Resources',
        description: 'Roles related to HR management, employee relations, and talent acquisition.'
      },
      {
        name: 'Administration',
        description: 'Administrative and office management positions.'
      },
      {
        name: 'Finance',
        description: 'Finance, accounting, and financial management roles.'
      },
      {
        name: 'IT & Technology',
        description: 'Information technology, software development, and technical positions.'
      },
      {
        name: 'Marketing',
        description: 'Marketing, communications, and public relations roles.'
      },
      {
        name: 'Operations',
        description: 'Operations, logistics, and supply chain management positions.'
      }
    ];
    
    console.log('Creating categories...');
    for (const category of categories) {
      const existing = await prisma.category.findUnique({
        where: { name: category.name }
      });
      
      if (!existing) {
        await prisma.category.create({ data: category });
        console.log(`Category created: ${category.name}`);
      } else {
        console.log(`Category already exists: ${category.name}`);
      }
    }
    
    // Fetch created categories for reference
    const createdCategories = await prisma.category.findMany();
    
    // Create sample vacancies
    const vacancies = [
      {
        title: 'HR Manager',
        company: 'Falx Lata HR Solutions',
        location: 'Colombo, Sri Lanka',
        description: 'We are seeking an experienced HR Manager to lead our human resources department and implement strategic HR initiatives.',
        requirements: '- Bachelor\'s degree in Human Resources, Business Administration, or related field\n- Minimum of 5 years of experience in HR management\n- Strong knowledge of labor laws and HR best practices\n- Excellent communication and leadership skills',
        responsibilities: '- Develop and implement HR strategies and initiatives aligned with the company\'s objectives\n- Oversee recruitment, performance management, and employee relations\n- Ensure compliance with labor laws and regulations\n- Manage the HR team and provide guidance on HR matters',
        salary: 'Competitive salary based on experience',
        applyLink: 'mailto:careers@falxlata.com?subject=HR Manager Application',
        categoryId: createdCategories.find(c => c.name === 'Human Resources')?.id,
        userId: admin.id
      },
      {
        title: 'Financial Analyst',
        company: 'Falx Lata Financial Services',
        location: 'Colombo, Sri Lanka',
        description: 'We are looking for a detail-oriented Financial Analyst to join our finance team and support financial planning and analysis.',
        requirements: '- Bachelor\'s degree in Finance, Accounting, or related field\n- 2-3 years of experience in financial analysis\n- Proficiency in Excel and financial modeling\n- Strong analytical and problem-solving skills',
        responsibilities: '- Prepare financial forecasts and budgets\n- Analyze financial data and identify trends\n- Generate financial reports and presentations\n- Support the finance team in various financial activities',
        salary: 'LKR 150,000 - 200,000 per month',
        applyLink: 'mailto:careers@falxlata.com?subject=Financial Analyst Application',
        categoryId: createdCategories.find(c => c.name === 'Finance')?.id,
        userId: admin.id
      },
      {
        title: 'Office Administrator',
        company: 'Falx Lata Corporate Services',
        location: 'Colombo, Sri Lanka',
        description: 'We are seeking an organized and efficient Office Administrator to manage our office operations and administrative functions.',
        requirements: '- Bachelor\'s degree in Business Administration or related field\n- 2+ years of experience in office administration\n- Proficient in Microsoft Office Suite\n- Excellent organizational and time management skills',
        responsibilities: '- Manage office operations and administrative procedures\n- Handle correspondence, scheduling, and filing systems\n- Coordinate office supplies and equipment maintenance\n- Support various departments with administrative tasks',
        salary: 'LKR 80,000 - 120,000 per month',
        applyLink: 'mailto:careers@falxlata.com?subject=Office Administrator Application',
        categoryId: createdCategories.find(c => c.name === 'Administration')?.id,
        userId: admin.id
      },
      {
        title: 'Software Developer',
        company: 'Falx Lata Tech Solutions',
        location: 'Colombo, Sri Lanka (Remote Possible)',
        description: 'We are looking for a talented Software Developer to join our tech team and build innovative software solutions.',
        requirements: '- Bachelor\'s degree in Computer Science or related field\n- 3+ years of experience in software development\n- Proficiency in JavaScript, React, and Node.js\n- Strong problem-solving and debugging skills',
        responsibilities: '- Develop and maintain software applications\n- Collaborate with cross-functional teams to define requirements\n- Write clean, maintainable, and efficient code\n- Troubleshoot and fix software issues',
        salary: 'LKR 200,000 - 300,000 per month',
        applyLink: 'mailto:careers@falxlata.com?subject=Software Developer Application',
        categoryId: createdCategories.find(c => c.name === 'IT & Technology')?.id,
        userId: admin.id
      },
      {
        title: 'Marketing Coordinator',
        company: 'Falx Lata Marketing',
        location: 'Colombo, Sri Lanka',
        description: 'We are seeking a creative Marketing Coordinator to support our marketing initiatives and campaigns.',
        requirements: '- Bachelor\'s degree in Marketing, Communications, or related field\n- 1-2 years of experience in marketing\n- Knowledge of digital marketing platforms and social media\n- Strong written and verbal communication skills',
        responsibilities: '- Assist in planning and executing marketing campaigns\n- Manage social media accounts and create content\n- Coordinate marketing events and activities\n- Track and report on marketing metrics',
        salary: 'LKR 100,000 - 150,000 per month',
        applyLink: 'mailto:careers@falxlata.com?subject=Marketing Coordinator Application',
        categoryId: createdCategories.find(c => c.name === 'Marketing')?.id,
        userId: admin.id
      }
    ];
    
    console.log('Creating vacancies...');
    for (const vacancy of vacancies) {
      await prisma.vacancy.create({ data: vacancy });
      console.log(`Vacancy created: ${vacancy.title}`);
    }
    
    console.log('Sample data seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding sample data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
