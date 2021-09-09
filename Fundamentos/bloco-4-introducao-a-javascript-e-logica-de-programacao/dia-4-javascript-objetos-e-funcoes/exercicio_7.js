let arrayTeste = [2, 3, 6, 7, 10, 1];

function maiorValor(array) {
  let maior = 0;
  for (let iterator in array) {
      if (maior < array[iterator])
        maior = iterator;
  }
  return maior;
}

console.log(maiorValor(arrayTeste));