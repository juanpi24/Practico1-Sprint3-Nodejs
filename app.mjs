//==================================
//Archivo principal de la aplicación
//==================================

import express from 'express';
import {connectDB} from './config/dbConfig.mjs';
import superHeroRoutes from './routes/superHeroRoutes.mjs';

const app= express();
// Usa el puerto de la variable de entorno o 3001 por defecto
const PORT= process.env.PORT || 3005;

//Middleare global para registrar solicitudes
const loggerMiddleware= (req, res, next)=>{
    console.log(`Solicitud recibida: ${req.method} ${req.url}`);
    next(); //pasa el control al siguiente middleware o ruta
}

app.use(loggerMiddleware);


//Middleare para parsear JSON
app.use(express.json());

//Conexión a MongoDB
connectDB();

//Configuración de rutas
app.use('/api',superHeroRoutes);

//Ruta principal
app.get('/', function (req, res) {
  res.send('¡Curso de Nodejs  2026 - Sprint 3 Trabajo Práctico 1!');
});

//Manejo de errores para rutas no encontradas
app.use((req,res)=>{
    res.status(404).send({mensaje: "¡Ruta no encontrada!"});
});

//Iniciar el servidor
app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});




