"use server";

const BREVO_API_KEY = process.env.BREVO_API_KEY!;
const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";

export async function sendContactEmail(formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  if (!BREVO_API_KEY) {
    console.error("BREVO_API_KEY is not configured");
    return { success: false, error: "Email service not configured" };
  }

  const { name, email, subject, message } = formData;

  const emailHtml = `
  <!DOCTYPE html>
  <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background: #f9f9f9;
          border-radius: 10px;
        }
        .header {
          background: #000;
          color: white;
          padding: 20px;
          border-radius: 10px 10px 0 0;
          text-align: center;
        }
        .content {
          background: white;
          padding: 20px;
          border-radius: 0 0 10px 10px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .field {
          margin-bottom: 20px;
        }
        .label {
          font-weight: bold;
          color: #FF4D4D;
        }
        .value {
          margin-top: 5px;
          padding: 10px;
          background: #f5f5f5;
          border-radius: 5px;
        }
        .footer {
          text-align: center;
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid #eee;
          color: #666;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New Contact Form Submission</h2>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Name:</div>
            <div class="value">${name}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value">${email}</div>
          </div>
          <div class="field">
            <div class="label">Subject:</div>
            <div class="value">${subject}</div>
          </div>
          <div class="field">
            <div class="label">Message:</div>
            <div class="value">${message}</div>
          </div>
        </div>
        <div class="footer">
          <p>This email was sent from your website contact form.</p>
          <p>© ${new Date().getFullYear()} Elevate Media Marketing</p>
        </div>
      </div>
    </body>
  </html>
`;

  const payload = {
    sender: {
      name: "Elevate Media", // Use your verified sender
      email: "info@elevatemedia-marketing.com", // Use your verified sender email
    },
    to: [
      {
        email: "info@elevatemedia-marketing.com",
        name: "Elevate Media",
      },
    ],
    replyTo: {
      email: email,
      name: name,
    },
    subject: `New Contact Form Submission: ${subject}`,
    htmlContent: emailHtml, // Your existing email template
  };

  try {
    const response = await fetch(BREVO_API_URL, {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": BREVO_API_KEY,
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Brevo API error:", errorData);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: "Failed to send email" };
  }
}
