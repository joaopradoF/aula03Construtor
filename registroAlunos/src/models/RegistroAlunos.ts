export class Aluno {
    public nome: string;
    private matricula: string;
    private _notaFinal: number = 0;

    constructor(nome: string, matricula: string) {
        this.nome = nome;
        this.matricula = matricula;
    }

    set nota(valor: number) {
        if (valor < 0 || valor > 20) {
            console.log("Nota inválida! A nota deve estar entre 0 e 20.");
        } else {
            this._notaFinal = valor;
        }
    }

    get nota(): number {
        return this._notaFinal;
    }

    verificarAprovacao(): string {
        if (this._notaFinal >= 10) {
            return "Aprovado";
        } else {
            return "Reprovado";
        }
    }
}