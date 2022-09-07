let btnLogin = document.querySelector('#btn-login');
let email = document.querySelector('#email');
let password = document.querySelector('#password');

function message () {

if(email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
 } else {
     alert('Email ou senha inválidos.');
 }
}
message();
btnLogin.addEventListener('click', message());

