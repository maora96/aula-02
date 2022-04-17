const searchBook = (books: string[], book: string): string => {
  const position: number = books.indexOf(book);

  if (position === -1) {
    return "Livro não encontrado";
  }
  return `O livro está na posição ${position + 1}`;
};

const books: string[] = [
  "Guerra e Paz",
  "A Montanha Mágica",
  "Cem Anos de Solidão",
  "Dom Quixote",
  "A Divina Comédia",
];

console.log(searchBook(books, "Dom Quixote"));
