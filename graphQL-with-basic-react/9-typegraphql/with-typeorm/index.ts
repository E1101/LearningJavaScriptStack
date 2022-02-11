import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { AuthorResolver, Author } from "./entities/Author";
import { PostResolver, Post } from "./entities/Post";
import { ConnectionOptions, createConnection } from "typeorm";

const options: ConnectionOptions = {
  type: "sqlite",
  database: `${__dirname}/line.sqlite`,
  entities: [Author, Post],
  logging: true,
};

async function main() {
  // build TypeGraphQL executable schema
  const [schema, connection] = await Promise.all([
    buildSchema({ resolvers: [AuthorResolver, PostResolver] }),
    createConnection(options),
  ]);

  connection.synchronize();

  // setup context
  const context = {
    authors: connection.getRepository(Author),
    posts: connection.getRepository(Post),
  };

  // Create GraphQL server
  const server = new ApolloServer({ schema, context: () => context });

  // Start the server
  const { url } = await server.listen(4000);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

main();
