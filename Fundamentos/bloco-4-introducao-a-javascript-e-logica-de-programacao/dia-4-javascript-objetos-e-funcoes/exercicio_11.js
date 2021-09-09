function sumNumbers(num) {
    let total = 0;
    for (let i = 1; i <= num; i++) {
        total += i;
    }
    return total;
}

let resultado = sumNumbers(5);
console.log(resultado);