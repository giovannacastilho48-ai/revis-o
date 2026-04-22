let numemero = [10, 5, 2, 7, 1];

    numeros.sort((a, b) => a - b);

    let segundoMenor = numeros[1];
let maior = numeros[numeros.length - 1];

let amplitude = maior - segundoMenor;

console.log("Amplitude:", amplitude);