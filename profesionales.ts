export class Profesional {

    nombre: string;
    edad: number;
    sexo: string;
    peso: number;
    altura: number;
    colorPelo: string;
    colorOjos: string;
    raza: string;
    estaRetirado: string;
    nacionalidad: string;
    numeroDeOscars: number;
    profesion: string;

    constructor(nombre: string, edad: number, sexo: string, peso: number, altura: number, colorPelo: string, colorOjos: string, raza: string, estaRetirado: string, nacionalidad: string, numeroDeOscars: number, profesion: string) {

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
    mostrarProfesional() {
        console.log("El nombre es: " + this.nombre + "\n" + "La edad es: " + this.edad + "\n")
        console.log("La edad es: " + this.edad + "\n")
        console.log("El sexo es: " + this.sexo + "\n")
        console.log("El peso es: " + this.peso + "\n")
        console.log("La altura  es: " + this.altura + "\n")
        console.log("El color de pelo es: " + this.colorPelo + "\n")
        console.log("El color de ojos es: " + this.colorOjos + "\n")
        console.log("Su raza es la: " + this.raza + "\n")
        console.log("Esta persona se encuentra retirado: " + this.estaRetirado + "\n")
        console.log("Su nacionalidad es : " + this.nacionalidad + "\n")
        console.log("El numero de Oscars es: " + this.numeroDeOscars + "\n")
        console.log("Su profresion es: " + this.profesion + "\n")


    }
}

