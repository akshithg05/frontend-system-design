const data = {
  books: [
    { id: "1", title: "Namaste JS", publishedYear: 2020, authorId: "101" },
    { id: "2", title: "Namaste DSA", publishedYear: 2020, authorId: "101" },
    { id: "3", title: "Namaste React", publishedYear: 2020, authorId: "102" },
  ],
  authors: [
    {
      id: "101",
      name: "Akshith Gunasheelan",
      books: ["1", "2"],
    },
    {
      id: "102",
      name: "Anushka G",
      books: ["3"],
    },
  ],
};

export const resolvers = {
  Book: {
    author: (parent) => {
      return data.authors.find((author) => author.id === parent.authorId);
    },
  },
  Author: {
    books: (parent) => {
      return data.books.filter((book) => parent.books.includes(book.id));
    },
  },
  Query: {
    authors: () => {
      return data.authors;
    },
    books: () => {
      return data.books;
    },
  },

  Mutation: {
    addBook: (parent, args) => {
      const newBook = { ...args, id: data.books.length + 1 };
      data.books.push(newBook);
      return newBook;
    },
  },
};
