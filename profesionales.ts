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
        console.log("El nombre es: " + this.nombre + "\n" + "La edad es: " + this.edad + "\n" + "El sexo es: " + this.sexo + "\n" + "El peso es: " + this.peso + "\n" + "La altura  es: " + this.altura + "\n" + "El color de pelo es: " + this.colorPelo + "\n" + "El color de ojos es: " + this.colorOjos + "\n" + "Su raza es: " + this.raza + "\n" + "Esta persona se encuentra retirado: " + this.estaRetirado + "\n" + "Su nacionalidad es : " + this.nacionalidad + "\n" + "El numero de Oscars es: " + this.numeroDeOscars + "\n" + "Su profesion es: " + this.profesion + "\n")
    }
}

