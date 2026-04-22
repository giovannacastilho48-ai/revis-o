let numero = [1, 2, 3, 4, 5];
let soma = 0;
  
for (let i = 0; i < numero.length; i++) {
    if (numero[i] % 2 !== 0) {
        soma += numero[i];
    }
}
console.log("Soma dos ímpares:", soma);