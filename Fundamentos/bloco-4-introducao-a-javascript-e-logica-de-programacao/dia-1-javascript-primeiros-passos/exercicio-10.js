const valorCusto = 500;
const valorVenda = 1000;

if (valorCusto > 0 && valorVenda > 0) {
    let impostoSobreOCusto = 500 * 0.2;
    let valorCustoTotal  = valorCusto + impostoSobreOCusto;
    let lucro = valorVenda - valorCustoTotal;
    lucro *= 1000;

    console.log(lucro);
} else {
    console.log("Valores inseridos são inválidos.");
}