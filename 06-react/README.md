# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Form Handling in React : Jb bh form ka data submit hota hai uska default behaviour ye hota hai kai page reload hota hai ham iska behaviour chnage krkste hai handle krkste hai preventDefault se.

React me Two way Binding : ham direclty inout ki value nh type krkste hame react ko bolna parta hai pehle ham useState banate hai jisme title ki initial value = "" rkh dete hai or iski value value kai attrbute me pass krt hai then setTitle me onChnage event perform krte hai jo chnage hoi input me wo title ma jate hai and then title ki value update hoker input per ajati hai

Two-way binding = Input aur React state ka sync — user type kare → state update → UI reflect.