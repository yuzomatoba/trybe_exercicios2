// items 1,2,3,4 e 5

// let info = {
// personagem: 'Margarida',
// origem: 'Pato Donald',
// nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// recorrente: 'Sim'
// }

// for(key in info){
// console.log(key);
// }

// console.log('Bem-vinda',info.personagem);

// for(key in info) {
//     console.log(info[key]);
// }

// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
//     nota: 'O último MacPatinhas Ambos recorrentes',
//     recorrente: 'Ambos recorrentes'
// }
// for(let key in info) {
//     for(let key in info2) {
//     console.log(info[key] , 'e', info2[key]);}
// }

// item 6,7 e 8.

// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
     
//     ],
//   };
//   for(let key in leitor) {
// console.log('O livro de', leitor.nome, leitor.sobrenome,'se chama', leitor.livrosFavoritos[0].titulo);
//   }

//   leitor.livrosFavoritos.push(
//     {
//         titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//         autor: 'JK Rowling',
//         editora: 'Rocco',
//     },
//   );

//   console.log(leitor['nome'], 'tem', leitor.livrosFavoritos.lenght, 'livros favoritos');

// parte II - item 1

// function checkPalindrome(string) {
//     let reverse = string.split('').reverse().join('');
//     if(string === reverse) {
//         return true;
//     }
//         return false;
// }

// console.log(checkPalindrome('queijo'));
// console.log(checkPalindrome('ama'));    