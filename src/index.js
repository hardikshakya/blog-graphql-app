import { GraphQLServer } from 'graphql-yoga';

// Type definitions (schema)
const typeDefs = `
  type Query {
    greeting(name: String): String!
    me: User!
    post: Post! 
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
  }
`;

// Resolvers
const resolvers = {
  Query: {
    greeting(parent, args, ctx, info) {
      if (args.name) {
        return `Hello, ${args.name}.`;
      }
      return 'Hello';
    },

    me() {
      return {
        id: '123',
        name: 'Hardik',
        email: 'hardik@dummymail.com',
        age: 22,
      };
    },

    post() {
      return {
        id: '456',
        title: 'Post 1',
        body: '',
        published: false,
      };
    },
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => {
  console.log('Graphql Server Is Up!');
});
