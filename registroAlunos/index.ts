import readlineSync from "readline-sync";
import { Aluno } from "./src/models/RegistroAlunos";

console.log("=== REGISTRO DE ALUNO ===");

const nome = readlineSync.question("Digite o nome: ");
const matricula = readlineSync.question("Digite a matricula: ");

const aluno = new Aluno(nome, matricula);

let nota = readlineSync.questionFloat("Digite a nota final: ");

nota.nota(valor);

aluno.nota = nota;

console.log("\n=== DADOS DO ALUNO ===");
console.log(`Nome: ${aluno.nome}`);
console.log(`Nota final: ${aluno.nota}`);
console.log(`Situacao: ${aluno.verificarAprovacao()}`);
