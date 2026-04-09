import SuperHero from '../models/SuperHero.mjs';
import IRepository from './IRepository.mjs';

class SuperHeroRepository extends IRepository {

    //Obtener todos los superhéroes
    async obtenerTodos() {
        return await SuperHero.find();
    }

   //Insertar nuevo superheroe
    async insertarSuperheroes(documentos) {
    // inserta múltiples documentos en una colección simultáneamente
        return await SuperHero.insertMany(documentos);
    }


   //Actualizar superhéroe por ID
    async actualizarSuperheroes(idHeroe,datosActualizados) {
        // El tercer parámetro { new: true } asegura que devuelva el documento actualizado
        return await SuperHero.findByIdAndUpdate(
            idHeroe, 
            datosActualizados, 
            { new: true }
    );
    }

   //Eliminar superhéroe por ID
    async eliminarSuperheroesPorID(idHeroe) {
        return await SuperHero.findByIdAndDelete(idHeroe);
    }

    //Eliminar superhéroe por Nombre
    async eliminarSuperheroesPorNombre(nombreHeroe) {
        return await SuperHero.findOneAndDelete({ nombreSuperHeroe: nombreHeroe });
    }
}

export default new SuperHeroRepository();