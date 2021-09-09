function compareNames(word, ending) {
    let compara = '';
    for (let i = 0; i < ending.length; i++) {
        if (word[word.length -i -1] === ending[ending.length -i -1]) {
            compara = true;
        } else {
            compara = false;
            break;
        }
    }
    return compara;
}

let resultado = compareNames('trybe', 'be');
console.log(resultado);