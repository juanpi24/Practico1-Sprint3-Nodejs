//==============================
//Controladores para superhéroes
//==============================

import {
    obtenerTodosLosSuperheroes, 
    insertarSuperheroes, 
    actualizarSuperheroes, 
    eliminarSuperheroesPorID,
    eliminarSuperheroesPorNombre
} from '../services/superheroesService.mjs';

import {renderizarSuperheroe,renderizarListaSuperheroes} from '../views/responsiveView.mjs';

//Obtener todos los superhéroes
 export async function obtenerTodosLosSuperheroesController(req, res) {
    try{
        const superheroe= await obtenerTodosLosSuperheroes();
        const superheroeFormateado= renderizarListaSuperheroes(superheroe);
        res.status(200).json({'Aquí esta la lista de todos los Superhéroes': superheroeFormateado});
    } catch(error){
        res.status(500).send({mensaje: 'Error al obtener los superhéroes', error: error.message});
    }
 }


//Inserta nuevo superhéroe
export async function insertarSuperheroeController(req, res) {
    try {
        // req.body contiene los datos del nuevo superhéroe enviados en la solicitud.
        const documentos = req.body; // El JSON recibido
        const superheroes= await insertarSuperheroes(documentos);
        if (superheroes.length===0){
            return res.status(404).send(
                {mensaje: 'No se inserto nuevo superhéroe'});
        }
        
        res.status(201).json({mensaje:'¡Superhéroe creado con éxito!', Insertados: superheroes});
        
        
    } catch (error) {
        res.status(500).send(
            {mensaje: 'Error al insertar superhéroes', error: error.message});
        }    
}


//Actualizar superhéroe por ID
export async function actualizarSuperheroeController(req, res) {
    try {
         const idHeroe= req.params.id;
         const datosActualizados= req.body;
         const superheroes= await actualizarSuperheroes(idHeroe, datosActualizados);
       
        if (superheroes.matchedCount===0){
            return res.status(404).send(
                {mensaje: 'Nombre del Superhéroe no encontrado'});
        }
        
        res.status(200).json({mensaje:'¡Superhéroe Actualizado con éxito!', Datos: superheroes});
        
    } catch (error) {
        res.status(500).send(
            {mensaje: 'Error al actualizar el superhéroe', error: error.message});
      }        
}

//Eliminar superhéro por ID
export async function eliminarSuperheroePorIDController(req, res) {
    try {
         const idHeroe= req.params.id;
         const superheroes= await eliminarSuperheroesPorID(idHeroe);
       
        if (superheroes.deletedCount===0){
            return res.status(404).send(
                {mensaje: 'Superhéroe no encontrado'});
        }
        
        res.status(200).json({mensaje:'¡Superhéroe eliminado con éxito!', Eliminado: superheroes});
        
    } catch (error) {
        res.status(500).send(
            {mensaje: 'Error al eliminar superhéroes', error: error.message});
      }        
}
        
    
//Eliminar superhéro por Nombre
export async function eliminarSuperheroePorNombreController(req, res) {
    try {
         const nombreHeroe= req.params.nombre;
         const superheroes= await eliminarSuperheroesPorNombre(nombreHeroe);
       
        if (superheroes.deletedCount===0){
            return res.status(404).send(
                {mensaje: 'Superhéroe no encontrado'});
        }
        
        res.status(200).json({mensaje:'¡Superhéroe eliminado con éxito!', Eliminado: superheroes});
        
    } catch (error) {
        res.status(500).send(
            {mensaje: 'Error al eliminar superhéroes', error: error.message});
      }        
}
        
    

