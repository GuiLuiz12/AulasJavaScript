import { filmes } from "./data.js";
const divApp = document.getElementById("app")
console.log(filmes);

const generos = []

for (let index = 0; index < filmes.length; index++) {
    const element = filmes[index];
    if (!generos.includes(element.genero)) {
        generos.push(element.genero)
    }
}
console.log(generos);


filmes.map(e => divApp.innerHTML += `
    <h3>${e.title}</h3>
    <img src="${e.capa}" alt="img not found"/>
    <p>${e.autor} ${e.ano}</p>
`)

