import { dados } from "../1.EstruturaDeDados/script.js";

for (let index = 0; index < 3; index++) {
    const element = dados[index];
    console.log(element.elenco);
    for (const element2 of element.elenco) {
        console.log(element2);
    }
}