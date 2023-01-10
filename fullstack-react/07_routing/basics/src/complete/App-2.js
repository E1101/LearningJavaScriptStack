import React from 'react';

// leanpub-start-insert
import createHistory from 'history/createBrowserHistory';

const history = createHistory();
// leanpub-end-insert

const Route = ({ path, component }) => {
  const pathname = window.location.pathname;
  if (pathname.match(path)) {
    return (
      React.createElement(component)
    );
  } else {
    return null;
  }
};

// leanpub-start-insert
const Link = ({ to, children }) => (
  <a
    onClick={(e) => {
      e.preventDefault();
      history.push(to);
    }}
    href={to}
  >
    {children}
  </a>
);
// leanpub-end-insert

class App extends React.Component {
  // leanpub-start-insert
  componentDidMount() {
    history.listen(() => this.forceUpdate());
  }
  // leanpub-end-insert

  render() {
    return (
      <div
        className='ui text container'
      >
        <h2 className='ui dividing header'>
          Which body of water?
        </h2>

        <ul>
          <li>
            {/* leanpub-start-insert */}
            <Link to='/atlantic'>
            {/* leanpub-end-insert */}
              <code>/atlantic</code>
            {/* leanpub-start-insert */}
            </Link>
            {/* leanpub-end-insert */}
          </li>
          <li>
            {/* leanpub-start-insert */}
            <Link to='/pacific'>
            {/* leanpub-end-insert */}
              <code>/pacific</code>
            {/* leanpub-start-insert */}
            </Link>
            {/* leanpub-end-insert */}
          </li>
        </ul>

        <hr />

        <Route path='/atlantic' component={Atlantic} />
        <Route path='/pacific' component={Pacific} />
      </div>
    );
  }
}

const Atlantic = () => (
  <div>
    <h3>Atlantic Ocean</h3>
    <p>
      The Atlantic Ocean covers approximately 1/5th of the
      surface of the earth.
    </p>
  </div>
);

const Pacific = () => (
  <div>
    <h3>Pacific Ocean</h3>
    <p>
      Ferdinand Magellan, a Portuguese explorer, named the ocean
      'mar pacifico' in 1521, which means peaceful sea.
    </p>
  </div>
);

export default App;
