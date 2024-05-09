// 1. Imports
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { filmes } from "./data.js";

// 2. Seletores
const divApp = document.getElementById("div-movies");
const navGenre = document.getElementById("nav-genre");

// 3. Funções
function navBar() {
    const generos = [];
    for (let index = 0; index < filmes.length; index++) {
        const element = filmes[index];
        if (!generos.includes(element.genero)) {
            generos.push(element.genero)
        };
    };

    generos.map(e => navGenre.innerHTML += `
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="src/pages/${e}/">${e}</a>
        </li>   
    `);
};

function createMovies() {
    return filmes.map(e => divApp.innerHTML += `
        <div style="width: 240px;">
            <h3>${e.title}</h3>
            <img style="height: 200px; width: 160px;" class="rounded-3" src="${e.capa}" alt="notfound">
            <p>${e.autor} ${e.ano}</p>
        </div>
    `);
};



// // 4. Eventos
window.addEventListener('load', () => {
    navBar();
    createMovies();
});