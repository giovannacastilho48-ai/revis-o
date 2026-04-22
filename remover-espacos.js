let frase = " Olá mundo bonito";
let resultado  ="";

for (let i = 0; i < frase.length; i++) {
    if (frase[i] !== " ") {
        resultado += frase[i];
    }
}

console.log(resultado);