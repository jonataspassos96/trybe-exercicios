let arrayName = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorValor(array) {
  let maiorName = array[0];
  for (let name in array) {
      if (maiorName.length < array[name].length) {
          maiorName = array[name];
      }
  }
  return maiorName;
}
  
console.log(maiorValor(arrayName));