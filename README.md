# // DAY- 1 //

# 📚 React Tutorial Overview

Key Points

- Learn React fundamentals: JSX, components, virtual DOM, state, and props.
- Get familiar with Bootstrap integration for styling and layout.
- Understand routing, state management, and advanced topics like React Query and authentication.

# 🎬 Course & Project Overview

- Features: dark/light mode toggle, search, genre & platform filters, dynamic page titles, sorting, loading skeletons, deployment
- Later modules cover: routing, state management, React Query, authentication, error handling, performance optimization

# 📚 Prerequisites

- **HTML, CSS, JavaScript** fundamentals
- Node.js **v24+** (check with node -v)
- VS Code (recommended) with **Prettier** extension for auto‑formatting

> **Node.js** – runtime environment for executing JavaScript outside the browser.

# 🧩 TypeScript Overview

- Superset of JavaScript adding **static typing**
- Catches errors at compile time, reducing runtime bugs
- The course uses TypeScript for all components

> **Static typing** – the practice of declaring variable types so the compiler can verify correct usage before execution.

# ⚛️ What Is React?

> **React** – a JavaScript library for building **dynamic, interactive user interfaces**. Created at Facebook in 2011; now the most popular front‑end library.

## Why React Was Created

- Manipulating the **DOM** directly with vanilla JavaScript becomes complex as apps grow
- React introduces **components**: reusable, modular UI pieces that manage their own rendering

## Component Concept

- Each UI part (navbar, sidebar, game card, like button) is a **component**
- Components form a **tree** with the root App component at the top

# 🛠 Development Environment Setup

## Node Version Check

```tsx
node - v; //example output: v25.3.0
```

- If version < 24, download the latest from **nodejs.org**

## VS Code Configuration

- Install **Prettier** extension
- Enable **Format on Save** (settings.json: "editor.formatOnSave": true)

# 🚀 Creating a React App

## Two common tools:

| Tool                       | Advantages                         | Typical Use                          |
| -------------------------- | ---------------------------------- | ------------------------------------ |
| **Create React App (CRA)** | Official, widely documented        | Beginners, stable projects           |
| **Vite**                   | Faster dev server, smaller bundles | Modern projects, performance-focused |

## Using Vite (recommended)

```tsx
npm create vite@latest //specify version with @7.2.5 for exact match
// Choose project name, select **react**, then **typescript**
cd <project‑folder>
npm install
npm run dev
```

- Development server runs at http://localhost:5173 (port may vary)

# 📁 Project Structure

```text
project-root/
├── node_modules/          # third‑party libraries (React, etc.) – do not edit
├── public/                # static assets (images, videos)
├── src/                   # source code
│   ├── App.tsx            # root component (will be rewritten)
│   ├── main.tsx           # entry point, renders the component tree with ReactDOM
│   └── message.tsx        # Example component
├── index.html             # contains <div id="root"></div> where React mounts the app
├── package.json           # project metadata, scripts, dependencies (react, react-dom)
├── tsconfig.json          # TypeScript compiler options/ TypeScript Configuration
└── vite.config.ts         # Vite configuration (usually untouched)

```

# // DAY- 2 //

# 🧑‍💻 First Component: Message

## File: src/message.tsx

```tsx
export default function Message() {
  return <h1>Hello World</h1>;
}
```

- **PascalCase** naming (e.g., Message) is required for React components

## Using the Component in App.tsx

```tsx
import Message from "./message";

export default function App() {
  return (
    <div>
      <Message />
    </div>
  );
}
```

- Components must be **self‑closing** (<Message />) or have matching closing tags

# ✨ JSX Basics

- JSX = **JavaScript XML** – syntax that looks like HTML inside JavaScript
- Compiles to React.createElement calls

> **Expression** – any JavaScript code inside {} that evaluates to a value, e.g., {userName}.

## Dynamic Content Example

```tsx
const name = "Alex";
return <h1>Hello {name ? name : "World"}</h1>;
```

- Conditional rendering using the ternary operator inside JSX

# 🌳 Component Tree & Virtual DOM

- React builds an in‑memory **Virtual DOM** representing the component hierarchy
- On state or prop changes, React **diffs** the new Virtual DOM against the previous one, updating only the changed real DOM nodes via **ReactDOM**

## Rendering with ReactDOM

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

- React.StrictMode helps identify potential problems; it has no UI output

# 📚 Library vs. Framework

| Aspect      | Library                                     | Framework                                   |
| ----------- | ------------------------------------------- | ------------------------------------------- |
| Scope       | Specific functionality (e.g., UI rendering) | Full application architecture & conventions |
| Flexibility | Choose any additional tools                 | Opinionated stack (routing, state, etc.)    |
| Example     | **React**                                   | **Angular, Vue**                            |

- React is a **library**; additional concerns (routing, state, etc.) are handled by separate packages.

# 🎨 Adding Bootstrap for Styling

```tsx
npm install bootstrap@5.2.3
```

- Import in src/main.tsx:

```tsx
import "bootstrap/dist/css/bootstrap.css";
```

- Removes default generated CSS files (App.css, index.css) as Bootstrap provides styling

# 📦 Building a ListGroup Component

## File: src/components/ListGroup.tsx

```tsx
export default function ListGroup() {
  return <h1>List Group</h1>;
}
```

- Imported and used in App.tsx:

```tsx
import ListGroup from "./components/ListGroup";

export default function App() {
  return (
    <div>
      <ListGroup />
    </div>
  );
}
```

## Implementing Bootstrap List Markup

```tsx
<ul className="list-group">
  <li className="list-group-item">Item 1</li>
  <li className="list-group-item">Item 2</li>
  <li className="list-group-item">Item 3</li>
</ul>
```

- Replace HTML class with **className** (JSX attribute)

# 📦 Handling Multiple Root Elements

- React components must return a **single** element. Solutions:

1. Wrap with a <div> (adds an extra DOM node)
2. Use **Fragments**: <> … </> (no extra node)

```tsx
export default function Example() {
  return (
    <>
      <h1>Title</h1>
      <ul>…</ul>
    </>
  );
}
```

# 🔁 Rendering Dynamic Lists with map

```tsx
const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

return (
  <ul className="list-group">
    {items.map((city) => (
      <li key={city} className="list-group-item">
        {city}
      </li>
    ))}
  </ul>
);
```

- Use Array.map to transform data into JSX elements
- Provide a **key** prop for each list item to help React track elements

# 📦 Additional Topics Mentioned (Future Modules)

- Routing (page navigation)
- State Management (e.g., Redux, Zustand)
- Data fetching with **React Query**
- Authentication & error handling
- Performance optimization

> **Hot Module Replacement (HMR)** – development feature that updates changed modules in the browser without a full reload.

> **Fragment** – React component (<>...</>) that groups children without adding extra nodes to the DOM.

# ⚛️ JSX Expressions & Dynamic Rendering 🚀

## Braces for Expressions

> In JSX, JavaScript expressions must be wrapped in {} to be evaluated.

```tsx
// Correct: dynamic content inside JSX
<h1>Hello {name}</h1>
```

## Keys in Lists

> Each element generated by Array.map needs a unique key prop so React can track updates.

```tsx
{
  items.map((city) => (
    <li key={city} className="list-group-item">
      {city}
    </li>
  ));
}
```

- When data comes from an API, use a stable identifier such as id instead of the item value.

## Conditional Rendering Techniques

| Technique            | Syntax                                          | When to Use                                                      |
| -------------------- | ----------------------------------------------- | ---------------------------------------------------------------- |
| **If statement**     | Not allowed directly in JSX                     | Move logic outside JSX (e.g., into a variable or function)       |
| **Ternary operator** | `{condition ? <ComponentA /> : <ComponentB />}` | Simple two-branch rendering                                      |
| **Logical &&**       | `{condition && <ComponentA />}`                 | Render only when the condition is truthy; avoids explicit `null` |

```tsx
// Ternary
{
  items.length === 0 ? <p>No items found</p> : null;
}

// Logical AND
{
  items.length === 0 && <p>No items found</p>;
}
```

## Extracting Rendering Logic

- **Constant**: store JSX in a variable.

```tsx
const message = items.length === 0 ? <p>No items found</p> : null;
return (
  <>
    {message}
    <ul>…</ul>
  </>
);
```

- Function: encapsulate logic, optionally with parameters.

```tsx
const getMessage = (count: number) =>
  count === 0 ? <p>No items found</p> : null;
```
