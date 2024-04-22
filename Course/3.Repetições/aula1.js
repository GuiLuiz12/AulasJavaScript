// Arrays

// Podemos ter arrays de todos os tipos de dados

const arrNumbers = [1, 2, 3, 312, 123, 11, 0];

const arrStrings = ["Lebron James", "Michael Jordan", "Messi"];

const arrBooleans = [true, false, true, true];

const arrNSB = [12, true, "True"];

// Modelo IDEAL abaixo de um array:
// Array de objetos
const arrOnePiece = [
    {
        id: 1,
        personagem: "Luffy",
        protagonista: true,
        frutaDiabo: {
            status: true,
            nome: "nika nika no mi",
            tipo: "zoan mitica"
        },
        categoria: "pirata"
    },
    {
        id: 2,
        personagem: "Zoro",
        protagonista: true,
        frutaDiabo: {
            status: false,
            nome: null,
            tipo: null
        },
        categoria: "pirata"
    },
    {
        id: 3,
        personagem: "Nami",
        protagonista: true,
        frutaDiabo: {
            status: false,
            nome: null,
            tipo: null
        },
        categoria: "pirata"
    },
    {
        id: 4,
        personagem: "Usopp",
        protagonista: true,
        frutaDiabo: {
            status: false,
            nome: null,
            tipo: null
        },
        categoria: "pirata"
    },
    {
        id: 5,
        personagem: "Sanji",
        protagonista: true,
        frutaDiabo: {
            status: false,
            nome: null,
            tipo: null
        },
        categoria: "pirata"
    },
    {
        id: 6,
        personagem: "Chopper",
        protagonista: true,
        frutaDiabo: {
            status: true,
            nome: "hito hito no mi",
            tipo: "zoan"
        },
        categoria: "pirata"
    },
    {
        id: 7,
        personagem: "Robin",
        protagonista: true,
        frutaDiabo: {
            status: true,
            nome: "horo horo no mi",
            tipo: "paramecia"
        },
        categoria: "pirata"
    },
    {
        id: 8,
        personagem: "Franky",
        protagonista: true,
        frutaDiabo: {
            status: false,
            nome: null,
            tipo: null
        },
        categoria: "pirata"
    },
    {
        id: 9,
        personagem: "Brook",
        protagonista: true,
        frutaDiabo: {
            status: false,
            nome: null,
            tipo: null
        },
        categoria: "pirata"
    },
    {
        id: 10,
        personagem: "Jinbe",
        protagonista: true,
        frutaDiabo: {
            status: false,
            nome: null,
            tipo: null
        },
        categoria: "pirata"
    }
];

// 1. Transformando o array de objetos para Array de Strings
// Finalidade, pegar apenas o nome dos personagens.

const personagens = [];
for (const element of arrOnePiece) {
    personagens.push(element.personagem);
};
// console.log(personagens[0] === arrOnePiece[0].personagem);

// map -> cria um novo array -> utiliza a sintaxe ES6
const mapPersonagens = arrOnePiece.map(e => e.personagem);

// 2. Criar um novo array de strings com o nome apenas das frutas
const frutas = [];
for (const element of arrOnePiece) {
    if (element.frutaDiabo.nome) {
        frutas.push(element.frutaDiabo.nome)
    };
};
// console.log(frutas)

// filter -> cria um novo array filtrado -> utiliza sintaxe Es6
const filterFrutas = arrOnePiece.filter(element => element.frutaDiabo.nome); 
console.log(filterFrutas);