# EaglePreneurs - FGCU School of Entrepreneurship Portal

A modern, AI-powered student portal for Florida Gulf Coast University's Daveler & Kauanui School of Entrepreneurship.

## Features

- **4-Page Interactive Platform**
  - Homepage: Hero section, AI Advisor chatbot, statistics, featured content
  - Course Info: Complete catalog with filtering, prerequisites, course details
  - My Degree: Progress dashboard for tracking graduation requirements
  - Campus & Programs: Lucas Hall facilities, programs, and tour scheduling

- **AI Advisor Chatbot**
  - Powered by Claude 3.5 Sonnet
  - Context-aware responses about courses, requirements, and programs
  - Real-time message history tracking
  - Professional styling with chat modal

- **Modern Design**
  - FGCU brand colors: Cobalt Blue, Emerald Green, Gold
  - Responsive on all devices (mobile-first)
  - Smooth animations and transitions
  - Accessibility-focused

## Tech Stack

- **Frontend**: Next.js 14+ with React and TypeScript
- **Backend**: Next.js API Routes
- **AI**: Anthropic Claude API
- **Deployment**: Vercel
- **Version Control**: GitHub

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- GitHub account
- Vercel account
- Anthropic API key from [console.anthropic.com](https://console.anthropic.com)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/fgcu-site.git
   cd fgcu-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` and add your Anthropic API key:
   ```
   ANTHROPIC_API_KEY=your_api_key_here
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
app/
├── layout.tsx              # Root layout with metadata
├── page.tsx                # Homepage
├── globals.css             # Global styles
├── api/chat/route.ts       # Chat API endpoint
├── courses/page.tsx        # Course catalog page
├── my-degree/page.tsx      # Degree progress page
└── campus/page.tsx         # Campus facilities page

lib/
├── types.ts               # TypeScript interfaces
├── knowledge-base.ts      # Structured course data
└── ai-advisor.ts          # Claude API integration

public/                    # Static assets (optional)
```

## Deployment to Vercel

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: EaglePreneurs portal"
git branch -M main
git remote add origin https://github.com/yourusername/fgcu-site.git
git push -u origin main
```

### 2. Import to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New..." → "Project"
3. Select your GitHub repository
4. Framework: **Next.js**
5. Build settings are auto-detected
6. Add Environment Variables:
   - Key: `ANTHROPIC_API_KEY`
   - Value: Your Anthropic API key
7. Click "Deploy"

### 3. Custom Domain

1. In Vercel project settings, go to "Domains"
2. Add your custom domain or use `fgcu-site.vercel.app`
3. Point DNS records if using custom domain

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `ANTHROPIC_API_KEY` | Yes | API key from Anthropic for Claude AI |

## API Endpoints

### POST `/api/chat`

Sends a message to the AI Advisor and returns a response.

**Request:**
```json
{
  "message": "What are the ENT major requirements?",
  "history": [
    { "role": "user", "content": "Hello" },
    { "role": "assistant", "content": "Hi there!" }
  ]
}
```

**Response:**
```json
{
  "reply": "The BS in Entrepreneurship requires 120 total credits..."
}
```

**Error Response:**
```json
{
  "reply": "",
  "error": "Error message describing what went wrong"
}
```

## Features & Pages

### Homepage (`/`)
- Hero section with program overview
- AI Advisor chatbot (both strip and modal)
- Statistics bar (service-learning, credits, class size, ranking)
- Video grid
- Quick-access cards
- Navigation to other pages

### Courses (`/courses`)
- Full course catalog with 19 ENT courses
- Filter by: All, Required, Electives, Dual-credit
- Course details: code, name, credits, prerequisites
- Special badges for dual-credit courses

### My Degree (`/my-degree`)
- Progress trackers for:
  - Major credits (30/120)
  - General Education (36 credits)
  - Service-learning (80 hours)
  - Writing requirement (12 credits)
  - Sustainability requirement (3 credits)
- Switch Major / Minor information

### Campus (`/campus`)
- Lucas Hall facilities overview:
  - Runway Program incubator
  - Makerspace (Room 203)
  - Media Lab (Room 308)
  - Advanced Computing Lab
  - The NEST Innovation Hub
- Student programs and competitions
- Tour scheduling form

## Customization

### Brand Colors

Edit colors in `app/globals.css`:
```css
:root {
  --blue: #002D72;
  --green: #007749;
  --gold: #B9975B;
  /* ... other colors ... */
}
```

### Knowledge Base

Update course data in `lib/knowledge-base.ts`:
- Add/edit courses in the `courses` object
- Update facilities in the `facilities` array
- Modify programs in the `programs` array

### AI Advisor System Prompt

Edit the system prompt in `lib/ai-advisor.ts` to customize advisor behavior.

## Production Considerations

### Performance
- Next.js automatically optimizes with image optimization and code splitting
- API responses are cached at CDN level via Vercel
- CSS is minified and inlined

### Security
- API key is stored in Vercel environment variables (never exposed)
- Input validation on chat messages
- Rate limiting should be implemented for production

### Monitoring
- Check Vercel Analytics dashboard for performance metrics
- Monitor API usage in Anthropic console
- Set up error tracking (Sentry, etc.)

## Troubleshooting

### Chat API returns 401 error
- Verify `ANTHROPIC_API_KEY` is set in Vercel environment variables
- Regenerate API key at [console.anthropic.com](https://console.anthropic.com/account/keys)

### Build fails locally
- Delete `node_modules` and `.next` folder
- Run `npm install` again
- Ensure Node version is 18+

### Routes not working
- Check that file is named `page.tsx` (not `page.ts`)
- Verify folder structure matches route paths

## Contributing

1. Create a new branch: `git checkout -b feature/your-feature`
2. Make changes and test locally: `npm run dev`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to GitHub: `git push origin feature/your-feature`
5. Create Pull Request on GitHub

## License

This project is part of FGCU's School of Entrepreneurship and is maintained by the university.

## Support

For questions about the platform:
- **Technical Issues**: Check GitHub Issues
- **Academic Questions**: Contact FGCU School of Entrepreneurship
- **Portal Feedback**: Submit an issue on GitHub

## Resources

- [FGCU School of Entrepreneurship](https://www.fgcu.edu/school-of-entrepreneurship/)
- [FGCU Course Catalog](https://catalog.fgcu.edu)
- [Next.js Documentation](https://nextjs.org/docs)
- [Anthropic Claude Documentation](https://docs.anthropic.com)
