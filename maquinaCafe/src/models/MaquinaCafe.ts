export class MaquinaCafe {
    public modelo: string;
    private nivelAguaMl: number;
    private nivelCafeGramas: number;

    constructor(modelo: string) {
        this.modelo = modelo;
        this.nivelAguaMl = 0;
        this.nivelCafeGramas = 0;
    }

    abastecer(agua: number, cafe: number): void {
        this.nivelAguaMl += agua;
        this.nivelCafeGramas += cafe;

        console.log("Maquina abastecida!");
    }

    tirarCafe(): void {
        const aguaNecessaria = 100;
        const cafeNecessario = 10;

        if (
            this.nivelAguaMl < aguaNecessaria ||
            this.nivelCafeGramas < cafeNecessario
        ) {
            console.log("Agua ou cafe insuficiente!");
        } else {
            this.nivelAguaMl -= aguaNecessaria;
            this.nivelCafeGramas -= cafeNecessario;

            console.log("Cafe preparado!");
        }
    }

    get status(): string {
        return `Modelo: ${this.modelo} | Agua: ${this.nivelAguaMl} ml | Cafe: ${this.nivelCafeGramas} g`;
    }
}