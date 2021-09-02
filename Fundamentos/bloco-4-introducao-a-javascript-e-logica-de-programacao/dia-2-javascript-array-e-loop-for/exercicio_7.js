let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = numbers[0];

for (let iterator of numbers) {
    if (menorNumero > iterator) {
        menorNumero = iterator;
    }
}

console.log(menorNumero);