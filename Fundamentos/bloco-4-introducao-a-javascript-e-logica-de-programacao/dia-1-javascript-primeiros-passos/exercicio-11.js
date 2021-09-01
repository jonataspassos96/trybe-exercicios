let salarioBruto = 3000;
let salario_aliquota_INSS;
let salario_aliquota_IR;

if (salarioBruto <= 1.556,94) {
    salario_aliquota_INSS = salarioBruto - (salarioBruto * 0.08);
} else if (salarioBruto >= 1.556,95 && salarioBruto <= 2.594,92) {
    salario_aliquota_INSS = salarioBruto - (salarioBruto * 0.09);
} else if (salarioBruto >= 2.594,93 && salarioBruto <= 5.189,82) {
    salario_aliquota_INSS = salarioBruto - (salarioBruto * 0.11);
} else if (salarioBruto > 5.189,82) {
    salario_aliquota_INSS = salarioBruto - 570.80;
}

if (salario_aliquota_INSS >= 1.903,99 && salario_aliquota_INSS <= 2.826,65) {
    salario_aliquota_IR = 142,80 - (salario_aliquota_INSS * 0.7,5);
} else if (salario_aliquota_INSS >= 2.826,66 && salario_aliquota_INSS <= 3.751,05) {
    salario_aliquota_IR = 354,80 - (salario_aliquota_INSS * 0.15);
} else if (salario_aliquota_INSS >= 3.751,06 && salario_aliquota_INSS <= 4.664,68) {
    salario_aliquota_IR = 636,13 - (salario_aliquota_INSS * 0.22,5);
} else if (salario_aliquota_INSS > 4.664,68) {
    salario_aliquota_IR = 869,36 - (salario_aliquota_INSS * 0.27,5);
}

let salarioLiquido = salario_aliquota_INSS - salario_aliquota_IR;
console.log(salarioLiquido);