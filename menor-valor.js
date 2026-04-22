let numeros = [10 , 3, 7, 1, 20];
let menor = numeros [0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < menor) {
        menor = numeros[i];
    }
}
console.log("Menor valor:", menor);