import PromptSync from "prompt-sync";

import { imprimirNumeros } from "../Aula2007/exercicio1.js";
import { numerosPares } from "../Aula2007/exercicio2.js";
import { numerosImpares } from "../Aula2007/exercicio3.js";
import { tabuada } from "./exercicio4.js";
import { sequenciaFibonacci } from "../Aula2007/exercicio5.js";
import { nPares } from "../Aula2007/exercicio6.js";

const prompt = PromptSync();

//menu para escolher qual exercicio o usuario escolher

let exercicio;
let continuar;

do {

    exercicio = parseInt(prompt("Digite a lista de exercicios de 1 ate 6: "));

    switch (exercicio) {
        case 1:
            imprimirNumeros()
            break;
        case 2:
            numerosPares()
            break;
        case 3:
            numerosImpares()
            break;
        case 4:
            tabuada()
            break;
        case 5:
            sequenciaFibonacci()
            break;
        case 6:
            nPares()
            break;
        default:
            break;

    }
    // console.log("Digite um numero de 1 a 6!!!");
    // continuar = prompt("Deseja continuar s para sim e n para nao: ")
    continuar = prompt("Deseja continuar ver outros exercicios? Digite s para SIM digite n para NAO: ")

} while
    (continuar.toLocaleLowerCase() === "s");
// (continuar === "sim");