import {Routes, Route, } from "react-router-dom";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Footer from "./components/Footer.tsx";
import Navbar from "./components/Navbar.tsx";
import SavoirFaire from "./pages/SavoirFaire.tsx";
import Certifications from "./pages/Certifications.tsx";
import Service1 from "./pages/services/Service1.tsx";
import Implantatations from "./pages/Implantatations.tsx";
import ConfortPlus from "./pages/services/offre1/ConfortPlus.tsx";
import Confort from "./pages/services/offre1/Confort.tsx";

export default function App() {
  return (
      <>
          <Navbar />
         <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/a-propos/qui-sommes-nous" element={<About />} />
             <Route path="/a-propos/savoir-faire" element={<SavoirFaire />} />
             <Route path="/a-propos/certifications" element={<Certifications />} />
             <Route path="/a-propos/implentatations" element={<Implantatations />} />

             <Route path="/services/service-1" element={<Service1 />} />
             <Route path="/offres/confort-plus" element={<ConfortPlus />} />
             <Route path="/offres/confort" element={<Confort />} />

         </Routes>
         <Footer />
      </>
  );
}