let numero = 11;
let verifica = 0;

for (let index = 1; index <= numero; index++) {
    if (numero % index === 0) {
        verifica += 1;
    }
}

if (verifica === 2) {
    console.log("O número " + numero + " é primo");
} else {
    console.log("O número " + numero + " não é primo");
}