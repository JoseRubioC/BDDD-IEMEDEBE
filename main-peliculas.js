"use strict";
exports.__esModule = true;
var profesionales_1 = require("./profesionales");
var peliculas_1 = require("./peliculas");
var iemedebe_1 = require("./iemedebe");
var actor1;
actor1 = new profesionales_1.Profesional("Brad Pitt", 56, "Masculino", 78, 180, "rubio", "azules", "caucásico", "no", "estadounidense", 1, "actor");
var actor2;
actor2 = new profesionales_1.Profesional("Kevin Spacey", 60, "Masculino", 77, 176, "moreno", "castaños", "caucásico", "no", "estadounidense", 2, "actor");
var actor3;
actor3 = new profesionales_1.Profesional("Robert De Niro", 76, "Masculino", 85, 177, "cano", "negros", "caucásico", "no", "estadounidense", 2, "actor");
var actor4;
actor4 = new profesionales_1.Profesional("Al Pacino", 709, "Masculino", 70, 168, "cano", "azul", "caucásico", "no", "estadounidense", 1, "actor");
var actor5;
actor5 = new profesionales_1.Profesional("Sean Penn", 59, "Masculino", 67, 173, "marron", "azules", "caucásico", "no", "estadounidense", 2, "actor");
var actor6;
actor6 = new profesionales_1.Profesional("Ellen Page", 32, "femenino", 56, 160, "rubio", "azules", "caucásica", "no", "canadiense", 0, "actriz");
var director1;
director1 = new profesionales_1.Profesional("Clint Eastwood", 89, "masculino", 85, 193, "cano", "azules", "caucásico", "no", "estadounidense", 5, "director");
var director2;
director2 = new profesionales_1.Profesional("David Fincher", 57, "masculino", 85, 193, "oscuro", "azules", "caucásico", "no", "estadounidense", 0, "director");
var director3;
director3 = new profesionales_1.Profesional("Francis Ford Coppola", 80, "masculino", 85, 160, "cano", "marrones", "caucásico", "no", "estadounidense", 0, "director");
var director4;
director4 = new profesionales_1.Profesional("Martin Scorsese", 77, "masculino", 80, 172, "cano", "azules", "caucásico", "no", "estadounidense", 1, "director");
var arrayActores = [actor1, actor2, actor3, actor4, actor5, actor6];
var pelicula1;
pelicula1 = new peliculas_1.Peliculas("Vengadores", 2012, "Estados Unidos");
pelicula1.director = director2;
pelicula1.actores = arrayActores;
pelicula1.guionista = actor6;
pelicula1.idioma = "Ingles";
pelicula1.plataforma = "Cine";
pelicula1.esMCU = "Si";
pelicula1.nombreProtagonista = "Iron Man ";
pelicula1.productora = "Disney ";
pelicula1.distribuidora = "Disney ";
// pelicula1.showPropertys()
var pelicula2;
pelicula2 = new peliculas_1.Peliculas("American Beauty", 2000, "Estados unidos");
pelicula2.director = director3;
pelicula2.actores = arrayActores;
pelicula2.guionista = director4;
pelicula2.idioma = " Ingles";
pelicula2.plataforma = " Cine";
pelicula2.esMCU = " no";
pelicula2.nombreProtagonista = " Lester Burnham";
pelicula2.productora = "Dream Works";
pelicula2.distribuidora = "Dream Works";
var pelicula3;
pelicula3 = new peliculas_1.Peliculas("Rock'n rolla", 2009, "Reino unido");
pelicula3.director = director1;
pelicula3.actores = arrayActores;
pelicula3.guionista = director2;
pelicula3.idioma = "Inges";
pelicula3.plataforma = "Cine";
pelicula3.esMCU = "No";
pelicula3.nombreProtagonista = "One Two";
pelicula3.productora = "Dark Castle Entertainment";
pelicula3.distribuidora = "Dark Castle Entertainment";
var pelicula4;
pelicula4 = new peliculas_1.Peliculas("Mistic river", 2003, "Estados unidos");
pelicula4.director = director3;
pelicula4.actores = arrayActores;
pelicula4.guionista = actor4;
pelicula4.idioma = "Ingles";
pelicula4.plataforma = "Cine";
pelicula4.esMCU = "no";
pelicula4.nombreProtagonista = "Jimmy Markum";
pelicula4.productora = "Village Roadshow Pictures";
pelicula4.distribuidora = "Warner Bros.";
var pelicula5;
pelicula5 = new peliculas_1.Peliculas("Sin perdon ", 1992, "Estados Unidos");
pelicula5.director = director2;
pelicula5.actores = arrayActores;
pelicula5.guionista = director2;
pelicula5.idioma = "Ingles";
pelicula5.plataforma = "Cine";
pelicula5.esMCU = "No";
pelicula5.nombreProtagonista = "Michael Winner.";
pelicula5.productora = "Malpaso Productions";
pelicula5.distribuidora = "Malpaso Productions";
var pelicula6;
pelicula6 = new peliculas_1.Peliculas("Terminator", 1985, "Estados unidos");
pelicula6.director = director4;
pelicula6.actores = arrayActores;
pelicula6.guionista = director1;
pelicula6.idioma = "Ingles";
pelicula6.plataforma = "Cine";
pelicula6.esMCU = "no";
pelicula6.nombreProtagonista = "Hasta la vista Baby";
pelicula6.productora = "Hemdale Film";
pelicula6.distribuidora = "Metro Goldwyn Mayer";
var pelicula7;
pelicula7 = new peliculas_1.Peliculas("Yo , yo mismo e Irene", 1985, "Estados unidos");
pelicula7.director = director4;
pelicula7.actores = arrayActores;
pelicula7.guionista = director4;
pelicula7.idioma = "Ingles";
pelicula7.plataforma = "Cine";
pelicula7.esMCU = " No";
pelicula7.nombreProtagonista = "Charlie";
pelicula7.productora = "20th Century Studios";
pelicula7.distribuidora = "	Paramount Pictures";
var pelicula8;
pelicula8 = new peliculas_1.Peliculas("El show de Truman", 1998, "Estados unidos");
pelicula8.director = director4;
pelicula8.actores = arrayActores;
pelicula8.guionista = director4;
pelicula8.idioma = "ingles";
pelicula8.plataforma = "Cine";
pelicula8.esMCU = "no";
pelicula8.nombreProtagonista = "Truman";
pelicula8.productora = "Scott Rudin Productions";
pelicula8.distribuidora = "Paramount Pictures";
var pelicula9;
pelicula9 = new peliculas_1.Peliculas("Star wars", 1977, "Una galaxia muy muy lejana");
pelicula9.director = director4;
pelicula9.actores = arrayActores;
pelicula9.guionista = director3;
pelicula9.idioma = "Ingles";
pelicula9.plataforma = "Cine";
pelicula9.esMCU = "No ";
pelicula9.nombreProtagonista = "Luke Skywalker";
pelicula9.productora = "LucastFilm";
pelicula9.distribuidora = "RSO Records";
var pelicula10;
pelicula10 = new peliculas_1.Peliculas("Iron man", 2000, "Estados unidos");
pelicula10.director = director1;
pelicula10.actores = arrayActores;
pelicula10.guionista = director1;
pelicula10.idioma = "Ingles";
pelicula10.plataforma = "Cine";
pelicula10.esMCU = "Si";
pelicula10.nombreProtagonista = "Howard Stark";
pelicula10.productora = "Disney";
pelicula10.distribuidora = "Disney";
var arrayPeliculas = [pelicula1, pelicula2, pelicula3, pelicula4, pelicula5, pelicula6, pelicula7, pelicula8, pelicula9, pelicula10];
var iemedebe1;
iemedebe1 = new iemedebe_1.Iemedebe(arrayPeliculas);
iemedebe1.showIemedebe();
