let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = numbers.length;

for (let iterator of numbers) {
    soma += iterator;
}

let resultado = soma / media;
console.log(resultado);