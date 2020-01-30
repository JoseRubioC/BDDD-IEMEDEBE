export class Peliculas {
    titulo: string;
    anyoEstreno: number;
    actores: object;
    nacionalidad: string;
    director: object;
    guionista: object;
    idioma: string;
    plataforma: string;
    esMCU: string;
    nombreProtagonista: string;
    productora: string;
    distribuidora: string;



    constructor(titulo: string, anyoEstreno: number, nacionalidad: string) {
        this.titulo = titulo;
        this.anyoEstreno = anyoEstreno;
        this.nacionalidad = nacionalidad;
    }

    set setActores(actores: object) {
        this.actores = actores;
    }
    set setNacionalidad(nacionalidad: string) {
        this.nacionalidad = nacionalidad;
    }
    set setDirector(director: object) {
        this.director = director;
    }
    set setGuionista(guionista: object) {
        this.guionista = guionista;
    }
    set setIdioma(idioma: string) {
        this.idioma = idioma;
    }
    set setPlataforma(plataforma: string) {
        this.plataforma = plataforma;
    }
    set setEsMCU(esMCU: string) {
        this.esMCU = esMCU;
    }
    set setNombreProtagonista(nombreProtagonista: string) {
        this.nombreProtagonista = nombreProtagonista;
    }
    set setProductora(productora: string) {
        this.productora = productora;
    }
    set setDistribuidora(distribuidora: string) {
        this.distribuidora = distribuidora;
    }

}
let pelicula1: Peliculas;
pelicula1 = new Peliculas("Vengadores", 2012, "Estados Unidos")
let pelicula2: Peliculas;
pelicula2 = new Peliculas("American Beauty", 2000, "Estados unidos")
let pelicula3: Peliculas;
pelicula3 = new Peliculas("Rock'n rolla", 2009, "Reino unido")
let pelicula4: Peliculas;
pelicula4 = new Peliculas("Mistic river", 2003, "Estados unidos")
let pelicula5: Peliculas;
pelicula5 = new Peliculas("Sin perdon ", 1992, "Estados Unidos")
let pelicula6: Peliculas;
pelicula6 = new Peliculas("Terminator", 1985, "Estados unidos")
let pelicula7: Peliculas;
pelicula7 = new Peliculas("Yo , yo mismo e Irene", 1985, "Estados unidos")
let pelicula8: Peliculas;
pelicula8 = new Peliculas("El show de Truman", 1998, "Estados unidos")
let pelicula9: Peliculas;
pelicula9 = new Peliculas("Star wars", 1977, "Una galaxia muy muy lejana")
let pelicula10: Peliculas;
pelicula10 = new Peliculas("Iron man", 2000, "Estados unidos")