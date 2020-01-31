"use strict";
exports.__esModule = true;
var Peliculas = /** @class */ (function () {
    function Peliculas(titulo, anyoEstreno, nacionalidad) {
        this.titulo = titulo;
        this.anyoEstreno = anyoEstreno;
        this.nacionalidad = nacionalidad;
    }
    Peliculas.prototype.showActores = function () {
        for (var i = 0; i < this.actores.length; i++) {
            this.actores[i].mostrarProfesional();
        }
    };
    Peliculas.prototype.showPropertys = function () {
        console.log("Título: " + this.titulo + "\n");
        console.log("Año de estreno: " + this.anyoEstreno + "\n");
        console.log("Actores:\n");
        this.showActores();
        console.log("Nacionalidad: " + this.nacionalidad + "\n");
        console.log("Director:\n");
        this.director.mostrarProfesional();
        console.log("Guionista:\n");
        this.guionista.mostrarProfesional();
        console.log("Idioma: " + this.idioma + "\n");
        console.log("Plataforma: " + this.plataforma + "\n");
        console.log("Es MCU: " + this.esMCU + "\n");
        console.log("Nombre del protagonista: " + this.nombreProtagonista + "\n");
        console.log("Productora: " + this.productora + "\n");
        console.log("Distribuidora: " + this.distribuidora + "\n");
    };
    return Peliculas;
}());
exports.Peliculas = Peliculas;
