import { dados } from "../1.EstruturaDeDados/script.js";

for (const filme of dados) {
    console.log(filme.title, filme.ano);
}

console.log("---------");

for (const element of dados) {
    console.log(element.oscar);
}