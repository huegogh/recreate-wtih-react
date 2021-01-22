import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Multipage } from './components/pages/Multipage.js';
import { Hotel } from './components/pages/Hotel.js';
import { Business } from './components/pages/Business.js';
import { Restaurant } from './components/pages/Restaurant.js';
import { NoMatch } from './components/pages/NoMatch.js';
import { Home } from './components/Home.js';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/review-site' component={Multipage} />
            <Route path='/hotel' component={Hotel} />
            <Route path='/business' component={Business} />
            <Route path='/restaurant' component={Restaurant} />
            <Route component={NoMatch} />
          </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
