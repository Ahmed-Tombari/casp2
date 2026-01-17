# Deployment Guide

## Build Status
✅ Project has been successfully built and is ready for deployment.
✅ **Security Update**: Next.js upgraded to 15.5.9 (patched for CVE-2025-66478)
✅ **Vulnerabilities**: 0 vulnerabilities found

## Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn package manager

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# NextAuth Configuration (Required)
NEXTAUTH_URL=https://your-domain.com
NEXTAUTH_SECRET=your-secret-key-here-generate-a-random-string

# Google OAuth (Optional - for Google Sign In)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# GitHub OAuth (Optional - for GitHub Sign In)
GITHUB_ID=your-github-client-id
GITHUB_SECRET=your-github-client-secret
```

### Generating NEXTAUTH_SECRET
You can generate a secure secret using:
```bash
openssl rand -base64 32
```

## Build Commands

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

## Deployment Options

### Vercel (Recommended for Next.js)
1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Other Platforms
- **Netlify**: Configure build command as `npm run build` and publish directory as `.next`
- **Docker**: Create a Dockerfile with Node.js and run `npm run build && npm start`
- **Traditional Hosting**: Build locally and upload the `.next` folder along with `node_modules` and configuration files

## Build Output
The production build creates:
- `.next/` directory with optimized production files
- Static pages pre-rendered for better performance
- 92 static pages generated successfully

## Notes
- **Next.js Version**: 15.5.9 (latest patched version, CVE-2025-66478 fixed)
- ESLint is configured to ignore during builds (see `next.config.ts`)
- Images are unoptimized (configured in `next.config.ts`)
- The project supports multiple locales: Arabic (ar), French (fr), and English (en)
- Default locale is Arabic (ar)

## Security Notes
⚠️ **Important**: 
- Never commit `.env.local` or `.env` files to version control
- Use strong, unique secrets for production
- Keep your OAuth client secrets secure

