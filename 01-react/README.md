# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

//------------ Notes about React JS
What is React JS : It is JS Library used to create complex UI and It develop by Meta(Facebook) 2013.
Why React JS (SPA) : JS me bohat masle hote thai sbse bara masla DOM ka jb bh ham apni website me koi bh cheez update krte hai to pori websit rerender hoti hai jis se UX khrab hota hai but React JS me SPA banate hai agr koi specific feature update kia hai to utna hi part update hoga thats why React JS is most popular.JS me complex UI handle krna bohat masla hojata hai.JS is imperative mtlb sb kuch scract se btana parta hai but React JS is Declarative just desired state btao.

Component Archeitecture : component archeitecture mtlb ham apne website ko chunks me tordete hai chotte chotte components me isko ham reuse bh krkste hai.

Import/Export : ham kisi bh component ko export and import krskte hai
2 Types of Export : Default Export and Named Export 
Default Export : isme ham aik hi cheez ko export krkste hai : import user from "./app.jsx"
Named export : multiple export krkste hai in a single file import {user,age} from "./app.jsx"

Real DOM VS Virtual DOM : Real Dom mtlb HTML ka Tree like structure isme bara masla tha jb bh sif aik cheez ko chnage krna parta tha to hota kia tha pora DOM re-render hota tha but Yaha per Aya React ka apna Virtual Dom React ki zimedari hoti thi DOM ko control krne ki Virtual Dom mtlb ye Real Dom ki copy bnaat hai phr agr koi cheez change krte jese btn kai click per image change krna to ye Real Dom se compare krta tha or utna hi part update krta tha faltu me baqi cheez koi cheeez re render nh hoti thi.

JSX: means HTML + JS Combination JS me aik html create krna bara wo hota tha yaha per ham direct html create krlete hai but ye JSX html exactly hota nh hai us jesa hota at the end ye sb js me hi convert hota hai. 

Setup React Project with Vite : Vite aik bundler hai aik tool hai jiskai zariye ham folder structure banate hai pehle npm create app use hota tha but ajkl vite use hota hai iska faida hai bohat HOT Reloading ka hota hai 
create a project using : npm create vite or npm create vite@lastest.

Understand Project Structure in a React.
🔥 Fragments Kyun Important Hain?
JSX me multiple elements return karne ki permission milti hai
Extra <div> nahi add hota
Clean & semantic HTML
Performance thoda better hota hai (no extra DOM node)


⭐ Short Summary about Props
Props = parent → child data
Read-only (child cannot modify)
Unidirectional data flow
Strings, numbers, arrays, objects, functions sab pass ho sakte hain
Best practice = destructuring
JSX me {} se JS expressions pass karte hain