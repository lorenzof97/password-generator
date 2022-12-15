# Password Generator

Password generation app launched with NextJS and Tailwind, originally developed as a "serious" exercise in CSS utilizing advanced concepts with a number of transitions, pseudo-elements, pseudo-states and more.

## Installation 

The aforementioned steps outline [Tailwind's official Next.js configuration](https://tailwindcss.com/docs/guides/nextjs).

### 1. Create project

    npx create-next-app@latest my-project --typescript --eslint
    cd my-project
    
### 2. Install Tailwind

    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p

### 3. Configure Template Paths

In the project's `tailwind.config.js` file, add the following to "content":

    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
      ],
  
### 4. Add Tailwind Directives

In the project's `globals.css` file, add the following directives:

    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    
### 5. Run

To run this project, use:

`npm run dev`
