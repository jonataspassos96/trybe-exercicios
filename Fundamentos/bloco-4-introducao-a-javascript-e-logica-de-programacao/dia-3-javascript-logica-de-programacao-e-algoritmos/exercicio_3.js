let num = 5;
let estrelas = "";

for (let i = 0; i < num; i++) {
    let espaco = "";
    estrelas += "*";
    for (let j = i; j < num-1; j++) {
        espaco += " ";
    }
    console.log(espaco + estrelas);
}