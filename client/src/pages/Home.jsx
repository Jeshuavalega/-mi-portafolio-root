import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

const Home = () => {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-primary">
      <Container className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-secondary">
          Hola, soy
          <span className="text-accent"> Jeshua Valega</span>
        </h1>
        <p className="text-neutral-text text-lg max-w-2xl mx-auto">
          Diseñando experiencias digitales limpias y accesibles.
        </p>

        <div className="flex gap-4 justify-center mt-8">
          <Button variant="primary">Ver Proyectos</Button>
          <Button variant="outline">Contactar</Button>
        </div>
      </Container>
    </main>
  );
};

export default Home;
