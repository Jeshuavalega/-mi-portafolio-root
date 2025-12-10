import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MainLayout from "./layout/MainLayout";

function App() {
  const [serverStatus, setServerStatus] = useState("Cargando...");

  useEffect(() => {
    const APPI_URL = import.meta.env.VITE_API_URL;

    fetch(`${APPI_URL}/health`)
      .then((res) => res.json())
      .then((data) => {
        setServerStatus(
          `Server status: ${data.server} | Status: ${data.status}`
        );
      })
      .catch((error) => {
        setServerStatus("Error al conectar");
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Definimos una sola ruta principal para el Layout */}
        <Route element={<MainLayout />}>
          {/* Todas las rutas anidadas usarán el MainLayout */}
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
