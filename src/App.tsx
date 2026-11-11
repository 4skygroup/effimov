import {Routes, Route, } from "react-router-dom";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Footer from "./components/Footer.tsx";
import Navbar from "./components/Navbar.tsx";
import SavoirFaire from "./pages/SavoirFaire.tsx";
import Certifications from "./pages/Certifications.tsx";

export default function App() {
  return (
      <>
          <Navbar />
         <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/a-propos/qui-sommes-nous" element={<About />} />
             <Route path="/a-propos/savoir-faire" element={<SavoirFaire />} />
             <Route path="/a-propos/certifications" element={<Certifications />} />

         </Routes>
         <Footer />
      </>
  );
}