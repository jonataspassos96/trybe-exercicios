function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

/* Exercício 1 */
const mes = document.querySelector('#days');

function inserindoDias(arrayDias) {
  for (let index = 0; index < arrayDias.length; index += 1) {
      const dia = document.createElement('li');
      dia.addEventListener('mouseover',addZoom);
      dia.addEventListener('mouseout',resetZoom);
      dia.innerText = arrayDias[index];
      dia.classList.add('day');
      mes.appendChild(dia);

      if (arrayDias[index] == 24 || arrayDias[index] == 25 || arrayDias[index] == 31) {
        dia.classList.add('holiday');
      }

      if (arrayDias[index] == 4 || arrayDias[index] == 11 || arrayDias[index] == 18 || arrayDias[index] == 25) {
          dia.classList.add('friday');
      }
  }
}

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

inserindoDias(dezDaysList);

/* Exercício 2 */
const divPaiButton = document.querySelector('.buttons-container');
const button = document.createElement('button');

function addButton() {
  button.innerText = 'Feriados';
  divPaiButton.appendChild(button);
}

addButton();

/* Exercício 3 */
function addHolidaysColor() {
  const holiday = document.querySelectorAll('.holiday');

  for (let index = 0; index < holiday.length; index += 1) {
    if (holiday[index].style.backgroundColor === 'orange') {
        holiday[index].style.backgroundColor = 'rgb(238,238,238)';
    } else {
        holiday[index].style.backgroundColor = 'orange';
    }
  }
}

button.addEventListener('click', addHolidaysColor);

/* Exercício 4 */
let buttonSexta = document.createElement('button');
function buttonFriday(sexta) {
buttonSexta.id = 'btn-friday';
buttonSexta.innerText = sexta;
divPaiButton.appendChild(buttonSexta);
}

/* Exercício 5 */
function changeTextFriday() {
  buttonSexta.addEventListener('click', () => {
  let arraySexta = [4, 11, 18, 25];

  let sexta = document.querySelectorAll('.friday');
  for(let index = 0; index < sexta.length; index += 1){
    if(sexta[index].innerText !== 'Sextou!'){
    sexta[index].innerText = 'Sextou!'; 
  }else{
    sexta[index].innerText = arraySexta[index];
  }
  }
  });
}
buttonFriday('Sexta-fera!');
changeTextFriday();

/* Exercício 6 */
function addZoom(event) {
  event.target.style.fontSize = '25px';
}

function resetZoom(event) {
  event.target.style.fontSize = '20px';
}

/* Exercicio 7 */
const span = document.createElement('span');
const divTasks = document.querySelector('.my-tasks');

function customTask(tarefa) {
  span.innerText = tarefa;
  divTasks.appendChild(span);
}

customTask('Estudar');

/* Exercício 8 */
function colorCaption(cor) {
  const divFilho = document.createElement('div');
  divFilho.className = 'task';
  divFilho.style.backgroundColor = cor;
  divTasks.appendChild(divFilho);
  divFilho.addEventListener('click', addClassSelected);
}

colorCaption('blue');

/* Exercício 9 */
function addClassSelected(event) {
  if (event.target.classList.contains('selected')) {
    event.target.classList.remove('selected');
  } else {
    event.target.classList.add('selected');
  }
}