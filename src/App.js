import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home.js';
import { About } from './components/About.js';
import { Contact } from './components/Contact.js';
import { NoMatch } from './components/NoMatch.js';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route component={NoMatch} />
          </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
