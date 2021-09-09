let arrayTeste = [2, 4, 6, 7, 10, 0, -3];

function menorValor(array) {
  let menor = 0;
  for (let iterator in array) {
      if (menor > array[iterator])
        menor = iterator;
  }
  return menor;
}

console.log(menorValor(arrayTeste));