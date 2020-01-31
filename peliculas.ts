import {Profesional} from "./profesionales"

export class Peliculas {
    titulo: string;
    anyoEstreno: number;
    actores: Profesional[];
    nacionalidad: string;
    director: Profesional;
    guionista: Profesional;
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

    private showActores(){
        for(let i = 0; i < this.actores.length; i++){
            this.actores[i].mostrarProfesional()
        }
    }

    showPropertys(){
        console.log("Título: " + this.titulo + "\n")
        console.log("Año de estreno: " + this.anyoEstreno + "\n")
        console.log("Actores:\n")
        this.showActores()
        console.log("Nacionalidad: " + this.nacionalidad + "\n")
        console.log("Director:\n")
        this.director.mostrarProfesional()
        console.log("Guionista:\n")
        this.guionista.mostrarProfesional()
        console.log("Idioma: " + this.idioma + "\n")
        console.log("Plataforma: " + this.plataforma + "\n")
        console.log("Es MCU: " + this.esMCU + "\n")
        console.log("Nombre del protagonista: " + this.nombreProtagonista + "\n")
        console.log("Productora: " + this.productora + "\n")
        console.log("Distribuidora: " + this.distribuidora + "\n")
    }

    
}