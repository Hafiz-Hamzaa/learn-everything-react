# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


React Router DOM Basics

--->> react router dom multiple router deta hai :
* Browser Router isme sb kuch client based chlta hai mtlb Brwosing me routing krte hai
* Hash Router  #
* Staic Router used in NextJS
* Memory Router 

1- install react router library
2- import {BrowserRouter} from 'react-router-dom' in main.jsx and seond wrap App component in BrowserRouter .

-- Now creating a Routes
1- import {Routes} from react-router-dom in App.jsx me
2- wrap all routes in <Routes><Route path = '' element = {<Home/>}></Route></Routes>
3- Use Link tag insted of anchor tag 