// API route for public categories
import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

// GET handler - get all categories
export async function GET(request) {
  try {
    // Get all categories
    const categories = await prisma.category.findMany({
      orderBy: {
        name: 'asc',
      },
      // Include vacancy count in each category
      include: {
        _count: {
          select: {
            vacancies: {
              where: {
                active: true, // Only count active vacancies
              },
            },
          },
        },
      },
    });
    
    // Filter out categories with no active vacancies unless explicitly requested
    const { searchParams } = new URL(request.url);
    const includeEmpty = searchParams.get('includeEmpty') === 'true';
    
    const filteredCategories = includeEmpty 
      ? categories 
      : categories.filter(category => category._count.vacancies > 0);
    
    return NextResponse.json({ 
      success: true,
      categories: filteredCategories.map(category => ({
        id: category.id,
        name: category.name,
        description: category.description,
        vacancyCount: category._count.vacancies,
      })),
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to fetch categories' 
      },
      { status: 500 }
    );
  }
}
