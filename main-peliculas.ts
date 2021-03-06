import { Profesional } from "./profesionales"
import { Peliculas } from "./peliculas"
import { Iemedebe } from "./iemedebe";

let actor1: Profesional;
actor1 = new Profesional("Brad Pitt", 56, "Masculino", 78, 180, "rubio", "azules", "caucásico", "no", "estadounidense", 1, "actor")
let actor2: Profesional;
actor2 = new Profesional("Kevin Spacey", 60, "Masculino", 77, 176, "moreno", "castaños", "caucásico", "no", "estadounidense", 2, "actor")
let actor3: Profesional;
actor3 = new Profesional("Robert De Niro", 76, "Masculino", 85, 177, "cano", "negros", "caucásico", "no", "estadounidense", 2, "actor")
let actor4: Profesional;
actor4 = new Profesional("Al Pacino", 709, "Masculino", 70, 168, "cano", "azul", "caucásico", "no", "estadounidense", 1, "actor")
let actor5: Profesional;
actor5 = new Profesional("Sean Penn", 59, "Masculino", 67, 173, "marron", "azules", "caucásico", "no", "estadounidense", 2, "actor")
let actor6: Profesional;
actor6 = new Profesional("Ellen Page", 32, "femenino", 56, 160, "rubio", "azules", "caucásica", "no", "canadiense", 0, "actriz")
let director1: Profesional;
director1 = new Profesional("Clint Eastwood", 89, "masculino", 85, 193, "cano", "azules", "caucásico", "no", "estadounidense", 5, "director")
let director2: Profesional;
director2 = new Profesional("David Fincher", 57, "masculino", 85, 193, "oscuro", "azules", "caucásico", "no", "estadounidense", 0, "director")
let director3: Profesional;
director3 = new Profesional("Francis Ford Coppola", 80, "masculino", 85, 160, "cano", "marrones", "caucásico", "no", "estadounidense", 0, "director")
let director4: Profesional;
director4 = new Profesional("Martin Scorsese", 77, "masculino", 80, 172, "cano", "azules", "caucásico", "no", "estadounidense", 1, "director")

let arrayActores: Profesional[] = [actor1, actor2, actor3, actor4, actor5, actor6]

let pelicula1: Peliculas;
pelicula1 = new Peliculas("Vengadores", 2012, "Estados Unidos")
pelicula1.director = director2
pelicula1.actores = arrayActores
pelicula1.guionista = actor6
pelicula1.idioma = "Ingles"
pelicula1.plataforma = "Cine"
pelicula1.esMCU = "Si"
pelicula1.nombreProtagonista = "Iron Man "
pelicula1.productora = "Disney "
pelicula1.distribuidora = "Disney "

// pelicula1.showPropertys()

let pelicula2: Peliculas;
pelicula2 = new Peliculas("American Beauty", 2000, "Estados unidos")
pelicula2.director = director3
pelicula2.actores = arrayActores
pelicula2.guionista = director4
pelicula2.idioma = " Ingles"
pelicula2.plataforma = " Cine"
pelicula2.esMCU = " no"
pelicula2.nombreProtagonista = " Lester Burnham"
pelicula2.productora = "Dream Works"
pelicula2.distribuidora = "Dream Works"

let pelicula3: Peliculas;
pelicula3 = new Peliculas("Rock'n rolla", 2009, "Reino unido")
pelicula3.director = director1
pelicula3.actores = arrayActores
pelicula3.guionista = director2
pelicula3.idioma = "Inges"
pelicula3.plataforma = "Cine"
pelicula3.esMCU = "No"
pelicula3.nombreProtagonista = "One Two"
pelicula3.productora = "Dark Castle Entertainment"
pelicula3.distribuidora = "Dark Castle Entertainment"

let pelicula4: Peliculas;
pelicula4 = new Peliculas("Mistic river", 2003, "Estados unidos")
pelicula4.director = director3
pelicula4.actores = arrayActores
pelicula4.guionista = actor4
pelicula4.idioma = "Ingles"
pelicula4.plataforma = "Cine"
pelicula4.esMCU = "no"
pelicula4.nombreProtagonista = "Jimmy Markum"
pelicula4.productora = "Village Roadshow Pictures"
pelicula4.distribuidora = "Warner Bros."

let pelicula5: Peliculas;
pelicula5 = new Peliculas("Sin perdon ", 1992, "Estados Unidos")
pelicula5.director = director2
pelicula5.actores = arrayActores
pelicula5.guionista = director2
pelicula5.idioma = "Ingles"
pelicula5.plataforma = "Cine"
pelicula5.esMCU = "No"
pelicula5.nombreProtagonista = "Michael Winner."
pelicula5.productora = "Malpaso Productions"
pelicula5.distribuidora = "Malpaso Productions"

let pelicula6: Peliculas;
pelicula6 = new Peliculas("Terminator", 1985, "Estados unidos")
pelicula6.director = director4
pelicula6.actores = arrayActores
pelicula6.guionista = director1
pelicula6.idioma = "Ingles"
pelicula6.plataforma = "Cine"
pelicula6.esMCU = "no"
pelicula6.nombreProtagonista = "Hasta la vista Baby"
pelicula6.productora = "Hemdale Film"
pelicula6.distribuidora = "Metro Goldwyn Mayer"

let pelicula7: Peliculas;
pelicula7 = new Peliculas("Yo , yo mismo e Irene", 1985, "Estados unidos")
pelicula7.director = director4
pelicula7.actores = arrayActores
pelicula7.guionista = director4
pelicula7.idioma = "Ingles"
pelicula7.plataforma = "Cine"
pelicula7.esMCU = " No"
pelicula7.nombreProtagonista = "Charlie"
pelicula7.productora = "20th Century Studios"
pelicula7.distribuidora = "	Paramount Pictures"

let pelicula8: Peliculas;
pelicula8 = new Peliculas("El show de Truman", 1998, "Estados unidos")
pelicula8.director = director4
pelicula8.actores = arrayActores
pelicula8.guionista = director4
pelicula8.idioma = "ingles"
pelicula8.plataforma = "Cine"
pelicula8.esMCU = "no"
pelicula8.nombreProtagonista = "Truman"
pelicula8.productora = "Scott Rudin Productions"
pelicula8.distribuidora = "Paramount Pictures"

let pelicula9: Peliculas;
pelicula9 = new Peliculas("Star wars", 1977, "Una galaxia muy muy lejana")
pelicula9.director = director4
pelicula9.actores = arrayActores
pelicula9.guionista = director3
pelicula9.idioma = "Ingles"
pelicula9.plataforma = "Cine"
pelicula9.esMCU = "No "
pelicula9.nombreProtagonista = "Luke Skywalker"
pelicula9.productora = "LucastFilm"
pelicula9.distribuidora = "RSO Records"

let pelicula10: Peliculas;
pelicula10 = new Peliculas("Iron man", 2000, "Estados unidos")
pelicula10.director = director1
pelicula10.actores = arrayActores
pelicula10.guionista = director1
pelicula10.idioma = "Ingles"
pelicula10.plataforma = "Cine"
pelicula10.esMCU = "Si"
pelicula10.nombreProtagonista = "Howard Stark"
pelicula10.productora = "Disney"
pelicula10.distribuidora = "Disney"

let arrayPeliculas:Peliculas[] = [pelicula1, pelicula2, pelicula3, pelicula4, pelicula5, pelicula6, pelicula7, pelicula8, pelicula9, pelicula10]

let iemedebe1: Iemedebe

iemedebe1 = new Iemedebe(arrayPeliculas)

// iemedebe1.showIemedebe()

let myJSONIemedebe = JSON.stringify(iemedebe1)

// console.log(myJSONIemedebe)

const fs = require('fs');

fs.writeFileSync('imdbBBDD.json', myJSONIemedebe,'utf8');


