// API route for managing categories
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
    });
    
    return NextResponse.json({ categories });
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json(
      { error: 'Failed to fetch categories' },
      { status: 500 }
    );
  }
}

// POST handler - create a new category
export async function POST(request) {
  try {
    // Parse request body
    const data = await request.json();
    
    // Validate required fields
    if (!data.name) {
      return NextResponse.json(
        { error: 'Category name is required' },
        { status: 400 }
      );
    }
    
    // Check if category with same name already exists
    const existingCategory = await prisma.category.findUnique({
      where: { name: data.name },
    });
    
    if (existingCategory) {
      return NextResponse.json(
        { error: 'A category with this name already exists' },
        { status: 400 }
      );
    }
    
    // Create new category
    const category = await prisma.category.create({
      data: {
        name: data.name,
        description: data.description,
      },
    });
    
    return NextResponse.json(
      { message: 'Category created successfully', category },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating category:', error);
    return NextResponse.json(
      { error: 'Failed to create category' },
      { status: 500 }
    );
  }
}
