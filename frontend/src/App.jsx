import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AllProject from "./pages/AllProject";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Mes_projet" element={<AllProject />} />
        <Route path="/About_Me" />
        <Route path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
