import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

import authRoutes from "./src/routes/authRoutes.js";
import productsRoutes from "./src/routes/productsRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

//Configuracion avanzada:
const corsOptions = {
    origin: ['http://localhost:3000', 'https://bkn-talentotech-final.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    optionsSuccessStatus: 204
}
// Configuracion basica
app.use(cors(corsOptions))
app.use(bodyParser.json());

//Rutas
app.use("/auth", authRoutes);
app.use("/products", productsRoutes);

//Middleware de error para rutas no encontradas
app.use((req, res, next) => {
    res.status(404).json({
        error: "Ruta no encontrada"
    })
})

app.use((req, res, next,) => {
    console.error(err.stack);
    res.status(500).json({
        error: "Algo salio mal"
    })
})


app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});