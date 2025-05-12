import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
  try {
    // Parse the form data
    const formData = await request.formData();

    // Extract fields
    const jobTitle = formData.get('jobTitle');
    const fullName = formData.get('fullName');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const coverLetter = formData.get('coverLetter');
    const resume = formData.get('resume');

    // Validate required fields
    if (!jobTitle || !fullName || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Prepare the email message
    const msg = {
      to: 'Careers@falxlata.com',
      from: 'falxlata@gmail.com',
      subject: `Job Application: ${jobTitle}`,
      text: `
            New job application for: ${jobTitle}
            
            Applicant Details:
            - Name: ${fullName}
            - Email: ${email}
            - Phone: ${phone}
            
            Cover Letter:
            ${coverLetter || 'No cover letter provided'}
                  `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Job Application for: ${jobTitle}</h2>
          <h3 style="color: #555;">Applicant Details:</h3>
          <ul style="list-style: none; padding: 0;">
            <li style="margin: 10px 0;"><strong>Name:</strong> ${fullName}</li>
            <li style="margin: 10px 0;"><strong>Email:</strong> ${email}</li>
            <li style="margin: 10px 0;"><strong>Phone:</strong> ${phone}</li>
          </ul>
          <h3 style="color: #555;">Cover Letter:</h3>
          <p style="white-space: pre-wrap; background: #f5f5f5; padding: 15px; border-radius: 5px;">
            ${coverLetter || 'No cover letter provided'}
          </p>
        </div>
      `,
    };

    // Handle resume attachment if present
    if (resume) {
      // Convert the file to base64
      const fileBuffer = await resume.arrayBuffer();
      const fileBase64 = Buffer.from(fileBuffer).toString('base64');

      msg.attachments = [
        {
          content: fileBase64,
          filename: resume.name,
          type: resume.type,
          disposition: 'attachment',
        },
      ];
    }

    // Send the email
    await sgMail.send(msg);

    // TODO: You can also save the application to a database here

    return NextResponse.json(
      { success: true, message: 'Application submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error submitting application:', error);

    // Send a more descriptive error if it's a SendGrid error
    if (error.response?.body?.errors) {
      const errorMessage = error.response.body.errors[0]?.message || 'SendGrid error';
      return NextResponse.json(
        { error: `Failed to send application: ${errorMessage}` },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to submit application. Please try again.' },
      { status: 500 }
    );
  }
}

// Optionally, you can restrict this endpoint to only support POST requests
// If someone tries to use GET, PUT, DELETE, etc., they'll get a 405 error
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}