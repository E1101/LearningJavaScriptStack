import { useState, useEffect } from "react";
import { post } from 'superagent';

const FETCH_REPO_QUERY = `
query { 
  viewer {
    repositories(first:100) {
      nodes {
        id
        url
        nameWithOwner
        description
      }
    }
  }
}`;

// The token is passed via process.env and by convention the
// React starter kit bakes all environment variables starting
// with REACT_APP_* into your app.
// ---
// (!) Environment variables defined in a .env are automatically loaded by a create-react-app app.
// This also means that this variable will be compiled into your final JavaScript and be viewable
// by anyone who can view the code in their browser. The consequence is you need to be careful about
// what token you expose online and make sure you intend for it to be public (or not). If you don't wish
// to expose your key to the public then you'll need to create a server that forwards the requests on the
// users behalf with the secret key.
const TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const fetchRepositories = () => post("https://api.github.com/graphql")
    .set({ Authorization: `Bearer ${TOKEN}`, })
    .send({ query: FETCH_REPO_QUERY, });


// This is now a self-contained hook that handles the whole lifecycle
// of our GraphQL query and is ready to be consumed in our component.
// which we can use this hook in our App.js
export const useRepoQuery = (deps = []) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  useEffect(() => {
    fetchRepositories()
      .then((x) => {
        setState({
          error: null,
          loading: false,
          data: x.body.data,
        });
      })
      .catch((error) => setState({ loading: false, error, data: null }));
  }, deps);

  return state;
};
