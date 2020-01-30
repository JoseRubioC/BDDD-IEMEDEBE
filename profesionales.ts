export class Profesional {

    nombre:string;
    edad:number;
    sexo:string;
    peso:number;
    altura:number;
    colorPelo:string;
    colorOjos:string;
    raza:string;
    estaRetirado:string;
    nacionalidad:string;
    numeroDeOscars:number;
    profesion:string;

    constructor (nombre:string, edad:number, sexo:string, peso:number, altura:number,colorPelo:string, colorOjos:string, raza:string, estaRetirado:string, nacionalidad:string, numeroDeOscars:number, profesion:string){

        this.nombre = nombre
        this.edad = edad
        this.sexo = sexo
        this.peso = peso
        this.altura = altura
        this.colorPelo = colorPelo
        this.colorOjos = colorOjos
        this.raza = raza
        this.estaRetirado = estaRetirado
        this.nacionalidad = nacionalidad
        this.numeroDeOscars = numeroDeOscars
        this.profesion = profesion
    }
}