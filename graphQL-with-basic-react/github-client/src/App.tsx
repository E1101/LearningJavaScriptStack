import React, { useState } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import './App.css';

import * as types from './types/Repos';
import getRepos from './get-repos';

const RepositoryList = ({ repositories }: types.Repos_owner) => {

  if (!repositories || !repositories.nodes)
    return null;

  return (
    <ul>
      {repositories.nodes.map(node => {
        if (!node)
          return null;
        return (
          <li key={node.id}>
            <a href={node.url}>{node.name}</a>
          </li>
        );
      })}
     </ul>
  )
};


class RepoQuery
  extends Query<types.Repos, types.ReposVariables>
{};

const App = () => {
  const [login, setLogin] = useState("facebook");
  const [chain, setChain] = useState<string[]>([]);
  const [current, prev] = chain

  return (
    <div>
      <input
        value={login}
        onChange={e => setLogin(e.target.value)} />

      <RepoQuery
        query={getRepos}
        fetchPolicy = 'cache-first'
        variables={{login, after: current}}>
        {({data, loading}) => {
          if (!data || !data.owner)
            return null;
          //const {description} = data.owner;
          const {endCursor} = data.owner.repositories.pageInfo;
          return (
            <div>
              <RepositoryList {...data.owner} />
              <div>
                <div>{loading ? 'loading' : 'current'}: {current ? current : '<none>'}</div>
                {chain.length>0
                  ? <button onClick={()=>setChain(chain.slice(1))}> Prev : "{prev}" </button>
                  : <span></span>}
                {endCursor
                  ? <button onClick={()=>setChain([endCursor, ...chain])}> Next: "{endCursor}" </button>
                  : <span></span>
                }
              </div>
            </div>
          );
        }}
      </RepoQuery>
    </div>
);
}

export default App;
