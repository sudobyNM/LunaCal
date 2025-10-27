# LunaCal Assessment - Image Gallery

A modern, responsive image gallery application built with React, Vite, and Tailwind CSS. This application allows users to browse, add, and manage images in a sleek, dark-themed interface.

## Features

- **Responsive Design**: Works on both desktop and mobile devices
- **Modern UI**: Sleek dark theme with glassmorphism effects
- **Image Management**: Add and browse through images with smooth scrolling
- **Interactive Elements**: Smooth animations and transitions for better user experience
- **Optimized Build**: Built with Vite for fast development and production builds

## Tech Stack

- **Frontend**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom theming
- **Linting**: ESLint with React Hooks and React Refresh plugins
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm (v7 or later) or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/lunacal-assessment.git
   cd lunacal-assessment/lunacal_assessment
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

### Development

To start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
lunacal_assessment/
├── src/
│   ├── components/    # Reusable React components
│   │   ├── Gallery.jsx
│   │   ├── ImageCard.jsx
│   │   ├── SideBar.jsx
│   │   └── Tabs.jsx
│   ├── App.jsx        # Main application component
│   └── main.jsx       # Application entry point
├── public/            # Static files
├── .eslintrc.cjs      # ESLint configuration
├── index.html         # Main HTML file
├── package.json       # Project dependencies and scripts
├── postcss.config.js  # PostCSS configuration
├── tailwind.config.js # Tailwind CSS configuration
└── vite.config.js     # Vite configuration
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint

