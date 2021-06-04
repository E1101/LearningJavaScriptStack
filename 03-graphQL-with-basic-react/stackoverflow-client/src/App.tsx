import React, { useState } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import './App.css';
import { SearchItem } from './types/stackoverflow';

type SearchResult = {items:[SearchItem]};

class SearchQuery extends Query<SearchResult> {};

const Search = ({q, children}: {q:String, children: (result:any) => any}) => {
  const query = gql`
  query SearchQuery ($q: String) {
    search (q: $q) @rest(type: "SearchResults", path: "search/advanced?order=desc&sort=activity&q={args.q}&site=stackoverflow") {
      items
    }
  }`;
 
  return <SearchQuery query={query} variables={{q}}>
    {(result => children(result))}
  </SearchQuery>

}



const App = () => {
  const [query, setQuery] = useState("testing");
  console.log(query);

  return (
    <div>
      <input value={query} onChange={e=>setQuery(e.target.value)} /> 
      <h2> Search Results for: {query} </h2>
      <Search q={query}>
        {({data}) => {
          console.log(data);
          if(!data||!data.search) return "";
          return (
            <div>{ 
              data.search.items.map( (item:any) =>
                <div key={item.link} style={{marginBottom:"1em"}}>
                  <a href={item.link}>{item.title}</a>
                  <div> 
                    {item.tags.map((tag:any) => <span key={tag}>{tag} </span>)}
                  </div> 
                </div>)
            }</div>
          );
        }}  
      </Search>
    </div>
  );
};

export default App;
