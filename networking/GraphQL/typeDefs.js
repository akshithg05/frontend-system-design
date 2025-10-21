export const typeDefs = `#graphql

    # This is the schema

    type Author{
        id: ID!
        name: String!
        books: [Book]
    }

    type Book{
        id: ID!
        title: String!
        publishedYear: Int
        author: Author
    }

    # All the methods to get the data

    type Query {
        authors: [Author]  # Square bracket says give me list of authors
        books: [Book]
    }

    type Mutation{
        addBook(title: String!, publishedYear: Int,authorId: ID!): Book!
    }

    # All the methods to create/ update the data
    
`;
