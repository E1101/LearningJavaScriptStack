import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import typeDefs from './schema';

const server = new ApolloServer({
  typeDefs,
});

const app = express();
server.applyMiddleware({
  app,
  cors: true,
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(
    `GraphQL endpoint and playground accessible at http://localhost:${PORT}${server.graphqlPath}`,
  );
});
