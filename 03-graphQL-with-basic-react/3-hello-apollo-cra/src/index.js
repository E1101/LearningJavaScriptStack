import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./client";
import App from "./App";

import { gql } from "@apollo/client";

const VIEWER_QUERY = gql`
  query {
    viewer {
      login
    }
  }
`;

client.query({ query: VIEWER_QUERY }).then(console.log);

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

export default App;
