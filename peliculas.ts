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
