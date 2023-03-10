window.onload = function() {
    let clearBtn = document.querySelector('#clear-btn');
    clearBtn.addEventListener('click',ClearFields);
    let submitBtn = document.querySelector('#submit-btn');
    submitBtn.addEventListener('click',handleSubmit);
    let agreement = document.querySelector('#agreement');
    agreement.addEventListener('change', enableSubmit);
   
}

function handleSubmit(event){
event.preventDefault();
let validation = textInputValidation();
if(validation === false) {
    alert('Dados Inválidos');
} else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
}
}

function ClearFields(){
let formElements = document.querySelectorAll('input');
let textArea = document.querySelector('textarea');
for(let index = 0; index < formElements.length; index+=1){
    let userInput = formElements[index];
    userInput.value = '';
    userInput.checked = false;
}
textArea.value = '';
}

function enableSubmit(){
    let submitBtn = document.querySelector('#submit-btn');
    let agreement = document.querySelector('#agreement');
    submitBtn.disabled = !agreement.checked;
}

function textInputValidation(){
let email = document.querySelector('#email').value.length;
let invalidEmail = email < 10 || email > 50;

let name = document.querySelector('#fullName').value.lenght;
let invalidName = name < 10 || name > 40;

let reason = document.querySelector('#why').value.lenght;
let invalidReason = reason > 500;

if(invalidEmail || invalidName || invalidReason) {
    return false;
} else {
    return true;
}
}