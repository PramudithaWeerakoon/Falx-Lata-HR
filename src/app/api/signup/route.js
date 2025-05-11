// This is an API route for user registration
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { email, password, fullName, company, phoneNumber } = body;
    
    // Validate required fields
    if (!email || !password || !fullName || !phoneNumber) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Missing required fields',
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }
    
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    
    if (existingUser) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'User with this email already exists',
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }
    
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create the user in the database
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        fullName,
        company,
        phoneNumber,
        role: 'USER', // Default role is USER
      },
    });
    
    // Remove password from the response
    const { password: _, ...userWithoutPassword } = user;
    
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Account created successfully',
        user: userWithoutPassword,
      }),
      {
        status: 201, // Created
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    
  } catch (error) {
    console.error('Signup error:', error);
    
    // Handle any errors that occur during the signup process
    return new Response(
      JSON.stringify({
        success: false,
        message: 'An error occurred during signup',
        error: error.message,
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
