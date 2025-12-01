# Clothing Store

A modern e-commerce clothing store application built with React, TypeScript, and Vite. This project features a clean, responsive interface for browsing different clothing categories.

## 🚀 Tech Stack

- **React 19.2.0** - UI library
- **TypeScript 5.9.3** - Type safety
- **Vite 7.2.4** - Build tool and dev server
- **React Router DOM 7.9.6** - Client-side routing
- **Sass 1.94.2** - CSS preprocessing
- **vite-plugin-svgr** - SVG as React components

## ✨ Features

- 🎨 Modern and responsive UI
- 🧭 Client-side routing with React Router
- 📦 Component-based architecture
- 🎭 TypeScript for type safety
- 🖼️ SVG icons as React components
- 💅 Styled with SCSS/Sass
- ⚡ Fast development with Vite HMR

## 📁 Project Structure

```
src/
├── assets/          # Static assets (SVG icons)
├── components/      # Reusable UI components
│   ├── categories/     # Categories list component
│   └── category-item/  # Individual category card
├── routes/          # Page components
│   ├── home/          # Home page
│   └── Navigation/    # Navigation bar with routing
├── types/           # TypeScript type definitions
├── utils/           # Utilities and data files
│   └── Categories.json # Category data
├── App.tsx          # Main app component with routes
└── main.tsx         # Application entry point
```

## 🛠️ Installation

1. Clone the repository
2. Install dependencies:

```bash
yarn install
```

## 🏃‍♂️ Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn lint` - Run ESLint
- `yarn preview` - Preview production build

## 🎯 Key Components

### Navigation
- Responsive navigation bar with logo
- Links to Home and Shop pages
- Uses React Router for navigation

### Categories
- Dynamic category grid display
- Five main categories: Hats, Jackets, Sneakers, Women's, Men's
- Each category features an image and title

### Routing
- `/` - Home page with category grid
- `/shop` - Shop page (in development)

## ⚙️ Configuration

### SVG as React Components

This project uses `vite-plugin-svgr` to import SVGs as React components:

```typescript
// Import SVG as React component
import Logo from './assets/logo.svg?react'

// Use as component
<Logo />
```

**Configuration in `vite.config.ts`:**

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), svgr()],
})
```

### TypeScript

Custom type declarations for SVG imports are defined in `src/vite-env.d.ts`:

```typescript
declare module "*.svg?react" {
  import { FunctionComponent, SVGProps } from "react";
  const content: FunctionComponent<SVGProps<SVGSVGElement>>;
  export default content;
}
```

## 📝 Development Notes

- The project follows a component-based architecture for maintainability
- SCSS is used for styling with modular component styles
- TypeScript interfaces ensure type safety across the application
- Category data is stored in JSON format for easy management

## 🔧 Dependencies

### Core Dependencies
- `react` & `react-dom` - React library
- `react-router-dom` - Routing functionality
- `sass` - CSS preprocessing

### Dev Dependencies
- `@vitejs/plugin-react` - React support for Vite
- `vite-plugin-svgr` - SVG to React component transformation
- `typescript` - TypeScript compiler
- `eslint` - Code linting

## 📄 License

This is a learning project based on the Zero to Mastery React Developer course.
