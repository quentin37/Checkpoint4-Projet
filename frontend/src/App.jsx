import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Nav from "./components/Nav";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" />
        <Route path="/Mes_projet" />
        <Route path="/" />
        <Route path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
