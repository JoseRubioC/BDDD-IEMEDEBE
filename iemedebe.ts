import { Peliculas } from "./peliculas"

export class Iemedebe {
    peliculas:Peliculas[]

    constructor (peliculas:Peliculas[]){
        this.peliculas = peliculas
    }

    showIemedebe(){
        for (let i = 0; i < this.peliculas.length; i++) {
            this.peliculas[i].showPropertys()
        }
    }
}