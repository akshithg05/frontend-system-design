export const resolvers = {
  Query: {
    authors: () => {
      return [
        {
          id: 1,
          name: "Akshith Gunasheelan",
        },
      ];
    },
    books: () => {
      return [
        {
          id: 1,
          title: "The way of life",
          publishedYear: 2024,
        },
      ];
    },
  },
};
