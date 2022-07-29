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

// 1. Lista com os dias
let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// 2. Crie a função a ser executada para popular o nosso calendário.
function creatingDaysofTheMonth(){
  let getDaysList = querySelector('#days')

  for(let index = 0; index < decemberDaysList.lenght; index+=1){
    let day = decemberDaysList[index];
    let dayItem = document.createElement('li');
    dayItem.innerHTML = day;
    if(day === 24 || day === 31){
      dayItem.className = 'day holiday';
      getDaysList.appendChild(dayItem);
    } else if(day === 4 || day === 11 || day === 18) {
      dayItem.className = 'day fryday';
      getDaysList.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = 'day holiday friday';
      getDaysList.appendChild(dayItem);
    }else {
      dayItem.className = 'day';
      getDaysList.appendChild(dayItem);
    }
    
  }
}
creatingDaysofTheMonth();

// Exercício 2 

//  Criar uma função com um parâmetro a string 'Feriados. Adicione a este botão a ID 'btn-holiday'. Adicione este botão como filho da tag <div> com classe  'buttons-container'.

function createHolidayButton(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'btn-holiday';

  newButton.innerHTML = buttonName;
  newButton.id =  newButtonID;

  buttonContainer.appendChild(newButton);
}

createHolidayButton('Feriados');

// Exercício 3 

// Criar a função que será responsável por selecionar todos os elementos com a classe 'holiday'. Selecionar o botão 'Feriados. Adicionar variáveis para armazenar as cores.

function displayHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday');
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'white';
  getHolidayButton.addEventListener('click', function() {
    for( let index = 0; index < getHolidays.lenght; index+=1) {
      if(getHolidays[index].getElementsByClassName.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  })
}

displayHolidays();

// Exercício 4

// Implemente uma função que crie dinamicamente um botão com o nome 'Sexta-feira'. Sua funão deve receber como parâmetro a string 'Sexta-feira'. Adicione a esse botão a ID 'btn-friday'. Adicone a esse botão como filho da tag <div> com classe 'buttons-container'

function createFridayButton(buttonName){
  let buttonContainer =document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'btn-friday';

  newButton.id = newButtonID;
  newButton.innerText = buttonName;
  buttonContainer.appendChild(newButton);
}

createFridayButton('Sexta-feira');

// Exercício 5

// Implemente uma funçao que modifica o texto exibido nos dias que são sexta-feira. Adicione ao botão 'sexta-feira' um evento de 'click' e modifique o texto a ser exibido nos dias  que são sextas-feiras.

function displayFridays(fridaysArray) {
  let getFridayButton = document.querySelector('#btn-friday');
  let fridays = document.getElementsByClassName('friday');
  let newFridayText = 'SEXTOU o/'
  getFridayButton.addEventListener('click', function() {
    for (let index = 0; index < fridays.length; index+=1) {
      if(fridays[index].innerHTML !== newFridayText) {
        fridays[index].innerHTML = newFridayText;
      } else {
        fridays[index].innerHTML = fridaysArray[index];
      }
    }
  })

}

let decemberFridays = [4, 11, 18, 25];
displayFridays(decemberFridays);
