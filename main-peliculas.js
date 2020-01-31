"use strict";
exports.__esModule = true;
var profesionales_1 = require("./profesionales");
var peliculas_1 = require("./peliculas");
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
pelicula1.showPropertys();
// let pelicula2: Peliculas;
// pelicula2 = new Peliculas("American Beauty", 2000, "Estados unidos")
// pelicula2.director = director3.nombre
// pelicula2.actores = actor2, actor1
// pelicula2.guionista = director4
// pelicula2.idioma = " Ingles"
// pelicula2.plataforma = " Cine"
// pelicula2.esMCU = " no"
// pelicula2.nombreProtagonista = " Lester Burnham"
// pelicula2.productora = "Dream Works"
// pelicula2.distribuidora = "Dream Works"
// let pelicula3: Peliculas;
// pelicula3 = new Peliculas("Rock'n rolla", 2009, "Reino unido")
// pelicula3.director = director1
// pelicula3.actores = actor3
// pelicula3.guionista = director2
// pelicula3.idioma = "Inges"
// pelicula3.plataforma = "Cine"
// pelicula3.esMCU = "No"
// pelicula3.nombreProtagonista = "One Two"
// pelicula3.productora = "Dark Castle Entertainment"
// pelicula3.distribuidora = "Dark Castle Entertainment"
// let pelicula4: Peliculas;
// pelicula4 = new Peliculas("Mistic river", 2003, "Estados unidos")
// pelicula4.director = director3
// pelicula4.actores = actor2
// pelicula4.guionista = actor4
// pelicula4.idioma = "Ingles"
// pelicula4.plataforma = "Cine"
// pelicula4.esMCU = "no"
// pelicula4.nombreProtagonista = "Jimmy Markum"
// pelicula4.productora = "Village Roadshow Pictures"
// pelicula4.distribuidora = "Warner Bros."
// let pelicula5: Peliculas;
// pelicula5 = new Peliculas("Sin perdon ", 1992, "Estados Unidos")
// pelicula5.director = director2
// pelicula5.actores = actor6
// pelicula5.guionista = director2
// pelicula5.idioma = "Ingles"
// pelicula5.plataforma = "Cine"
// pelicula5.esMCU = "No"
// pelicula5.nombreProtagonista = "Michael Winner."
// pelicula5.productora = "Malpaso Productions"
// pelicula5.distribuidora = "Malpaso Productions"
// let pelicula6: Peliculas;
// pelicula6 = new Peliculas("Terminator", 1985, "Estados unidos")
// pelicula6.director = director4
// pelicula6.actores = director1
// pelicula6.guionista = director1
// pelicula6.idioma = "Ingles"
// pelicula6.plataforma = "Cine"
// pelicula6.esMCU = "no"
// pelicula6.nombreProtagonista = "Hasta la vista Baby"
// pelicula6.productora = "Hemdale Film"
// pelicula6.distribuidora = "Metro Goldwyn Mayer"
// let pelicula7: Peliculas;
// pelicula7 = new Peliculas("Yo , yo mismo e Irene", 1985, "Estados unidos")
// pelicula7.director = director4
// pelicula7.actores = actor3
// pelicula7.guionista = director4
// pelicula7.idioma = "Ingles"
// pelicula7.plataforma = "Cine"
// pelicula7.esMCU = " No"
// pelicula7.nombreProtagonista = "Charlie"
// pelicula7.productora = "20th Century Studios"
// pelicula7.distribuidora = "	Paramount Pictures"
// let pelicula8: Peliculas;
// pelicula8 = new Peliculas("El show de Truman", 1998, "Estados unidos")
// pelicula8.director = director4
// pelicula8.actores = actor2
// pelicula8.guionista = director4
// pelicula8.idioma = "ingles"
// pelicula8.plataforma = "Cine"
// pelicula8.esMCU = "no"
// pelicula8.nombreProtagonista = "Truman"
// pelicula8.productora = "Scott Rudin Productions"
// pelicula8.distribuidora = "Paramount Pictures"
// let pelicula9: Peliculas;
// pelicula9 = new Peliculas("Star wars", 1977, "Una galaxia muy muy lejana")
// pelicula9.director = director4
// pelicula9.actores = actor1
// pelicula9.guionista = director3
// pelicula9.idioma = "Ingles"
// pelicula9.plataforma = "Cine"
// pelicula9.esMCU = "No "
// pelicula9.nombreProtagonista = "Luke Skywalker"
// pelicula9.productora = "LucastFilm"
// pelicula9.distribuidora = "RSO Records"
// let pelicula10: Peliculas;
// pelicula10 = new Peliculas("Iron man", 2000, "Estados unidos")
// pelicula10.director = director1
// pelicula10.actores = actor3
// pelicula10.guionista = director1
// pelicula10.idioma = "Ingles"
// pelicula10.plataforma = "Cine"
// pelicula10.esMCU = "Si"
// pelicula10.nombreProtagonista = "Howard Stark"
// pelicula10.productora = "Disney"
// pelicula10.distribuidora = "Disney"
