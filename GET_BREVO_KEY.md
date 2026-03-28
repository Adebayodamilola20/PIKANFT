# Get Brevo API Key (Free - 300 emails/day = 9000/month!)

Brevo (formerly Sendinblue) allows sending to ANY email address without domain verification!

## Quick Setup (5 minutes):

### 1. Sign Up for Brevo
1. Go to https://www.brevo.com
2. Click "Sign up free"
3. Enter your email (lawalgiyath200716@gmail.com)
4. Verify your email
5. Complete the quick onboarding

### 2. Get API Key
1. Go to https://app.brevo.com/settings/keys/api
2. Click "Generate a new API key"
3. Name it: "Pika NFT Whitelist"
4. Copy the API key (starts with `xkeysib-...`)

### 3. Add to Netlify
1. Go to your Netlify dashboard
2. Select your site
3. Site settings > Environment variables
4. Add new variable:
   - Key: `BREVO_API_KEY`
   - Value: [paste your Brevo API key]
5. Save and redeploy

### 4. Test It
Run the test script:
```bash
node test-brevo.js
```

## Why Brevo?
✅ 300 emails/day (9000/month) - FREE
✅ Send to ANY email address (no domain verification needed!)
✅ No credit card required
✅ Professional email templates
✅ Delivery tracking
✅ Works immediately after signup

## Alternative Options:
- **SMTP2GO**: 1000 emails/month free (requires domain verification)
- **Mailgun**: 5000 emails/month free (requires domain verification)
- **SendGrid**: 100 emails/day free (requires domain verification)

Brevo is the BEST option because it doesn't require domain verification!
