import { dados } from "../1.EstruturaDeDados/script.js";


// Pq um for dentro de um for?
// Pq tenho um array dentro de um array
for (let index = 0; index < dados.length; index++) {
    const element = dados[index];
    console.log(element.elenco);
    for (const element2 of element.elenco) {
        console.log(element2);
    }
}

// Dados é um array
// Elenco dentro de cada objeto é um array