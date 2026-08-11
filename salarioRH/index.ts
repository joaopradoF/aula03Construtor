import readlineSync from "readline-sync";
import { Funcionario } from "./src/models/Funcionario.js";

console.log("=== GESTÃO DE SALÁRIOS ===");

const nome = readlineSync.question("Nome do funcionario: ");
const id = readlineSync.questionInt("ID do funcionario: ");
const salarioInicial = readlineSync.questionFloat("Salario inicial: ");

const funcionario = new Funcionario(nome, id, salarioInicial);

console.log(`\nSalario atual: ${funcionario.salario}€`);

const percentagem = readlineSync.questionFloat("Percentagem de aumento: ");

funcionario.aplicarAumento(percentagem);

console.log(`Salario apos aumento: ${funcionario.salario}€`);
