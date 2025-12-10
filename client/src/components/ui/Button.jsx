import React from "react";
import { cn } from "../../utils/cn";

// Variante "solid" para acciones principales, "outline" para secundarias
const buttonVariants = {
  primary: "bg-accent text-white hover:bg-accent-hover shadow-sm",
  outline: "border-2 border-accent text-accent hover:bg-accent-light",
  ghost: "text-secondary hover:bg-neutral-bg",
};

const Button = React.forwardRef(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={isLoading}
        className={cn(
          // Clases base (Layout, Tipografía, Transiciones, Focus Ring para accesibilidad)
          "inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",

          // Tamaños
          size === "sm" && "px-3 py-1.5 text-sm",
          size === "md" && "px-6 py-3 text-base",
          size === "lg" && "px-8 py-4 text-lg",

          // Variante de color
          buttonVariants[variant],

          className
        )}
        {...props}
      >
        {isLoading ? (
          <span className="mr-2 animate-spin">⏳</span> // Aquí pondremos un icono luego
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
