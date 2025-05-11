// This is a utility script to create an initial admin user
// Run with: node scripts/seed-admin.js
const { PrismaClient } = require('../src/generated/prisma');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding admin user...');
  
  // Default admin credentials (change these in production)
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@falxlata.com';
  const adminPassword = process.env.ADMIN_PASSWORD || 'Admin123!';
  
  try {
    // Check if admin already exists
    const existingAdmin = await prisma.user.findUnique({
      where: { email: adminEmail },
    });
    
    if (existingAdmin) {
      console.log(`Admin user already exists: ${adminEmail}`);
      return;
    }
    
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(adminPassword, salt);
    
    // Create admin user
    const admin = await prisma.user.create({
      data: {
        email: adminEmail,
        password: hashedPassword,
        name: 'Admin',
        fullName: 'System Administrator',
        role: 'ADMIN',
      },
    });
    
    console.log(`Admin user created successfully: ${admin.email}`);
    console.log('You can now log in with these credentials.');
  } catch (error) {
    console.error('Error seeding admin user:', error);
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
