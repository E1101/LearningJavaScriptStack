import React from 'react';

// leanpub-start-insert
import { Route, Redirect } from 'react-router-dom';
// leanpub-end-insert

import TopBar from './TopBar';
import AlbumsContainer from './AlbumsContainer-2';

import '../styles/App.css';

const App = () => (
  <div className='ui grid'>
    <TopBar />
    <div className='spacer row' />
    <div className='row'>
      <Route path='/albums' component={AlbumsContainer} />

      {/* leanpub-start-insert */}
      <Route exact path='/' render={() => (
        <Redirect
          to='/albums'
        />
      )} />
      {/* leanpub-end-insert */}
    </div>
  </div>
);

export default App;
