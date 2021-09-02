let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = 0;

for (let iterator of numbers) {
    if (maiorNumero < iterator) {
        maiorNumero = iterator;
    }
}

console.log(maiorNumero);