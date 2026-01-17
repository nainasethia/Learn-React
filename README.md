# // DAY- 1 //

# 📚 React Tutorial Overview

Key Points

- Build a production‑grade video‑game discovery app using React and TypeScript.
- Learn React fundamentals: JSX, components, virtual DOM, state, and props.
- Get familiar with Bootstrap integration for styling and layout.
- Understand routing, state management, and advanced topics like React Query and authentication.

# 🎬 Course & Project Overview

- Build a production‑grade video‑game discovery app
- Features: dark/light mode toggle, search, genre & platform filters, dynamic page titles, sorting, loading skeletons, deployment
- Later modules cover: routing, state management, React Query, authentication, error handling, performance optimization

# 📚 Prerequisites

- HTML, CSS, JavaScript fundamentals
- Node.js v24+ (check with node -v)
- VS Code (recommended) with Prettier extension for auto‑formatting
- Node.js – runtime environment for executing JavaScript outside the browser.

# 🧩 TypeScript Overview

- Superset of JavaScript adding static typing
- Catches errors at compile time, reducing runtime bugs
- The course uses TypeScript for all components
- Static typing – the practice of declaring variable types so the compiler can verify correct usage before execution.

# ⚛️ What Is React?

React – a JavaScript library for building dynamic, interactive user interfaces. Created at Facebook in 2011; now the most popular front‑end library.

-> Why React Was Created

- Manipulating the DOM directly with vanilla JavaScript becomes complex as apps grow
- React introduces components: reusable, modular UI pieces that manage their own rendering

-> Component Concept

- Each UI part (navbar, sidebar, game card, like button) is a component
- Components form a tree with the root App component at the top

# 🛠 Development Environment Setup

-> Node Version Check

= node -v

= example output: v25.3.0

- If version < 24, download the latest from nodejs.org
- VS Code Configuration

-> Install Prettier extension

- Enable Format on Save (settings.json: "editor.formatOnSave": true)

# 🚀 Creating a React App

-> Two common tools:

1. Create React App (CRA):-

-Advantages:- Official, widely documented

- Typical Use:- Beginners, stable projects

2. Vite

- Advantages:- Faster dev server, smaller bundles
- Typical Use:- Modern projects, performance‑focused

-> Using Vite (recommended)

npm create vite@latest # specify version with @7.2.5 for exact match

= Choose project name, select **react**, then **typescript**

cd <project‑folder>
npm install
npm run dev

-Development server runs at http://localhost:5173 (port may vary)

# 📁 Project Structure

project-root/
│
├── node_modules/ # Third-party libraries (do not edit)
├── public/ # Static assets
├── src/
│ ├── App.tsx # Root component
│ ├── main.tsx # Entry point
│ └── message.tsx # Example component
│
├── index.html # Contains <div id="root"></div>
├── package.json # Dependencies & scripts
├── tsconfig.json # TypeScript configuration
└── vite.config.ts

# 📁 Project Structure Overview

- node_modules/ – third‑party libraries (React, etc.) – do not edit
- public/ – static assets (images, videos)
- src/ – source code
- App.tsx – root component (will be rewritten)
- main.tsx – entry point, renders the component tree with ReactDOM
- index.html – contains <div id="root"></div> where React mounts the app
- package.json – project metadata, scripts, dependencies (react, react-dom)
- tsconfig.json – TypeScript compiler options
- vite.config.ts – Vite configuration (usually untouched)
