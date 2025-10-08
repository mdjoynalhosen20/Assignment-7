1. What is JSX, and why is it used?
   Answer: JSX (JavaScript XML) is a syntax extension for JavaScript used with React to describe what the UI should look like. It allows you to write HTML-like code             inside JavaScript.
   Why it’s used:
    It makes the code more readable and expressive.
    It allows embedding JavaScript expressions inside HTML-like syntax.

2.  What is the difference between State and Props?

 3. What is the useState hook, and how does it work?
    Answer: useState is a React Hook that lets you add state to functional components.
    How it works:
    state is the current value.
    setState is a function used to update it.

4. How can you share state between components in React?
  Answer:There are several ways to share state:
        Lifting state up – Move the shared state to a common parent component and pass it down as props.
        Context API – Use React’s Context to share data globally without prop drilling.
        State management libraries – Use tools like Redux, Zustand, or Recoil for complex applications.

5. How is event handling done in React?
  Answer: React handles events similarly to DOM events but with synthetic events for cross-browser compatibility.
        Key differences:
   You usually define the handler in your component.
   














# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
