export const typeDefs = `#graphql

    # This is the schema

    type Author{
        id: ID!
        name: String!
    }

    type Book{
        id: ID!
        title: String!
        publishedYear: Int
    }

    # All the methods to get the data

    type Query {
        authors: [Author]  # Square bracket says give me list of authors
        books: [Book]
    }

    # All the methods to create/ update the data
    
`;
