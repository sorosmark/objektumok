export class Auto{
    constructor (modell, evjarat, szin) {
        this._modell = modell
        this._evjarat = evjarat
        this._szin = szin
    }


    getKor() {
        const aktualisev = new Date().getFullYear()
        return aktualisev - this._evjarat
    }

    get modell() {
        return this._modell
    }
    set modell(modell) {
        this._modell = modell
    }

    get evjarat() {
        return this._evjarat
    }
    set evjarat(evjarat) {
        this._evjarat = evjarat
    }

    get szin() {
        return this._szin
    }
    set szin(szin) {
        this._szin = szin
    }
}