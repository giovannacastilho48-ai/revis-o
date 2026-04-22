let texto = "olá mundo";
let vogais = "aeiou";
let consoantes = 0;

for (let i = 0; i < texto.length; i++) {
    if (vogais.includes(texto[i])) {
        consoantes++;
    }
}

console.log("Consoantes:", consoantes);