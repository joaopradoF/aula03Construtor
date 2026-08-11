export class Funcionario {
    public nome: string;
    private idFuncionario: number;
    private salarioBase: number;

    constructor(nome: string, id: number, salario: number) {
        this.nome = nome;
        this.idFuncionario = id;

        if (salario < 820) {
            this.salarioBase = 820;
            console.log("Salário abaixo do mínimo. Ajustado para 820€.");
        } else {
            this.salarioBase = salario;
        }
    }

    get salario(): number {
        return this.salarioBase;
    }

    aplicarAumento(percentagem: number): void {
        if (percentagem <= 0) {
            console.log("Percentagem inválida.");
        } else {
            this.salarioBase += this.salarioBase * (percentagem / 100);
        }
    }
}