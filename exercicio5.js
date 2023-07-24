//5. Imprimir os primeiros 10 números da sequência de Fibonacci.

// 0 1 1 2 3 5 8

export function sequenciaFibonacci() {
    let numAnterior = 0;
    let numAtual = 1;

    console.log(numAnterior);
    console.log(numAtual);

    for (let contador = 0; contador < 10; contador++) {
        let proximoNumero = numAnterior + numAtual;
    
        console.log(proximoNumero);
    
        numAnterior = numAtual;
        numAtual = proximoNumero;
    }
}