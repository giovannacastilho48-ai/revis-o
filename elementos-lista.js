let numeros = [1, 2, 3, 4, 5];
let somaImpares = 0;

for (let i = 0 ; i < numeros .length; i ++) {
    if (numeros[i] % 2 !== 0) {
        somaImpares += numeros[i];
    }
}