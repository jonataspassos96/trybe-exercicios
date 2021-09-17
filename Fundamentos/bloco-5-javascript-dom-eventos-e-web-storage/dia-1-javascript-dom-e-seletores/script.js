const paragraph = document.querySelector('#paragrafo');

/* Modificando o texto */
function modText(texto) {
  paragraph.innerText = texto;
}

modText('Daqui 2 anos me vejo trabalhando em uma grande empresa de tecnologia.');

/* Mudando a cor do quadrado amarelo para o verde da Trybe */
const quadradoAmarelo = document.querySelector('.main-content');

function mudandoCorGreen(quadradoGreen) {
  quadradoGreen.style.backgroundColor = 'rgb(76,164,109)';
}

mudandoCorGreen(quadradoAmarelo);

/* Mudando a cor do quadrado vermelho para branco */
const quadradoRed = document.querySelector('.main-content .center-content');

function mudandoCorWhite(quadradoWhite) {
  quadradoWhite.style.backgroundColor = 'white';
}

mudandoCorWhite(quadradoRed);

/* Corrige o texto do h1 */
const titulo = document.querySelector('.title');

function corrigeTitulo(titulo) {
  titulo.innerText = 'Exercício 5.1 - JavaScripit';
}

corrigeTitulo(titulo);

/* Modificando texto para caixa baixa */
const caixaBaixaP = document.querySelectorAll('p');

function alteraTexto(arrayP) {
  for (let index = 0; index < arrayP.length; index += 1) {
      arrayP[index].innerText = arrayP[index].innerText.toLowerCase();
  }
}

alteraTexto(caixaBaixaP);

/* Exibindo conteúdo dos parágrafos no console */
function exibindoCosole(consoleP) {
  for (let index = 0; index < consoleP.length; index += 1) {
    console.log(consoleP[index].innerText);
  }
}

exibindoCosole(caixaBaixaP);