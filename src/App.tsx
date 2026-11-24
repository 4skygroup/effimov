import {Routes, Route, } from "react-router-dom";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Footer from "./components/Footer.tsx";
import Navbar from "./components/Navbar.tsx";
import SavoirFaire from "./pages/SavoirFaire.tsx";
import Certifications from "./pages/Certifications.tsx";
import Service1 from "./pages/services/Service1.tsx";
import PageConfortPlusParticulier from "./pages/services/offre1/PageConfortPlusParticulier.tsx";
import PageConfortParticulier from "./pages/services/offre1/PageConfortParticulier.tsx";
import PageStandardParticulier from "./pages/services/offre1/PageStandardParticulier.tsx";
import ServiceList from "./components/ServiceList.tsx";
import {services} from "./data/Services.tsx";
import PageEcoParticulier from "./pages/services/offre1/PageEcoParticulier.tsx";

export default function App() {
  return (
      <>
         <Navbar />
         <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/a-propos/qui-sommes-nous" element={<About />} />
             <Route path="/a-propos/savoir-faire" element={<SavoirFaire />} />
             <Route path="/a-propos/certifications" element={<Certifications />} />
             {/*<Route path="/a-propos/implentatations" element={} />*/}

             <Route path="/services" element={<ServiceList title="Nos services" items={services} />}/>
             <Route path="/services/demenagement-particulier/" element={<Service1 />} />
             <Route path="/demenagement-particulier/offres/confort-plus" element={<PageConfortPlusParticulier />} />
             <Route path="/demenagement-particulier/offres/confort" element={<PageConfortParticulier />} />
             <Route path="/demenagement-particulier/offres/standard" element={<PageStandardParticulier />} />
             <Route path="/demenagement-particulier/offres/eco" element={<PageEcoParticulier />} />

         </Routes>
         <Footer />

      </>
  );
}