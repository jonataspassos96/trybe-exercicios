/* Exercício 1 */
const h1 = document.createElement('h1');
const body = document.querySelector('body');

h1.innerText = 'Exercício 5.2 - JavaScript DOM';
h1.classList.add('title');
body.appendChild(h1);

/* Exercício 2 */
const main = document.createElement('main');

main.classList.add('main-content');
body.appendChild(main);

/* Exercício 3 */
const section1 = document.createElement('section');

section1.classList.add('center-content');
section1.style.backgroundColor = 'green';
main.appendChild(section1);

/* Exercício 4 */
const p = document.createElement('p');

p.innerText = 'Olá, eu sou o Jônatas Passos, sou um estudante da Trybe';
section1.appendChild(p);

/* Exercício 5 */
const section2 = document.createElement('section');

section2.classList.add('left-content');
main.appendChild(section2);

main.removeChild(section2);

/* Exercício 6 */
const section3 = document.createElement('section');

section3.classList.add('right-content');
section3.style.marginRight = 'auto';
main.appendChild(section3);

/* Exercício 7 */
const img = document.createElement('img');

img.src = 'https://picsum.photos/200';
img.classList.add('small-image');

section2.appendChild(img);

/* Exercício 8 */
const ul = document.createElement('ul');

const arrayNumber = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

for (let index = 0; index < 10; index += 1) {
  const li = document.createElement('li');
  li.innerText = arrayNumber[index];
  ul.appendChild(li);
}

section3.appendChild(ul);

ul.lastChild.remove();
ul.lastChild.remove();

/* Exercício 9 */
for (let index = 0; index < 3; index++) {
  const h3 = document.createElement('h3');
  h3.classList.add('description');
  main.appendChild(h3);
}

/*  */