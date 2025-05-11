// API route for managing individual vacancies
import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

// GET handler - get vacancy by id
export async function GET(request, { params }) {
  try {
    const { id } = params;
    
    // Find the vacancy
    const vacancy = await prisma.vacancy.findUnique({
      where: { id },
      include: {
        category: true,
      },
    });
    
    if (!vacancy) {
      return NextResponse.json(
        { error: 'Vacancy not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ vacancy });
  } catch (error) {
    console.error('Error fetching vacancy:', error);
    return NextResponse.json(
      { error: 'Failed to fetch vacancy' },
      { status: 500 }
    );
  }
}

// PUT handler - update vacancy
export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const data = await request.json();
    
    // Check if vacancy exists
    const existingVacancy = await prisma.vacancy.findUnique({
      where: { id },
    });
    
    if (!existingVacancy) {
      return NextResponse.json(
        { error: 'Vacancy not found' },
        { status: 404 }
      );
    }
      // Update vacancy
    const updatedVacancy = await prisma.vacancy.update({
      where: { id },
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
        active: data.active,
        categoryId: data.categoryId,
      },
    });
    
    return NextResponse.json({
      message: 'Vacancy updated successfully',
      vacancy: updatedVacancy,
    });
  } catch (error) {
    console.error('Error updating vacancy:', error);
    return NextResponse.json(
      { error: 'Failed to update vacancy' },
      { status: 500 }
    );
  }
}

// DELETE handler - delete vacancy
export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    
    // Check if vacancy exists
    const existingVacancy = await prisma.vacancy.findUnique({
      where: { id },
    });
    
    if (!existingVacancy) {
      return NextResponse.json(
        { error: 'Vacancy not found' },
        { status: 404 }
      );
    }
    
    // Delete vacancy
    await prisma.vacancy.delete({
      where: { id },
    });
    
    return NextResponse.json({
      message: 'Vacancy deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting vacancy:', error);
    return NextResponse.json(
      { error: 'Failed to delete vacancy' },
      { status: 500 }
    );
  }
}
