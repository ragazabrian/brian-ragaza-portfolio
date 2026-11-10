# Brian Ragaza — Portfolio (MetaLab Architecture)

An exact, high-fidelity recreation of [MetaLab](https://www.metalab.com/) built for **Brian Ragaza's Portfolio**. Replicates MetaLab's signature dark aesthetic, typography, ambient video loops, interactive project showcases, and complete directory of 85+ shipped case studies.

## ✨ Highlights & Architecture

- **Stack**: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion, Lucide Icons.
- **Pages Cloned**:
  - **Home (`/`)**: "We make interfaces" hero with ambient video backdrop, client logo marquee, featured category-defining projects, agency philosophy manifesto, capabilities preview, and start-a-project CTA.
  - **Work (`/work`)**: Comprehensive directory of 85+ products and platforms with live category filtering (`AI`, `Product`, `Full Build`, `Web`, `Brand`), instant search bar, video hover previews, and case study tags.
  - **Case Studies (`/work/[slug]`)**: In-depth project breakdown pages for 85+ projects (including Midjourney, Robinhood, Suno, Uber, Windsurf, Atoms, Headspace, Pitch, Calvin Klein) with hero visuals, impact metrics, challenges, solutions, client quotes, and next-project navigators.
  - **Capabilities (`/what-we-do`)**: "Odds are you've used a product we've built", 4 core pillars (Product Design, AI & Frontier Interfaces, Full-Stack Engineering, Brand & Motion), and engagement models (0-to-1 Sprints, Scale & Redesign, Embedded Labs).
  - **About (`/about`)**: "Global talent, Canadian roots", 160+ team members, global cities showcase, studio principles, and culture.
  - **Careers (`/careers`)**: "Your career — our open roles", perks & benefits grid, Greenhouse job links, and studio inquiry channels.
  - **Contact (`/contact`)**: "Say hey.", interactive inquiry form with budget/service selectors, and direct studio contact information.
- **Assets**: Streaming video loops, vector logos, and imagery directly from MetaLab's production Sanity CDN.

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/ragazabrian/brian-ragaza-portfolio.git

# Navigate into directory
cd brian-ragaza-portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🌐 Live Deployment
Ready for one-click deployment to Vercel, Netlify, or any modern Edge / Node runtime.
