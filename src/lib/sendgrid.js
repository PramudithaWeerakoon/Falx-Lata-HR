import sgMail from '@sendgrid/mail';


export const sendJobApplicationEmail = async ({jobTitle, fullName, email, phone, coverLetter}) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    try {
        const msg = {
            to: email,
            from: 'falxlata@gmail.com', // Must be a verified sender in SendGrid
            subject: `Job Application: ${jobTitle}`,
            text: `
                New job application for: ${jobTitle}
                
                Applicant Details:
                - Name: ${fullName}
                - Email: ${email}
                - Phone: ${phone}
                
                Cover Letter:
                ${coverLetter}
            `,
            html: `
        <div>
          <h2>New Job Application for: ${jobTitle}</h2>
          <h3>Applicant Details:</h3>
          <ul>
            <li><strong>Name:</strong> ${fullName}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Phone:</strong> ${phone}</li>
          </ul>
          <h3>Cover Letter:</h3>
          <p>${coverLetter}</p>
        </div>
      `,
        };

        await sgMail.send(msg);
        return {success: true};
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};