// Criando um array de objetos com nome e nota de alunos
const alunos = [
  { nome: "João", nota: 7 },
  { nome: "Maria", nota: 5 },
  { nome: "Pedro", nota: 8 },
  { nome: "Ana", nota: 6 },
  { nome: "Lucas", nota: 4 }
];

// Criando a função para retornar apenas os alunos com nota maior ou igual a 6
function alunosAprovados(arrayAlunos) {
  return arrayAlunos.filter(aluno => aluno.nota >= 6);
}

// Exibindo os alunos aprovados na tela
console.log(alunosAprovados(alunos));
