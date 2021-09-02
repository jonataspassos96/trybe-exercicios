let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersNew = [];

for (let index = 0; index < numbers.length; index += 1) {

    if (index === numbers.length - 1) {
        numbersNew.push(numbers[numbers.length-1] * 2);
    } else {
        let multiplicacao = numbers[index] * numbers[index + 1];
        numbersNew.push(multiplicacao);
    }
}

console.log(numbersNew);