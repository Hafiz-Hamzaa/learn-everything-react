# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration


If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


useEffect : 
React me useEffect wo jagah hai jahan ham “side kaam” karte hain “Jab component render ho jaye, tab kuch extra kaam karao.”

Side kaam matlab?
Data fetch karna
API call karna
Timer lagana
Event listener lagana
Document ka title change karna
Local storage se data lana
Jo kaam React ka UI render karna nahi hota… wo useEffect me hota hai.

1- On Mount	Sirf component load hone par	API fetch, initial setup
2- On Dependency Change	State ya prop change hone par	Filtered API, counter update
3- Cleanup	Component unmount hone par	Timer clear, event listener remove

💡 Shortcut yaad rakho:
[] → Sirf mount (ek dafa) ke liye
[state] → Mount + state change ke liye
No array → har render ke saath effect chalega