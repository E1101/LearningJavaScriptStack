import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import DataLoader from 'dataloader';
import queryComplexity, { simpleEstimator } from 'graphql-query-complexity';

import typeDefs from './schema';
import resolvers from './resolvers';
import startDatabase from './database';

const dataLoaders = async () => {
  const db = await startDatabase();

  return {
    artist: new DataLoader((ids) => {
      console.log('database called', ids);

      return db('artists').whereIn('id', ids).select();
    }),
  };
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async () => {
    const knex = await startDatabase();
    const loaders = await dataLoaders();

    return { knex, loaders };
  },
  validationRules: [
    queryComplexity({
      estimators: [
        simpleEstimator({ defaultComplexity: 1 }),
      ],
      maximumComplexity: 10,
      onComplete: (complexity: number) => {
        console.log('Query Complexity:', complexity);
      },
    }),
  ],
});

const app = express();
server.applyMiddleware({ app });

const PORT = 4000;

app.listen(PORT, () => {
  console.log(
    `GraphQL endpoint and playground available at http://localhost:${PORT}${server.graphqlPath}`,
  );
});
