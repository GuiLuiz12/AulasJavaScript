import { dados } from "./data";
import "./style.css";


const divApp = document.getElementById('app');

const oscar = dados.filter(e => e.oscar)
    .forEach(filme => {
        divApp.innerHTML += `
            <div class="filmes">
                <h3>${filme.title}</h3> 
            </div>
        `
    });

