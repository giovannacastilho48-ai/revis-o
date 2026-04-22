let palavra = "oi mundo oi";
let frequencia = {};

for ( let i = 0; i < palavra.length; i++){
    let  letra = palavra [i];
    if ( frequencia [letra] ) {
        frequencia [letra] ++;
    } else {
        frequencia [letra] = 1;
    }
}
console.log ( frequencia);