let numeros = [5, 5, 3, 1];

let unico = [...new Set(numeros)];
unico.sort((a, b) => b - a);

let segundoMaior = unico[1];

console.log("Segundo maior:", segundoMaior);  