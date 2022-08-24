// const arrays = [
//   ['1', '2', '3'],
//   [true],
//   [4, 5, 6],
// ];

// function flatten(arrays) {
//   // const sum = (acc, curr) => acc + curr;
//   // const result = arrays.reduce(sum);
//   // return result;

//    return arrays.reduce((acc, curr) => acc.concat(curr)
// , [] );
// }

// console.log(flatten(arrays));

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// function reduceNames() {
//   return books.reduce((acc, book) => {
//     `${acc} ${book.author.name}.`, ''
//   })
// }

// console.log(reduceNames());

// function averageAge(){
//   const bookNumbers = books.length;
//   const sumOfAges =  books.reduce((acc, book) => (acc + (book.releaseYear - book.author.birthYear)),0);
//   return sumOfAges / bookNumbers;
// }

// console.log(averageAge());

// function longestNamedBook() {
//   return books.reduce((biggestBook, currentBook) => {
//     if(currentBook.name.length > biggestBook.name.length) {
//       return currentBook;
//     }
//       return biggestBook;
//   });
// }

// console.log(longestNamedBook());

// function containsA() {
//   return names.reduce((acc, currWord) => {
//     acc + currWord.split('').reduce((acumulator, currLetter)=>{
//       if(currLetter === 'a' || currLetter === 'A') {
//         return acumulator+1;}
//         return acumulator;
//     },0)
//   },0)
// }

// console.log(containsA());

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(students, grades) {
return nameAndAverageGrade = students.map((student, index) => ({
  name: student,
  average: (grades[index].reduce((acc, curr) => acc + curr, 0) / grades[index].length),
}
));
}

console.log(studentAverage());