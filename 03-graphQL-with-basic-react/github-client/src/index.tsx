import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import App from './App';


const username = process.env.REACT_APP_GITHUB_USERNAME
const token = process.env.REACT_APP_GITHUB_TOKEN
console.log(username, token)
const authorization = `Basic ${btoa(username + ':' + token)}`;

const cache = new InMemoryCache();
// @ts-ignore
window.cache = cache
const link = new HttpLink({
  uri: 'https://api.github.com/graphql',
  headers: {
      authorization
    }
});

const client = new ApolloClient({
  link,
  cache
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);


export default App;
