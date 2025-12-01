import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Cargando...");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/health`)
      .then((res) => res.json())
      .then((data) => setMessage(data.server))
      .catch(() => setMessage("Error al conectar"));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-3xl font-bold">
      {message === "on" ? "Server ON" : message}
    </div>
  );
}

export default App;
