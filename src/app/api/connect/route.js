import {NextResponse} from 'next/server';
import sgMail from '@sendgrid/mail';

// Set your SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
    try {
        // Parse the form data
        const formData = await request.formData();

        // Extract fields from the contact form
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        const inquiryType = formData.get('inquiryType');

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                {error: 'Please fill in all the required fields'},
                {status: 400}
            );
        }

        // Map inquiry type to readable text
        const inquiryTypeText = {
            'company': 'Company looking for recruitment/HR services',
            'candidate': 'Candidate looking for a job',
            'other': 'Just exploring / Other inquiry'
        }[inquiryType] || 'Not specified';

        // Prepare the email message
        const msg = {
            to: 'Hr@falxlata.com',
            from: 'falxlata@gmail.com',
            subject: `Contact Form: ${subject}`,
            text: `
        New Message from Contact Form
        
        From: ${name} (${email})
        Subject: ${subject}
        Inquiry Type: ${inquiryTypeText}
        
        Message:
        ${message}
      `,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Message from Contact Form</h2>
          <h3 style="color: #555;">Contact Details:</h3>
          <ul style="list-style: none; padding: 0;">
            <li style="margin: 10px 0;"><strong>Name:</strong> ${name}</li>
            <li style="margin: 10px 0;"><strong>Email:</strong> ${email}</li>
            <li style="margin: 10px 0;"><strong>Subject:</strong> ${subject}</li>
            <li style="margin: 10px 0;"><strong>Inquiry Type:</strong> ${inquiryTypeText}</li>
          </ul>
          <h3 style="color: #555;">Message:</h3>
          <p style="white-space: pre-wrap; background: #f5f5f5; padding: 15px; border-radius: 5px;">
            ${message}
          </p>
        </div>
      `,
        };

        // Send the email
        await sgMail.send(msg);

        // Return success response
        return NextResponse.json(
            {success: true, message: 'Message sent successfully'},
            {status: 200}
        );
    } catch (error) {
        console.error('Error sending message:', error);

        // Check if it's a SendGrid error
        if (error.response?.body?.errors) {
            const errorMessage = error.response.body.errors[0]?.message || 'SendGrid error';
            return NextResponse.json(
                {error: `Failed to send message: ${errorMessage}`},
                {status: 500}
            );
        }

        // General error
        return NextResponse.json(
            {error: 'Failed to send message. Please try again later.'},
            {status: 500}
        );
    }
}

// Allow only POST method
export async function GET() {
    return NextResponse.json(
        {error: 'Method not allowed'},
        {status: 405}
    );
}