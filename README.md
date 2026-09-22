# Dawood Sajid — Personal Portfolio

An editorial-style, ultra-performance personal portfolio built for **Muhammad Dawood Bin Sajid (Daud)**  AI Developer @ [DEVNOZ](https://devnoz.com).

Featuring a modern dark-mode design system with copper/amber accents, live GitHub GraphQL API integrations, dynamic project showcase cards, and high-performance server-side rendering.

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

---

## ✨ Features

- **🎨 "Undisputed" Editorial Aesthetics**: Dark neutral palette (`#121212`) paired with refined copper/amber accents (`#D96C3A`) and high-legibility serif headings (*Newsreader* & *Inter*).
- **📊 Live GitHub GraphQL Integration**: Real-time contribution heatmap, automated language percentage breakdown, and live repository stats fetched directly from GitHub's API.
- **🖼️ Card Grid Project Showcase**: High-impact 3-column project cards featuring visual state badges (`Completed`, `In Development`, `Prototype`), tech stack tags, and hover micro-interactions.
- **⚡ Next.js 16 App Router & Turbopack**: Blazing-fast page loads with Incremental Static Regeneration (ISR) and optimized asset handling.
- **🛠️ Stack & Capabilities Grid**: Categorized tech stack with Lucide icons (Languages, Frameworks, Tools, Databases) and structured service capabilities.
- **📱 Fully Responsive**: Fluid typography, responsive grids, and clean layout transitions tuned for all screen sizes.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS Tokens
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: CSS Transitions & [Framer Motion](https://www.framer.com/motion/)
- **APIs**: GitHub REST & GraphQL API

---

## 🚀 Quick Start

### 1. Prerequisites

Ensure you have Node.js 18+ installed on your system.

### 2. Clone the Repository

```bash
git clone https://github.com/daudx/portfolio.git
cd portfolio
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Environment Setup

Create a `.env` file in the root directory (or edit `.env.local`):

```env
# GitHub Personal Access Token (Requires 'read:user' & 'public_repo' scope)
GITHUB_TOKEN=your_github_personal_access_token

# GitHub Username
GITHUB_USERNAME=daudx

# Revalidation window in seconds (default: 1 hour)
GITHUB_REVALIDATE_SECONDS=3600

# Canonical Production URL
NEXT_PUBLIC_SITE_URL=https://dawoodsajid.dev
```

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗️ Build & Deployment

To generate a production-ready build:

```bash
npm run build
npm run start
```

### Deploying to Vercel

1. Push your repository to GitHub.
2. Import the project into [Vercel](https://vercel.com).
3. Add your `GITHUB_TOKEN` and `GITHUB_USERNAME` environment variables in the Vercel dashboard.
4. Deploy!

---

## 📬 Contact & Connect

- **Website**: [dawoodsajid.dev](https://dawoodsajid.dev)
- **GitHub**: [@daudx](https://github.com/daudx)
- **LinkedIn**: [dawood-sajid](https://www.linkedin.com/in/dawood-sajid-58ab7a2b4/)
- **Email**: [daudx6192@gmail.com](mailto:daudx6192@gmail.com)

---

*Designed & Developed by Muhammad Dawood Bin Sajid (Daud).*
