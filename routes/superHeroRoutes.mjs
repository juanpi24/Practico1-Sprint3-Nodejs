//=================================
//Rutas de la API para superhéroes
//=================================

import express from 'express';
import {
    obtenerTodosLosSuperheroesController,
    insertarSuperheroeController,
    actualizarSuperheroeController,
    eliminarSuperheroePorIDController,
    eliminarSuperheroePorNombreController
} from '../controllers/superheroesController.mjs';

const router= express.Router();

//1-Agregar un endpoint que al realizarle una peticion GET que nos devuelva todos los superheroes
router.get('/todosheroes', obtenerTodosLosSuperheroesController);


//2-Agregar un endpoint que al realizarle una peticion POST cree e inserte un nuevo superheroe en la base de datos, y nos devuelva el superheroe creado
router.post('/insertarheroes',insertarSuperheroeController);


//3-Agregar un endpoint que al realizarle una peticion PUT actualice un superheroe en la base de datos, y nos devuelva todos el superheroe actualizado
router.put('/actualizarheroes/:id',actualizarSuperheroeController);

//4-Agregar un endpoint que al realizarle una peticion DELETE borre un superheroe por ID en la base de datos, y nos devuelva el superheroe borrado
router.delete('/eliminarheroes/:id',eliminarSuperheroePorIDController);

//5-Agregar un endpoint que al realizarle una peticion DELETE borre un superheroe por Nombre del superheroe en la base de datos, y nos devuelva el superheroe borrado
router.delete('/eliminarnombre/:nombre',eliminarSuperheroePorNombreController);


export default router;