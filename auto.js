class Auto{
    constructor (modell, evjarat, szin) {
        this.modell = modell
        this.evjarat = evjarat
        this.szin = szin
    }

    get modell() {
        return this.modell
    }
    set modell(_modell) {
        this.modell = _modell
    }

    get evjarat() {
        return this.evjarat
    }
    set evjarat(_evjarat) {
        this.evjarat = _evjarat
    }

    get szin() {
        return this.szin
    }
    set szin(_szin) {
        this.szin = _szin
    }
}