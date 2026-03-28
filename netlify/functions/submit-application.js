// Simple in-memory rate limiter (resets when function cold starts, typically daily)
let submissionCount = 0;
let lastResetDate = new Date().toDateString();
const DAILY_LIMIT = 300;

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Reset counter if it's a new day
    const currentDate = new Date().toDateString();
    if (currentDate !== lastResetDate) {
      submissionCount = 0;
      lastResetDate = currentDate;
    }

    // Check if daily limit reached
    if (submissionCount >= DAILY_LIMIT) {
      return {
        statusCode: 429,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          success: false,
          error: 'Daily submission limit reached. Please try again tomorrow.',
          limitReached: true
        })
      };
    }

    const data = JSON.parse(event.body);
    const { xUsername, walletAddress, tasksCompleted, submissionTime } = data;

    // Using Brevo (formerly Sendinblue) - Free tier: 300 emails/day
    const emailData = {
      sender: { name: "Pika NFT", email: "noreply@pikawhitelist.com" },
      to: [{ email: "Elelukryptika@gmail.com", name: "Pika Team" }],
      subject: "New Pika NFT Whitelist Application",
      htmlContent: `
        <h2>New Whitelist Application</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr style="background-color: #f8f9fa;">
            <td style="padding: 12px; border: 1px solid #ddd;"><strong>X Username:</strong></td>
            <td style="padding: 12px; border: 1px solid #ddd;">${xUsername}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd;"><strong>X Profile:</strong></td>
            <td style="padding: 12px; border: 1px solid #ddd;"><a href="https://x.com/${xUsername.replace('@', '')}">View Profile</a></td>
          </tr>
          <tr style="background-color: #f8f9fa;">
            <td style="padding: 12px; border: 1px solid #ddd;"><strong>Wallet Address:</strong></td>
            <td style="padding: 12px; border: 1px solid #ddd;">${walletAddress}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd;"><strong>Tasks Completed:</strong></td>
            <td style="padding: 12px; border: 1px solid #ddd;">${tasksCompleted}</td>
          </tr>
          <tr style="background-color: #f8f9fa;">
            <td style="padding: 12px; border: 1px solid #ddd;"><strong>Submission Time:</strong></td>
            <td style="padding: 12px; border: 1px solid #ddd;">${submissionTime}</td>
          </tr>
        </table>
        <br>
        <p><strong>Verification Steps:</strong></p>
        <ol>
          <li>Check if user follows @pikajpegs</li>
          <li>Verify user tagged 2 friends</li>
          <li>Confirm quote tweet contains "pika"</li>
        </ol>
        <hr style="margin-top: 20px; border: none; border-top: 1px solid #ddd;">
        <p style="color: #666; font-size: 12px;">
          Submission #${submissionCount + 1} of ${DAILY_LIMIT} today
        </p>
      `
    };

    // Send via Brevo API
    const brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': process.env.BREVO_API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailData)
    });

    if (!brevoResponse.ok) {
      const error = await brevoResponse.json();
      console.error('Brevo error:', error);
      throw new Error('Failed to send email');
    }

    // Increment counter after successful send
    submissionCount++;

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        success: true, 
        message: 'Application submitted successfully',
        submissionsToday: submissionCount,
        remainingToday: DAILY_LIMIT - submissionCount
      })
    };

  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        success: false, 
        error: 'Failed to submit application' 
      })
    };
  }
};
