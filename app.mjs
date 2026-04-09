//==================================
//Archivo principal de la aplicación
//==================================

import express from 'express';
import {connectDB} from './config/dbConfig.mjs';
import superHeroRoutes from './routes/superHeroRoutes.mjs';

const app= express();
// Usa el puerto de la variable de entorno o 3001 por defecto
const PORT= process.env.PORT || 3005;

//Middleare para parsear JSON
app.use(express.json());

//Conexión a MongoDB
connectDB();

//Configuración de rutas
app.use('/api',superHeroRoutes);

//Ruta principal
app.get('/', function (req, res) {
  res.send('¡Curso de Nodejs  2026 - Sprint 2 Trabajo Práctico 3!');
});

//Manejo de errores para rutas no encontradas
app.use((req,res)=>{
    res.status(404).send({mensaje: "¡Ruta no encontrada!"});
});

//Iniciar el servidor
app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});




