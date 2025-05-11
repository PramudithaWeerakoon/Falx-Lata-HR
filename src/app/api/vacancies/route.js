// API route for public vacancy listings
import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

// GET handler - get all active vacancies
export async function GET(request) {
  try {
    // Parse query parameters
    const { searchParams } = new URL(request.url);
    const categoryId = searchParams.get('category');
    
    // Build query
    let where = {
      active: true, // Only return active vacancies
    };
    
    // Add category filter if provided
    if (categoryId) {
      where.categoryId = categoryId;
    }
    
    // Get vacancies with optional filtering
    const vacancies = await prisma.vacancy.findMany({
      where,
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        category: true,
      },
    });
    
    return NextResponse.json({ 
      success: true,
      vacancies 
    });
  } catch (error) {
    console.error('Error fetching vacancies:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to fetch vacancies' 
      },
      { status: 500 }
    );
  }
}
