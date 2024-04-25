const breakingBadPersonagens = [
  {
    nome: "Walter White",
    ocupacao:
      "Ex-Professor de Química do Ensino Médio, Fabricante de Metanfetamina",
    status: "Falecido",
    apelido: "Heisenberg",
  },
  {
    nome: "Jesse Pinkman",
    ocupacao: "Fabricante de Metanfetamina, Ex-aluno de Walter White",
    status: "Vivo",
    apelido: "Cap'n Cook",
  },
  {
    nome: "Skyler White",
    ocupacao: "Contadora, Ex-dona de lava-rápido",
    status: "Viva",
    apelido: "Sky",
  },
  {
    nome: "Hank Schrader",
    ocupacao: "Agente da DEA",
    status: "Falecido",
    apelido: "ASAC Schrader",
  },
  {
    nome: "Saul Goodman",
    ocupacao: "Advogado Criminal",
    status: "Vivo",
    apelido: "Jimmy McGill",
  },
  {
    nome: "Gustavo Fring",
    ocupacao: "Dono do Los Pollos Hermanos, Distribuidor de Metanfetamina",
    status: "Falecido",
    apelido: "Gus",
  },
  // Adicione mais personagens conforme necessário
];

const personagens = [];

for (const element of breakingBadPersonagens) {
    personagens.push(element.nome)
}

// console.log(personagens);

const arrayBreakingBad = breakingBadPersonagens.map(e => e.nome)
console.log(arrayBreakingBad);