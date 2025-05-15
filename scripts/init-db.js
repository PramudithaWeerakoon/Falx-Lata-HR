// This is a utility script to reset and seed the database
// Run with: node scripts/init-db.js
const { execSync } = require('child_process');
const { PrismaClient } = require('../src/generated/prisma');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const prisma = new PrismaClient();

async function main() {
  try {
    console.log('Initializing database...');
    
    // Reset database (be careful with this in production)
    console.log('Resetting database...');
    execSync('npx prisma migrate reset --force', { stdio: 'inherit' });
    
    // Run migrations
    console.log('Running migrations...');
    execSync('npx prisma migrate dev', { stdio: 'inherit' });
    
    // Seed admin user
    console.log('Seeding admin user...');
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@falxlata.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'Admin123!';
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(adminPassword, salt);
    
    const admin = await prisma.user.create({
      data: {
        email: adminEmail,
        password: hashedPassword,
        name: 'Admin',
        fullName: 'System Administrator',
        role: 'ADMIN',
      },
    });
    
    console.log(`Admin user created: ${admin.email}`);
      // Seed categories
    console.log('Seeding categories...');
    const categories = [
      { name: 'Engineering', description: 'Software engineering roles' },
      { name: 'Design', description: 'UX/UI and graphic design roles' },
      { name: 'Marketing', description: 'Marketing and communications roles' },
      { name: 'Sales', description: 'Sales and business development roles' },
      { name: 'Customer Support', description: 'Customer service and support roles' },
      { name: 'Finance', description: 'Finance and accounting roles' },
      { name: 'HR', description: 'Human resources and recruiting roles' },
    ];
    
    for (const category of categories) {
      await prisma.category.create({ data: category });
    }
    console.log(`${categories.length} categories created`);
    
    // Fetch created categories to get their IDs
    const createdCategories = await prisma.category.findMany();
    const categoryMap = createdCategories.reduce((acc, cat) => {
      acc[cat.name] = cat.id;
      return acc;
    }, {});
    
    // Seed sample vacancies
    console.log('Seeding sample vacancies...');
    const vacancies = [
      {
        title: 'Senior Software Engineer',
        company: 'Falx Lata HR',
        location: 'Colombo, Sri Lanka',
        description: 'We are looking for an experienced software engineer to join our team.',
        requirements: '5+ years of experience in software development. Proficiency in JavaScript and React.',
        responsibilities: 'Develop and maintain web applications, collaborate with cross-functional teams.',
        salary: 'Rs. 200,000 - 300,000 per month',
        active: true,
        userId: admin.id,
        categoryId: categoryMap['Engineering'],
      },
      {        title: 'UI/UX Designer',
        company: 'Falx Lata HR',
        location: 'Remote',
        description: 'Join our design team to create beautiful and functional user interfaces.',
        requirements: '3+ years of experience in UI/UX design. Proficiency in Figma and Adobe Creative Suite.',
        responsibilities: 'Create user-centered designs, collaborate with developers to implement designs.',
        salary: 'Rs. 150,000 - 250,000 per month',
        active: true,
        userId: admin.id,
        categoryId: categoryMap['Design'],
      },
      {
        title: 'Marketing Manager',
        company: 'Falx Lata HR',
        location: 'Colombo, Sri Lanka',
        description: 'Lead our marketing efforts to reach new clients and candidates.',
        requirements: '4+ years of experience in marketing. Experience with digital marketing and social media.',
        responsibilities: 'Develop and implement marketing strategies, analyze marketing performance.',
        salary: 'Rs. 180,000 - 280,000 per month',
        active: true,
        userId: admin.id,
        categoryId: categoryMap['Marketing'],
      },
    ];
    
    for (const vacancy of vacancies) {
      await prisma.vacancy.create({ data: vacancy });
    }
    console.log(`${vacancies.length} vacancies created`);
    
    console.log('Database initialization completed successfully!');
  } catch (error) {
    console.error('Error initializing database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
