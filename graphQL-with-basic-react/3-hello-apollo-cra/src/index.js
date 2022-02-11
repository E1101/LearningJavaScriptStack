import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./client";
import App from "./App";

import { gql } from "@apollo/client";

// gql is a string-literal that parses the query string
// and returns a preprocessed representation (AST) of
// our query for faster execution.
// ---
// all you need to know is that gql needs to be used to
// create a valid GraphQL query for our Apollo client.
const VIEWER_QUERY = gql`
  query {
    viewer {
      login
    }
  }
`;

client.query({ query: VIEWER_QUERY }).then(console.log);


// @apollo/client ships with additional React bindings including:
// - a set of hooks like useQuery and useMutation to send GraphQL queries
// - <ApolloProvider> component to expose the apollo client via react context
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

export default App;
