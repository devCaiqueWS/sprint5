import {} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/App.css";
import Nav from "./componentes/Nav";
import Home from "./routes/Home";
import Footer from "./componentes/Footer";
import Sobre from "./routes/Sobre";
import Projeto from "./routes/Projeto";
import Login from "./routes/Login";
import Contato from "./routes/Contato";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sobre" element={<Sobre/>} />
          <Route path="/Projeto" element={<Projeto />} />
          <Route path="/Contato" element={<Contato />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
