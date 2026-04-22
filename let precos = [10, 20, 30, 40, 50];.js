let precos = [10, 20, 30, 40, 50];
let soma = 0;

for (let i = 0; i < precos.length; i++) {
    soma += precos[i];
}

let media = soma / precos.length;

console.log("Soma:", soma);
console.log("Média:", media);