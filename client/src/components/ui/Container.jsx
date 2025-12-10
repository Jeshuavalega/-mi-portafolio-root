import { cn } from "../../utils/cn";

const Container = ({ children, className }) => {
  return (
    <div
      className={cn(
        "w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl", // Padding responsive y ancho máximo
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
