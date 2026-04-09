//==================================================================
//Capa de presentación - Funciones para mostrar datos de superhéroes
//==================================================================

export function renderizarSuperheroe(superheroe){
    return{
        Nombre: superheroe.nombreSuperHeroe,
        "Nombre Real": superheroe.nombreReal,
        Edad: superheroe.edad,
        "Planeta de Orígen": superheroe.planetaOrigen,
        Debilidad: superheroe.debilidad,
        Poderes: superheroe.poderes,
        Aliados: superheroe.aliados,
        Enemigos: superheroe.enemigos,
        Creador: superheroe.Creador
    };
}

export function renderizarListaSuperheroes(superheroes){
    return superheroes.map(superheroe=> renderizarSuperheroe(superheroe));
}