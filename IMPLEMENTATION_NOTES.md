# Pika NFT Site - Implementation Notes

## Design Changes

### Style Transformation
- Transformed from vibrant NFT aesthetic to minimal 1-bit pixel art style (inspired by bitkin.wtf)
- Changed background from `#121212` to pure black `#0a0a0a`
- Removed grid pattern background for cleaner look
- Simplified all components to match minimal aesthetic
- Added Press Start 2P pixel font for retro feel

### Application Modal with Validation

#### X Username Validation
- Validates against official X username rules (1-15 characters)
- Only allows alphanumeric characters and underscores
- Automatically removes @ symbol if user includes it
- Real-time error feedback with clear messages

#### Ethereum Wallet Validation
- Validates proper Ethereum address format (0x + 40 hex characters)
- Uses regex pattern: `/^0x[a-fA-F0-9]{40}$/`
- Prevents submission of invalid addresses like "00"
- Shows helpful error messages

#### Task Verification Flow
1. User enters valid X username
2. User completes tasks on X:
   - Follow @pikajpegs
   - Tag 2 friends in comments
   - Quote tweet with "pika"
3. User confirms task completion via checkboxes
4. User enters valid Ethereum wallet address
5. Submission sent via EmailJS for manual verification

#### Email Submission
- Uses EmailJS to send application data
- Includes:
  - X username with profile link
  - Wallet address
  - Timestamp
  - Task checklist for manual verification
- Team can verify tasks by checking the user's X profile

## Key Features

### Validation Rules
- **X Username**: 1-15 characters, letters/numbers/underscore only
- **Wallet Address**: Must start with 0x followed by 40 hexadecimal characters
- **Task Completion**: All 3 tasks must be checked before proceeding

### User Experience
- Clear error messages with icons
- Step-by-step guided flow (3 steps + success)
- Loading states during submission
- Success confirmation with verification details
- Can't proceed without valid inputs

### Security
- Client-side validation prevents obviously invalid data
- Server-side verification via manual review of X profile
- EmailJS integration for secure data transmission
- Environment variables for API keys

## Environment Variables Required

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

## Manual Verification Process

When an application is submitted, the team receives an email with:
1. User's X username and profile link
2. Wallet address
3. Checklist of tasks to verify

Team should manually verify:
- User follows @pikajpegs on X
- User tagged 2 friends in comments
- User quoted pinned post with "pika"

## Components Updated

- `ApplicationModal.tsx` - Complete rewrite with validation
- `Hero.tsx` - Minimal design, modal trigger
- `Navbar.tsx` - Simplified navigation
- `Footer.tsx` - Clean footer with X link
- `Loader.tsx` - Minimal loading screen
- `About.tsx` - Simple 3-column layout
- `Contact.tsx` - Directs to modal and X
- `StatsBar.tsx` - Clean stats display
- `NFTGallery.tsx` - Minimal gallery cards
- `Roadmap.tsx` - Simple roadmap cards
- `Pokedex.tsx` - Feature highlights grid

## Styling

- Pure black background (#0a0a0a)
- White text with opacity variations
- Yellow accent color (#FDE047)
- Minimal borders (white/10 opacity)
- No rounded corners on modal (sharp edges)
- Pixel-perfect aesthetic
