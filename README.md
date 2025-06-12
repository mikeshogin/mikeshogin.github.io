# Mike Shogin - Personal Website

A multilingual static website built with **Docusaurus**, showcasing services as a system analyst and IT consultant.

## 🌐 Features

- **Multilingual Support**: English (default) and Russian with automatic browser-based language detection
- **Modern Design**: Clean, light theme optimized for professional presentation
- **Service Pages**: Detailed descriptions of system analysis, mentorship, consulting, and architecture audit services
- **Portfolio**: Showcase of past projects and success stories
- **Blog**: Technical insights and industry thoughts with tagging system
- **Responsive**: Mobile-friendly design that works on all devices
- **SEO Optimized**: Meta tags, social preview cards, and search engine optimization

## 🚀 Quick Start

### Prerequisites

- Node.js 18 or higher
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/mikeshogin/mikeshogin.github.io.git
cd mikeshogin.github.io

# Install dependencies
npm install

# Start development server
npm start
```

The site will be available at `http://localhost:3000`.

### Available Commands

```bash
# Development
npm start                    # Start development server
npm run start -- --locale ru   # Start with Russian locale

# Build
npm run build               # Build for production
npm run serve              # Serve production build locally

# Internationalization
npm run write-translations # Generate translation files
npm run write-heading-ids  # Generate heading IDs

# Utilities
npm run clear              # Clear cache
npm run typecheck          # Run TypeScript checks
```

## 📁 Project Structure

```
mikeshogin.github.io/
├── blog/                     # Blog posts (English)
├── i18n/                     # Internationalization
│   └── ru/                   # Russian translations
├── src/
│   ├── css/
│   │   └── custom.css       # Custom styling
│   └── pages/               # Static pages
│       ├── about.md         # About page
│       ├── portfolio.md     # Portfolio page
│       ├── services/        # Service pages
│       └── index.tsx        # Homepage
├── static/                  # Static assets
├── docusaurus.config.ts     # Docusaurus configuration
└── package.json
```

## 🌍 Internationalization

The site supports English and Russian:

- **Default**: English (`/`)
- **Russian**: Russian (`/ru/`)
- **Auto-detection**: Browser language preference

### Adding Translations

1. Update translation files in `i18n/ru/`
2. Add Russian versions of pages in `i18n/ru/docusaurus-plugin-content-pages/`
3. Translate blog posts in `i18n/ru/docusaurus-plugin-content-blog/`

## 🎨 Customization

### Styling

- Main styles: `src/css/custom.css`
- Theme colors and typography configured for professional appearance
- Responsive design with mobile-first approach

### Content

- **Homepage**: `src/pages/index.tsx`
- **About**: `src/pages/about.md`
- **Portfolio**: `src/pages/portfolio.md`
- **Services**: `src/pages/services/*.md`
- **Blog**: `blog/*.md`

### Configuration

Main configuration in `docusaurus.config.ts`:
- Site metadata and SEO
- Navigation structure
- Internationalization settings
- Blog configuration
- Theme customization

## 🚀 Deployment

### GitHub Pages (Automatic)

The site automatically deploys to GitHub Pages via GitHub Actions when pushing to the `main` or `master` branch.

### Manual Deployment

```bash
# Build the site
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### Other Hosting Platforms

The built site (`build/` directory) can be deployed to:
- Netlify
- Vercel
- Cloudflare Pages
- Any static hosting service

## 🏗️ Development

### Adding a New Service

1. Create a new file in `src/pages/services/`
2. Update navigation in `docusaurus.config.ts`
3. Add translations in `i18n/ru/`

### Writing Blog Posts

1. Create a new markdown file in `blog/`
2. Use the frontmatter format:
```yaml
---
slug: post-slug
title: Post Title
authors:
  - name: Mike Shogin
    title: System Analyst & IT Consultant
    url: https://mikeshogin.com
tags: [tag1, tag2]
---
```

### Custom Components

Create React components in `src/components/` and import them in pages or blog posts.

## 📧 Contact & Support

- **Email**: contact@mikeshogin.com
- **Website**: https://mikeshogin.com
- **GitHub**: https://github.com/mikeshogin

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ using [Docusaurus](https://docusaurus.io/) 