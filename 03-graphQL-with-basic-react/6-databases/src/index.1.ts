import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import typeDefs from './schema';
import resolvers from './resolvers';
import startDatabase from './database';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async () => {
    const knex = await startDatabase();

    return { knex };
  },
});

const app = express();
server.applyMiddleware({ 
  app, 
  cors: true 
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(
    `GraphQL endpoint and playground available at http://localhost:${PORT}${server.graphqlPath}`,
  );
});
