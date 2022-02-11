import React from "react";
import { Repo } from "./components/Repo";
import { useRepoQuery } from "./queries/fetch-repositories";

export default function App() {
  const { loading, error, data } = useRepoQuery();

  if (loading) {
    return (
      <div className="App">
        <h2>Loading</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="App">
        <p>{error.toString()}</p>
      </div>
    );
  }

  const repos = data.viewer.repositories.nodes;
  const repoList = repos.map((repo) => <Repo repo={repo} key={repo.id} />);

  return (
    <div className="App">
      <h1> Your Repositories </h1>
      <div className="Content">
        {error ? <p>{error.toString()}</p> : repoList}
      </div>
    </div>
  );
}
