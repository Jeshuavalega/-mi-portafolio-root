import Header from "./Header";
import Footer from "./Footer";
// ¡ESTA IMPORTACIÓN ES ESENCIAL! Permite que el Layout sepa dónde inyectar la página activa.
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* El <main> define la región principal del contenido.
        pt-24 crea el espacio necesario para que el Header fijo no oculte el contenido.
      */}
      <main className="flex-grow pt-24">
        {/* <Outlet /> es el componente de React Router que renderiza el 
          componente anidado correspondiente a la URL actual (ej: <Home />, <About />, etc.).
        */}
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
