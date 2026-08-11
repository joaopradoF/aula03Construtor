import readlineSync from "readline-sync";
import { Aluno } from "./src/models/RegistroAlunos";

console.log("=== REGISTRO DE ALUNO ===");

const nome = readlineSync.question("Digite o nome: ");
const matricula = readlineSync.question("Digite a matricula: ");

const aluno = new Aluno(nome, matricula);

let nota = readlineSync.questionFloat("Digite a nota final: ");

while (nota < 0 || nota > 20) {
    console.log("Nota invalida! A nota deve estar entre 0 e 20.");
    nota = readlineSync.questionFloat("Digite a nota novamente: ");
}

aluno.nota = nota;

console.log("\n=== DADOS DO ALUNO ===");
console.log(`Nome: ${aluno.nome}`);
console.log(`Nota final: ${aluno.nota}`);
console.log(`Situacao: ${aluno.verificarAprovacao()}`);