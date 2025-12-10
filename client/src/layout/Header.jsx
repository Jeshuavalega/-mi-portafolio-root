import Container from "../components/ui/Container";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { name: "Inicio", path: "/" },
  { name: "Proyectos", path: "/projects" },
  { name: "Sobre Mí", path: "/about" },
  { name: "Contacto", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-primary z-50 shadow-md">
      {/* CAMBIO CLAVE: Aumentar el padding vertical a py-6 */}
      <Container className="flex justify-between items-center py-6">
        {/* Logo/Nombre */}
        <Link
          to="/"
          className="text-xl font-bold text-secondary tracking-wider hover:text-accent transition-colors"
          aria-label="Volver a la página de inicio"
        >
          Jeshua Valega.
        </Link>

        {/* Desktop Menu */}
        <nav
          className="hidden md:flex space-x-8"
          aria-label="Navegación principal"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `font-medium text-base transition-colors hover:text-accent ${
                  isActive
                    ? "text-accent border-b-2 border-accent"
                    : "text-secondary"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-secondary p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <nav
          className="md:hidden absolute top-full w-full bg-neutral-bg shadow-lg py-2"
          aria-label="Menú móvil"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2 text-lg font-medium transition-colors ${
                  isActive
                    ? "text-accent bg-accent-light"
                    : "text-secondary hover:bg-neutral-border"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
