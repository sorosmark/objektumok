import { Auto } from "./auto.js";
import { AutoExtrakkal } from "./autokextra.js";

//peldanyositas
const auto1 = new Auto("Audi A4 B8", 2008, "fekete")
const auto2 = new Auto("Audi rs3", 2010, "kek")

console.log(`${auto1.modell}, ${auto1.evjarat}, ${auto1.szin}, ${auto1.getKor()}`)
auto1._szin = "piros"
console.log(`${auto2.modell}, ${auto2.evjarat}, ${auto2.szin}, ${auto2.getKor()}`)
console.log(`${auto1.modell}, ${auto1.evjarat}, ${auto1.szin}, ${auto1.getKor()}`)

//auto extrakkal peldanyositas
const autoEx1 = new AutoExtrakkal("Honda Civic", 2005, "lila", 7, 60)

console.log(`${autoEx1.modell}, ${autoEx1.evjarat}, ${autoEx1.szin}, ${autoEx1.getKor()} ${autoEx1.fogyasztas}, ${autoEx1.tankmeret}`)
console.log(`${autoEx1.hatotav()} km`)