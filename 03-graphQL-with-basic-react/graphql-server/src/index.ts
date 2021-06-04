import express = require('express')
import { ApolloServer } from 'apollo-server-express';
//or:
//apollo-server-koa
//apollo-server-hapi
//apollo-server-lambda
//apollo-server-azure-functions
//apollo-server-cloud-functions
//apollo-server-cloudflare

import typeDefs from './schema';
import resolvers from './resolvers';

const server = new ApolloServer({
  typeDefs,
  resolvers
});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);

export default app
