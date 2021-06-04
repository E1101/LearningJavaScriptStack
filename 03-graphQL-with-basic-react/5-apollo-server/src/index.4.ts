import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import typeDefs from './schema';

const mocks = {
  User: () => ({
    id: 1,
    firstName: 'foo',
    lastName: 'bar',
  }),
};

const server = new ApolloServer({
  typeDefs,
  mocks,
});

const app = express();
server.applyMiddleware({
  app,
  cors: true,
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(
    `GraphQL endpoint and playground available at http://localhost:${PORT}${server.graphqlPath}`,
  );
});
