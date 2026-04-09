//=======================================
//Lógica de negocio - Servicios SuperHero
//=======================================

import SuperHeroRepository from '../repositories/SuperHeroRepository.mjs';

//Obtener todos los superhéroes
export async function obtenerTodosLosSuperheroes() {
    return await SuperHeroRepository.obtenerTodos();
}

//Insertar nuevo superheroe
export async function insertarSuperheroes(documentos) {
    return await SuperHeroRepository.insertarSuperheroes(documentos);
}

//Actualizar superhéroe por ID
export async function actualizarSuperheroes(idHeroe,datosActualizados) {
    return await SuperHeroRepository.actualizarSuperheroes(idHeroe,datosActualizados);
}

//Eliminar superhéroe por ID
export async function eliminarSuperheroesPorID(idHeroe) {
    return await SuperHeroRepository.eliminarSuperheroesPorID(idHeroe);
}

//Eliminar superhéroe por Nombre
export async function eliminarSuperheroesPorNombre(nombreHeroe) {
    return await SuperHeroRepository.eliminarSuperheroesPorNombre(nombreHeroe);
}