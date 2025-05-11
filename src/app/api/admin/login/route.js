// This is an API route for admin authentication
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { email, password } = body;
    
    // Check if email and password are provided
    if (!email || !password) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Email and password are required',
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }
    
    // Find the user in the database
    const user = await prisma.user.findUnique({
      where: { email },
    });
    
    // Check if the user exists
    if (!user) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Invalid email or password',
        }),
        {
          status: 401,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }
    
    // Verify the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Invalid email or password',
        }),
        {
          status: 401,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }
    
    // Check if the user is an admin
    if (user.role !== 'ADMIN') {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Access denied. Admin privileges required.',
        }),
        {
          status: 403,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }
    
    // Remove password from the response
    const { password: _, ...userWithoutPassword } = user;
    
    // Return the user data on successful login
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Admin login successful',
        user: userWithoutPassword,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Admin login error:', error);
    
    // Handle any errors that occur during the login process
    return new Response(
      JSON.stringify({
        success: false,
        message: 'An error occurred during admin login',
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
