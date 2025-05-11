// API route for fetching vacancies (admin)
import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

// GET handler - get all vacancies
export async function GET(request) {
  try {
    // Get all vacancies
    const vacancies = await prisma.vacancy.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    
    return NextResponse.json({ vacancies });
  } catch (error) {
    console.error('Error fetching vacancies:', error);
    return NextResponse.json(
      { error: 'Failed to fetch vacancies' },
      { status: 500 }
    );
  }
}

// POST handler - create a new vacancy
export async function POST(request) {
  try {
    // Parse request body
    const data = await request.json();
    
    // Validate required fields
    if (!data.title || !data.description || !data.userId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
      // Create new vacancy
    const vacancy = await prisma.vacancy.create({
      data: {
        title: data.title,
        company: data.company,
        location: data.location,
        type: data.type,
        description: data.description,
        requirements: data.requirements,
        responsibilities: data.responsibilities,
        salary: data.salary,
        applyLink: data.applyLink,
        active: data.active !== undefined ? data.active : true,
        userId: data.userId,
        categoryId: data.categoryId,
      },
    });
    
    return NextResponse.json(
      { message: 'Vacancy created successfully', vacancy },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating vacancy:', error);
    return NextResponse.json(
      { error: 'Failed to create vacancy' },
      { status: 500 }
    );
  }
}
