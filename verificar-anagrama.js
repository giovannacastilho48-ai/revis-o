let p1 = "Roma";
let p2 = "amor";

let a = p1.toLowerCase().split("").sort().join("");
let b = p2.toLowerCase().split("").sort().join("");

if (a === b) {
    console.log("São anagramas");
} else {
    console.log("Não são anagramas");
}