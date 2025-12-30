import { ArrowRight, Code } from "lucide-react";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import ProjectCard from "../components/ui/ProjetCard";

const MIS_PROYECTOS = [
  {
    id: 1,
    title: "Plataforma E-commerce",
    description:
      "Una tienda online completa con carrito de compras, gestión de inventario y pasarela de pagos segura.",
    tags: ["React", "Node.js", "Tailwind CSS"],
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: 2,
    title: "Dashboard de Finanzas",
    description:
      "Panel de control interactivo para visualizar ingresos y egresos con gráficos dinámicos en tiempo real.",
    tags: ["React", "Chart.js", "Firebase"],
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: 3,
    title: "App de Clima Pro",
    description:
      "Aplicación meteorológica que utiliza geolocalización para dar pronósticos exactos de los próximos 7 días.",
    tags: ["JavaScript", "OpenWeather API", "CSS Modules"],
    githubUrl: "#",
    demoUrl: "#",
  },
];

const Home = () => {
  // Función para manejar el scroll suave hacia la sección de proyectos
  const scrollToProjects = () => {
    const element = document.getElementById("proyectos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <main className="flex flex-col w-full bg-primary text-secondary">
      {/* SECCIÓN HERO */}
      <section className="min-h-[90vh] flex items-center py-20">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
                Hola, soy <span className="text-accent">Jeshua Valega</span>
              </h1>
              <p className="text-xl text-neutral-text max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Desarrollador Frontend especializado en construir interfaces
                digitales mínimas, accesibles y centradas en el usuario.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button variant="primary" onClick={scrollToProjects}>
                Ver Proyectos
              </Button>
              <Button variant="outline">Descargar CV</Button>
            </div>
          </div>

          <div className="hidden lg:flex lg:col-span-5 justify-center">
            <div className="relative w-80 h-80 bg-neutral-bg rounded-3xl border-2 border-accent/20 flex items-center justify-center shadow-2xl rotate-3">
              <Code size={120} className="text-accent/30" />
            </div>
          </div>
        </Container>
      </section>

      {/* SECCIÓN DE PROYECTOS DESTACADOS */}
      <section id="proyectos" className="py-24 bg-neutral-bg">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-5xl font-bold">
                Proyectos Destacados
              </h2>
              <div className="h-1.5 w-24 bg-accent rounded-full"></div>
              <p className="text-neutral-text text-lg">
                Una muestra de mis capacidades técnicas y creativas.
              </p>
            </div>

            <Button variant="ghost" className="group">
              Explorar Galería Completa
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {MIS_PROYECTOS.map((proyecto, index) => (
              <ProjectCard
                key={index}
                title={proyecto.title}
                description={proyecto.description}
                tags={proyecto.tags}
                githubUrl={proyecto.githubUrl}
                demoUrl={proyecto.demoUrl}
              />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Home;
