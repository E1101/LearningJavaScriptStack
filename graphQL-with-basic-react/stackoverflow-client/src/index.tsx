import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';
import { ApolloClient } from 'apollo-client';
import { RestLink } from 'apollo-link-rest';
import { InMemoryCache } from 'apollo-cache-inmemory';
import App from './App';


const username = process.env.REACT_APP_GITHUB_USERNAME
const token = process.env.REACT_APP_GITHUB_TOKEN
console.log(username, token)
const authorization = `Basic ${btoa(username + ':' + token)}`;

const cache = new InMemoryCache();
// @ts-ignore
window.cache = cache
const link = new RestLink({
  uri: 'https://api.stackexchange.com/2.2/'
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
