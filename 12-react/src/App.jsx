import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Notfound from "./pages/Notfound";
import Product from "./pages/Product";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>

        <Route path="/product" element={<Product />}>
        <Route path="men" element={<Men/>}></Route>
        <Route path="women" element={<Women/>}></Route>
        </Route>

        <Route path="/courses" element={<Courses/>}></Route>
        <Route path="/courses/:id" element={<CourseDetail/>}/>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<Notfound/>} ></Route>
      </Routes>
    </>
  );
}

export default App;
