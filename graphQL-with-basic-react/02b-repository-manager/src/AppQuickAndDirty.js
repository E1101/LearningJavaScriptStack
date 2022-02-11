import React, { useState, useEffect } from "react";
import { fetchRepositories } from "./queries/fetch-repositories";

export default function App() {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  // uses useEffect to send off the Query
  // as soon as the component is rendered.
  // ---
  // We pass an empty dependency array to useEffect to ensure that it only fires once.
  // But if the query depended on variables, then we would list the variables in the
  // second argument to useEffect to ensure it fires the query if the variables change.
  useEffect(() => {
    fetchRepositories()
      .then((x) => setRepos(x.data.viewer.repositories.nodes))
      .catch((error) => setError(error));
  }, []);

  const repoList = repos.map((repo) => (
    <div key={repo.id}>
      <a href={repo.url}>{repo.nameWithOwner}</a>
      <span>{repo.description}</span>
    </div>
  ));

  return (
    <div>
      <h1> Your Repositories </h1>
      {error ? <p>{error.toString()}</p> : repoList}
    </div>
  );
}
