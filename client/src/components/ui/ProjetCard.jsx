import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const ProjectCard = ({
  title = "Proyecto sin título",
  description = "Sin descripción disponible",
  tags = [],
  githubUrl = "#",
  demoUrl = "#",
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group bg-primary border border-neutral-border rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      {/* Contenedor de Imagen */}
      <div className="relative aspect-video bg-neutral-bg overflow-hidden">
        <div className="w-full h-full flex items-center justify-center text-neutral-border group-hover:scale-110 transition-transform duration-500">
          <span className="text-2xl font-bold uppercase tracking-widest opacity-20 text-secondary">
            Preview
          </span>
        </div>

        {/* Overlay con botones de acción */}
        <div className="absolute inset-0 bg-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-primary text-secondary rounded-full hover:bg-accent hover:text-white transition-all transform hover:scale-110 shadow-lg"
            title="Ver Código en GitHub"
          >
            {/* Usamos el componente Github estándar de Lucide */}
            <Github size={20} />
          </a>
          <a
            href={demoUrl}
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-primary text-secondary rounded-full hover:bg-accent hover:text-white transition-all transform hover:scale-110 shadow-lg"
            title="Ver Demo en Vivo"
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>

      {/* Contenido informativo de la tarjeta */}
      <div className="p-6 space-y-4 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-secondary group-hover:text-accent transition-colors">
          {title}
        </h3>

        <p className="text-neutral-text text-sm line-clamp-2 flex-grow">
          {description}
        </p>

        {/* Listado de tecnologías (Tags) */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tags?.map((tag, index) => (
            <span
              key={`${tag}-${index}`}
              className="px-3 py-1 bg-neutral-bg text-neutral-text text-xs font-medium rounded-full border border-neutral-border"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
