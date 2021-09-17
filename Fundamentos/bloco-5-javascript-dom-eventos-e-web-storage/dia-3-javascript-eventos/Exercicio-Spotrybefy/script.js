/* Adicionando a classe Tech */
const primeiraLista = document.querySelector('#first-li');
const segundaLista = document.querySelector('#second-li');
const terceiraLista = document.querySelector('#third-li');
const input = document.getElementById('input');

function addClassTech(event) {
  let removeClass = document.querySelector('.tech');
  removeClass.classList.remove('tech');
  event.target.classList.add('tech');
  input.value = '';
}

primeiraLista.addEventListener('click', addClassTech);
segundaLista.addEventListener('click', addClassTech);
terceiraLista.addEventListener('click', addClassTech);

/* Alterando a caixa de texto */
function alteraTexto() {
  let elementoTech = document.querySelector('.tech');
  elementoTech.innerText = input.value;
}

input.addEventListener('input', alteraTexto);

/* Redirecionando para outra página */
function redireciona() {
  window.open('http://www.devmedia.com.br', '_blank');
}

const titulo = document.getElementById('my-spotrybefy');
titulo.addEventListener('dblclick', redireciona);

/* Movendo mouse sobre o título */
function mouseEntra(event) {
  event.target.style.color = 'red';
}

function mouseSai(event) {
  event.target.style.color = 'white';
}

const tituloMover = document.getElementById('my-spotrybefy');
tituloMover.addEventListener('mouseenter', mouseEntra);
tituloMover.addEventListener('mouseleave', mouseSai);