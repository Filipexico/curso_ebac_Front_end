const alunos = [
  { nome: 'João', nota: 8 },
  { nome: 'Maria', nota: 5.5 },
  { nome: 'Pedro', nota: 7 },
  { nome: 'Ana', nota: 6 },
  { nome: 'Lucas', nota: 4.9 },
  { nome: 'Mariana', nota: 9.5 }
];


function filtrarAprovados(alunos) {
  return alunos.filter(aluno => aluno.nota >= 6);
}


const alunosAprovados = filtrarAprovados(alunos);
console.log(alunosAprovados);
