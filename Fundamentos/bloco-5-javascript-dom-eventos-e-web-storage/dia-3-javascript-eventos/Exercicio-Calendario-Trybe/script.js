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