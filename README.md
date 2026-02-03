# MVSK Esports Website

Official website for MVSK Esports, featuring the Valorant team MVSK Hearts.

## Features

- **Dynamic Content Management**: Integrated with Decap CMS for easy content updates
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Modern Tech Stack**: Built with Next.js, React, TypeScript, and Tailwind CSS
- **Static Site Generation**: Fast, SEO-friendly pages with Next.js SSG

## Pages

1. **Home** - Hero banner, latest news, upcoming matches, Discord/Twitch integration, sponsors
2. **About** - Mission, vision, and achievements timeline
3. **Teams** - MVSK Hearts roster with player cards and coaching staff
4. **Schedule** - Match schedule with upcoming and past results
5. **News** - Blog updates and announcements
6. **Partners** - Sponsor showcase and partnership information

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The site will be available at `http://localhost:3000`.

## Content Management

Access the CMS admin panel at `/admin` to manage:
- News articles
- Match schedule
- Player profiles
- Partner information

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── about/           # About page
│   ├── teams/           # Teams page
│   ├── schedule/        # Schedule page
│   ├── news/            # News page
│   ├── partners/        # Partners page
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/          # React components
│   ├── Header.tsx       # Navigation header
│   └── Footer.tsx       # Site footer
├── content/             # CMS content files
│   ├── news/
│   ├── matches/
│   ├── players/
│   └── partners/
├── public/              # Static assets
│   ├── admin/           # Decap CMS admin
│   └── images/          # Image uploads
└── package.json         # Dependencies

```

## Design

The website features a sleek blue and black color scheme inspired by the MVSK Esports branding:
- Primary Blue: `#0066ff`
- Dark Background: `#0a0a0a`
- Gray Accents: `#1a1a1a`

## Discord Integration

The site emphasizes Discord as the primary communication channel. Update Discord server invite links and widget:

1. **Discord Widget** (Home page): Replace `YOUR_SERVER_ID` in `app/page.tsx` with your actual Discord server ID
2. **Discord Links**: Update the invite URL `https://discord.gg/mvsk` throughout the site:
   - Footer component
   - Home page Discord widget
   - News page CTA

## Technical Notes

- **TypeScript Configuration**: Next.js may automatically modify `tsconfig.json` during builds (e.g., setting jsx to "react-jsx" or adding include paths). This is expected behavior and helps optimize the build process.
- **Build Output**: The site uses static export, generating HTML files in the `out/` directory that can be deployed to any static hosting service.

## License

© 2026 MVSK Esports. All rights reserved.
