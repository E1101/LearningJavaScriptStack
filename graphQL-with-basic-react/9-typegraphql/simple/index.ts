import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { AuthorResolver } from "./entities/Author";
import { PostResolver } from "./entities/Post";
import { createContext } from "./context";

async function main() {
  // build TypeGraphQL executable schema
  const schema = await buildSchema({
    resolvers: [AuthorResolver, PostResolver],
  });

  // create a context for graphql resolvers
  const context = createContext();
  
  // create Apollo Server
  const server = new ApolloServer({ 
    schema, 
    context: () => context 
  });

  // Start the server
  const { url } = await server.listen(4000);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

main();