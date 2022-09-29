import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AllProject from "./pages/AllProject";
import Project from "./pages/Project";
import OptionsProject from "./pages/OptionsProject";
import OptionsProfil from "./pages/OptionsProfil";
import AboutMe from "./pages/AboutMe";

import "./App.css";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Mes_projet" element={<AllProject />} />
          <Route path="/About_Me" element={<AboutMe />} />
          <Route path="/projet/:id" element={<Project />} />
          <Route path="/options/project" element={<OptionsProject />} />
          <Route path="/options/profil" element={<OptionsProfil />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
