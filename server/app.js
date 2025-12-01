import express from "express";
import cors from "cors";
import { PORT } from "./config/env.js";

const app = express();

app.use(cors());
app.use(express.json());

// Ruta de prueba (Health Check)
app.get("/api/health", (req, res) => {
    res.json({
        status: "ok",
        server: "on",
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
