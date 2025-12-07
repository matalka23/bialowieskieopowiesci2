# Białowieskie Opowieści 2

A web application showcasing retellings of 31 local legends, fairy tales, and stories from the Białowieża region. This project presents a creative reinterpretation of the original book "Białowieskie opowieści" by Mikołaj Hajduk, published in 1990.

## About the Project

In 2025, on the 35th anniversary of the original publication, Natalka Suszczyńska (granddaughter of the original author) created retellings of all 31 stories from the book. This project was realized thanks to an artistic scholarship from the President of Białystok.

The stories are organized into six chapters:
- **Dlaczego zwierzęta nie żyją w zgodzie**
- **Ludzie i zwierzęta**
- **Diabelskie figle**
- **Tropami zbójców i rabusiów**
- **Gdy milknie dzwon**
- **W pogoni za szczęściem**

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Styled Components** - CSS-in-JS styling
- **React Markdown** - Markdown rendering for story content
- **Remark GFM** - GitHub Flavored Markdown support

## Getting Started

### Prerequisites

- Node.js 22.13.1 (see `engines` in `package.json`)

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### Build

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

### Code Quality

Type checking:

```bash
npm run type-check
```

Format code:

```bash
npm run format
```

Check formatting:

```bash
npm run format:check
```

## Deployment

This application is configured for automatic deployment to GitHub Pages.

### GitHub Pages Setup

The application is automatically deployed to GitHub Pages at `https://matalka23.github.io/bialowieskieopowiesci2/` whenever changes are pushed to the `main` branch.

#### Initial Setup

1. After the first successful GitHub Actions workflow run, enable GitHub Pages in your repository settings:
   - Go to **Settings** → **Pages**
   - Under **Source**, select **Deploy from a branch**
   - Select branch: `gh-pages` / `/ (root)`
   - Click **Save**

2. The site will be available at `https://matalka23.github.io/bialowieskieopowiesci2/` after the first deployment completes.

#### How It Works

- The GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically:
  - Builds the production version on every push to `main`
  - Deploys the built files to the `gh-pages` branch
  - Uses Node.js 22.13.1 (matching the project's engine requirement)

- The application is configured with:
  - Base path: `/bialowieskieopowiesci2/` (configured in `vite.config.ts`)
  - React Router basename: `/bialowieskieopowiesci2` (configured in `src/App.tsx`)
  - 404.html redirect for client-side routing support

#### Manual Deployment

If you need to deploy manually, you can:

1. Build the project:
   ```bash
   npm run build
   ```

2. The built files will be in the `dist/` directory, ready to be deployed.

## Project Structure

```
src/
├── components/          # React components
│   ├── Biography/       # Author biography components
│   ├── Footer/          # Footer component
│   ├── Hero/            # Hero section
│   ├── MarkdownRenderer/# Markdown content renderer
│   ├── ProjectDescription/# Project description
│   ├── ResponsiveImage/ # Responsive image component
│   └── ShortStories/    # Story listing components
├── data/                # Data files
│   ├── biographies.ts   # Author biographies
│   ├── projectInfo.ts   # Project metadata
│   └── stories.ts       # Story data and chapters
├── hooks/               # Custom React hooks
├── pages/               # Page components
│   ├── HomePage/        # Home page
│   └── StoryPage/       # Individual story page
├── types/               # TypeScript type definitions
└── utils/               # Utility functions

public/
├── about.md             # Project description (markdown)
├── bio/                 # Author biographies (markdown)
├── images/              # Images (desktop, mobile, webp formats)
└── stories/             # Story content (markdown, organized by chapter)
```

## License

This project is part of an artistic scholarship project. Please refer to the project authors for usage rights.
