import React from 'react';

// leanpub-start-insert
import { Route, Redirect, Switch } from 'react-router-dom';
// leanpub-end-insert

import TopBar from './TopBar';
// leanpub-start-insert
import PrivateRoute from './PrivateRoute';
// leanpub-end-insert
import AlbumsContainer from './AlbumsContainer';
import Login from './Login';
import Logout from './Logout';

import '../styles/App.css';

const NoMatch = ({ location }) => (
  <div className='ui inverted red raised very padded text container segment'>
    <strong>Error!</strong> No route found matching:
    <div className='ui inverted black segment'>
      <code>{location.pathname}</code>
    </div>
  </div>
);

const App = () => (
  <div className='ui grid'>
    <TopBar />
    <div className='spacer row' />
    <div className='row'>
      <Switch>
        {/* leanpub-start-insert */}
        <PrivateRoute path='/albums' component={AlbumsContainer} />
        {/* leanpub-end-insert */}
        <Route path='/login' component={Login} />
        <Route path='/logout' component={Logout} />

        <Route exact path='/' render={() => (
          <Redirect
            to='/albums'
          />
        )} />

        <Route component={NoMatch} />
      </Switch>
    </div>
  </div>
);

export default App;
