import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import typeDefs from './schema.5';
import resolvers from './resolvers.6';

const server = new ApolloServer({
  typeDefs,
  resolvers,
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
