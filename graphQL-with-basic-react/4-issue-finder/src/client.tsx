import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const token = process.env.REACT_APP_GITHUB_TOKEN;

const authorization = `Bearer ${token}`;

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "https://api.github.com/graphql",
  headers: {
    authorization,
  },
});

const client = new ApolloClient({
  link,
  cache,
});

export default client;
