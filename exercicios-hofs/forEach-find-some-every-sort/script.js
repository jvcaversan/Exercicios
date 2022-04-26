// forEach
// const emailListInData = [
//     'roberta@email.com',
//     'paulo@email.com',
//     'anaroberta@email.com',
//     'fabiano@email.com',
//   ];
  
//   const showEmailList = (email) => {
//     console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
//   };
  
//   emailListInData.forEach(showEmailList);

//find
// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const findDivisibleBy3And5 = () => {
//     return numbers.find((number) => number % 3 === 0 && number % 5 === 0);
// }

// console.log(findDivisibleBy3And5());

// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const findNameWithFiveLetters = () => {
//   return names.find((name) => name.length === 5);
// }

// console.log(findNameWithFiveLetters());

// const musicas = [
//     { id: '31031685', title: 'Partita in C moll BWV 997' },
//     { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//     { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
//   ]
  
//   function findMusic(id) {
//     return musicas.find((musica) => musica.id === id);
//   }
  
//   console.log(findMusic('31031685'))

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
  
  function authorBorn1947 () {
    return books.find((element) => element.author.birthYear === 1947).author.name ;
  }
// console.log(authorBorn1947(1947));

function smallerName() {
    let nameBook;
    books.forEach((book) => {
        if(!nameBook || book.name.length < nameBook.length){
            nameBook = book.name;
        }
    })
    return nameBook;
  }
//   console.log(smallerName());

function book26Characters () {
    return books.find((element) => element.name.length === 26);
}

function booksOrderedByReleaseYearDesc() {
    return books.sort((elementA, elementB) => elementB.releaseYear - elementA.releaseYear);
  }

function everyoneWasBornOnSecXX() {
    return books.every((element) => (element.author.birthYear > 1900 && element.author.birthYear <= 2000));
  }

function someBookWasReleaseOnThe80s() {
  return books.some((element) => element.releaseYear >= 1980 && element.releaseYear <= 1989);
}

function authorUnique() {
    return books.every((elementEvery) => !books.some((elementSome) => (elementSome.author.birthYear === elementEvery.author.birthYear) && (elementSome.author.name !== elementEvery.author.name)));
}