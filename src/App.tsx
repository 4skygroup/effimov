import {Routes, Route, } from "react-router-dom";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Footer from "./components/Footer.tsx";

export default function App() {
  return (
      <>

         <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/about" element={<About />} />

         </Routes>
         <Footer />
      </>
  );
}