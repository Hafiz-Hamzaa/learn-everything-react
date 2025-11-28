# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Working with Functions : ap jb koi event lgate hai to usme aik fnc bh pass krte hai ab 2 ways ya to ap wahi fnc banai ya alag se banaker just pass krde aik baat agr ap jb fnc pass krte hai to call nh krte qkai agr call krdia to wo chl jaiga.

🔥 React Hooks — Short & Easy Version

👉 Hooks = React ke ready-made helper functions jo tumhe functional component me powerful features use karne dete hain.

useState — UI me data change karwana
UI me koi cheez change ho → uska data useState me rakho.
Use-case:
✔ Counter, input value, toggle, theme change

useEffect — Component chalne ke baad koi kaam karwana
Component render hone ke baad koi side task karna ho.
Use-case:
✔ API fetch, timer, event listener, document title change

useRef — Value store karna bina re-render karaye
Aisi value store karna jo badle lekin UI ko disturb na kare.
Use-case:
✔ Input focus, previous value, timer IDs

useContext — Bina props ke data share karwana
Parent → child → child props bhejne ki tension khatam.
Use-case:
✔ Theme, user login data, language settings, cart data

useReducer — Jab state complex ho jaye
Jab multiple actions hon aur logic zyada ho.
Use-case:
✔ Cart ka add/remove/update
✔ Complex forms
✔ Todo with multiple operations
Redux jesa small version.

useMemo + useCallback ka main idea exactly ye hi hai
→ re-renders ko kam karna
→ performance smooth rakhna
→ unnecessary updates avoid karna