import readlineSync from "readline-sync";
import { MaquinaCafe } from "./src/models/MaquinaCafe.js";

const modelo = readlineSync.question("Digite o modelo da maquina: ");

const maquina = new MaquinaCafe(modelo);

let opcao: number;

do {
    console.log("\n=== MAQUINA DE CAFE ===");
    console.log("1 - Abastecer");
    console.log("2 - Tirar cafe");
    console.log("3 - Ver status");
    console.log("0 - Sair");

    opcao = readlineSync.questionInt("Escolha uma opcao: ");

    switch (opcao) {
        case 1:
            const agua = readlineSync.questionInt(
                "Quantidade de agua em ml: "
            );

            const cafe = readlineSync.questionInt(
                "Quantidade de cafe em gramas: "
            );

            maquina.abastecer(agua, cafe);
            break;

        case 2:
            maquina.tirarCafe();
            break;

        case 3:
            console.log(maquina.status);
            break;

        case 0:
            console.log("Encerrando programa...");
            break;

        default:
            console.log("Opcao invalida!");
    }

} while (opcao !== 0);