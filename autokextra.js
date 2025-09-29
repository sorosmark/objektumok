import { Auto } from "./auto.js"

export class AutoExtrakkal extends Auto {
    constructor (modell, evjarat, szin, fogyasztas, tankmeret) {
        super(modell, evjarat, szin)
        this._fogyasztas = fogyasztas
        this._tankmeret = tankmeret
    }

    get fogyasztas() {
        return this._fogyasztas
    }
    set fogyasztas(fogyasztasErtek) {
        this._fogyasztas = fogyasztasErtek
    }

    get tankmeret() {
        return this._tankmeret
    }
    set tankmeret(tankmeretErtek) {
        this._tankmeret = tankmeretErtek
    }

    

    //hatotav kiszamitas
        //tankmeret / fogyasztas * 100
    hatotav() { 
        return this._tankmeret / this._fogyasztas * 100; 
    } 
}

