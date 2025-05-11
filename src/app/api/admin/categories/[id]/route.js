// API route for managing individual categories
import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

// GET handler - get category by id
export async function GET(request, { params }) {
  try {
    const { id } = params;
    
    // Find the category
    const category = await prisma.category.findUnique({
      where: { id },
      include: {
        vacancies: true,
      },
    });
    
    if (!category) {
      return NextResponse.json(
        { error: 'Category not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ category });
  } catch (error) {
    console.error('Error fetching category:', error);
    return NextResponse.json(
      { error: 'Failed to fetch category' },
      { status: 500 }
    );
  }
}

// PUT handler - update category
export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const data = await request.json();
    
    // Validate required fields
    if (!data.name) {
      return NextResponse.json(
        { error: 'Category name is required' },
        { status: 400 }
      );
    }
    
    // Check if category exists
    const existingCategory = await prisma.category.findUnique({
      where: { id },
    });
    
    if (!existingCategory) {
      return NextResponse.json(
        { error: 'Category not found' },
        { status: 404 }
      );
    }
    
    // Check if another category with the same name exists
    if (data.name !== existingCategory.name) {
      const duplicateCategory = await prisma.category.findUnique({
        where: { name: data.name },
      });
      
      if (duplicateCategory) {
        return NextResponse.json(
          { error: 'A category with this name already exists' },
          { status: 400 }
        );
      }
    }
    
    // Update category
    const updatedCategory = await prisma.category.update({
      where: { id },
      data: {
        name: data.name,
        description: data.description,
      },
    });
    
    return NextResponse.json({
      message: 'Category updated successfully',
      category: updatedCategory,
    });
  } catch (error) {
    console.error('Error updating category:', error);
    return NextResponse.json(
      { error: 'Failed to update category' },
      { status: 500 }
    );
  }
}

// DELETE handler - delete category
export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    
    // Check if category exists
    const existingCategory = await prisma.category.findUnique({
      where: { id },
      include: {
        vacancies: true,
      },
    });
    
    if (!existingCategory) {
      return NextResponse.json(
        { error: 'Category not found' },
        { status: 404 }
      );
    }
    
    // Check if category has vacancies
    if (existingCategory.vacancies.length > 0) {
      return NextResponse.json(
        { error: 'Cannot delete a category that has vacancies assigned to it' },
        { status: 400 }
      );
    }
    
    // Delete category
    await prisma.category.delete({
      where: { id },
    });
    
    return NextResponse.json({
      message: 'Category deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting category:', error);
    return NextResponse.json(
      { error: 'Failed to delete category' },
      { status: 500 }
    );
  }
}
