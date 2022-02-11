import "reflect-metadata";
import express from "express";
import cookieParser from "cookie-parser";
import { ApolloServer } from "apollo-server-express";
import { buildSchema, ResolverData } from "type-graphql";
import { AuthorResolver, Author } from "./entities/Author";
import { PostResolver, Post } from "./entities/Post";
import { ConnectionOptions, createConnection } from "typeorm";
import { Context } from "./context";
import { Request } from "express";

const options: ConnectionOptions = {
  type: "sqlite",
  database: `${__dirname}/line.sqlite`,
  entities: [Author, Post],
  logging: true,
};

const hasRole = (req: Context, role: string) => false;

function authChecker({ context }: ResolverData<Context>, roles: string[]) {
  if (roles.length === 0) {
    return hasRole(context, "");
  } else {
    return roles.filter((role) => hasRole(context, role)).length > 0;
  }
}

async function main() {
  // build TypeGraphQL executable schema
  const [schema, connection] = await Promise.all([
    buildSchema({
      authChecker,
      resolvers: [AuthorResolver, PostResolver],
    }),
    createConnection(options),
  ]);

  connection.synchronize();

  // setup context
  const context = {
    authors: connection.getRepository(Author),
    posts: connection.getRepository(Post),
  };

  const app = express();
  // Create GraphQL server
  const server = new ApolloServer({
    playground: true,
    schema,
    context: (req) => ({
      ...context,
      req,
    }),
  });

  // Start the server
  app.use(cookieParser());
  server.applyMiddleware({ app });
  app.listen(4000);
  console.log(`Server is running, GraphQL Playground available at 4000`);
}

main();
