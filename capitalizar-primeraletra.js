let frase = "ola mundo bonito";
let palavras = frase.split(" ");

for (let i = 0; i < palavras.length; i++) {
    palavras[i] = palavras[i][0].toUpperCase() + palavras[i].slice(1);
}

let resultado = palavras.join(" ");

console.log(resultado);