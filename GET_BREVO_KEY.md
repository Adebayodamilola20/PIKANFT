# Vercel Setup Instructions

Your app now uses Vercel Serverless Functions for unlimited form submissions!

## Setup Steps:

### 1. You already have the Brevo API Key
✅ The API key is stored in your local `.env.local` file

### 2. Tell the person who owns the Vercel account to add the environment variable:

**In Vercel Dashboard:**
1. Go to the project settings
2. Navigate to: Settings > Environment Variables
3. Add new variable:
   - Name: `BREVO_API_KEY`
   - Value: [Get from your local .env.local file - starts with xkeysib-]
   - Environment: Production, Preview, Development (select all)
4. Save
5. Redeploy the site

### 3. Push your code
```bash
git add .
git commit -m "Convert to Vercel serverless functions"
git push origin main
```

Vercel will auto-deploy and the form will work!

## How it works:
- Form submissions go to `/api/submit-application`
- Vercel Serverless Function sends email via Brevo API
- Emails arrive at: Elelukryptika@gmail.com
- Rate limited to 300 submissions/day
- Automatically resets daily

## Benefits:
✅ 300 emails/day (9000/month) - FREE
✅ Sends to ANY email address
✅ Auto-deploys on git push
✅ Built-in rate limiting
✅ No credit card required

