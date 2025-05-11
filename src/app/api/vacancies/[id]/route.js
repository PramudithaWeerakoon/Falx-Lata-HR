// API route for individual public vacancies
import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  try {
    const { id } = params;
    
    // Find the vacancy
    const vacancy = await prisma.vacancy.findUnique({
      where: { 
        id,
        active: true, // Only fetch active vacancies
      },
      include: {
        category: true,
      },
    });
    
    if (!vacancy) {
      return NextResponse.json(
        { 
          success: false,
          error: 'Vacancy not found' 
        },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      vacancy
    });
  } catch (error) {
    console.error('Error fetching vacancy:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to fetch vacancy' 
      },
      { status: 500 }
    );
  }
}
