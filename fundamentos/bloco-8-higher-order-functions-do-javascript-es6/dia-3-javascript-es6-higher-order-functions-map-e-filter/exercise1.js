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

const expectedResult = [
  {
    age: 31,
    author: 'Isaac Asimov',
  },
  {
    age: 38,
    author: 'H. P. Lovecraft',
  },
  {
    age: 39,
    author: 'Stephen King',
  },
  {
    age: 43,
    author: 'George R. R. Martin',
  },
  {
    age: 45,
    author: 'Frank Herbert',
  },
  {
    age: 62,
    author: 'J. R. R. Tolkien',
  },
];
const formatedBookNames = books.map((book) => `${book.name.split(' ').join('_').toUpperCase()} - ${book.genre.split(' ').join('_').toUpperCase()} - ${book.author.name.split(' ').join('_').toUpperCase()}`
);

console.log(formatedBookNames);

function nameAndAge() {
  return books.map(book => ({ 
     author: book.author.name,
     age: book.releaseYear - book.author.birthYear
   }
   )).sort((ageA, ageB) => ageA.age - ageB.age);
   }
   
 console.log(nameAndAge());
 
 function fantasyOrScienceFiction () {
   return books.filter((book => book.genre === 'Fantasia' || book.genre === 'Ficção Científica'));
 }
 
 console.log(fantasyOrScienceFiction());
 
 function oldBooksOrdered (){
   const moreThan60Years =  books.filter((book) => 2022 - book.releaseYear >= 60);
   const orderedBooks = moreThan60Years.sort((a,b) => (a.releaseYear - b.releaseYear));
   return orderedBooks;
 }
 
 console.log(oldBooksOrdered());
 
 function fantasyOrScienceFictionAuthors () {
   const fantasyOrFiction = ['Fantasia','Ficção Científica'];
   return books.filter((book) => fantasyOrFiction.includes(book.genre)).map((book) => book.author.name).sort();
   }
 
 console.log(fantasyOrScienceFictionAuthors());
 
 function oldBooks () {
   const currentYear = new Date().getFullYear();
   return books.filter((book) => currentYear - book.releaseYear > 60).map((book) => book.name);
 }
 
 console.log(oldBooks());
 
 function authorWith3DotsOnName () {
 return books.find((book) => (book.author.name.split(' ').filter((word) => word.endsWith('.')).length === 3)).name;
 }
 
 console.log(authorWith3DotsOnName());
 
