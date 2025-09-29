import { Auto } from "./auto.js";

const auto1 = new Auto("Audi A4 B8", 2008, "fekete")
const auto2 = new Auto("Audi rs3", 2010, "kek")

console.log(`${auto1.modell}, ${auto1.evjarat}, ${auto1.szin}, ${auto1.getKor()}`)
console.log(`${auto2.modell}, ${auto2.evjarat}, ${auto2.szin}, ${auto2.getKor()}`)