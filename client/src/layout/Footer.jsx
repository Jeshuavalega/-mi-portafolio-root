import Container from "../components/ui/Container";
import { Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-secondary text-neutral-text py-12 mt-20">
      <Container className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Derechos de Autor */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Jeshua. Desarrollado con ❤️ y
          React/Tailwind.
        </p>

        {/* Enlaces Sociales */}
        <div className="flex space-x-6">
          <Link
            to="https://github.com/Jeshuavalega"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-border hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </Link>
          <Link
            to="https://linkedin.com/in/Jeshuavalega"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-border hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </Link>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
