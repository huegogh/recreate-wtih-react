import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home.js';
import { About } from './components/About.js';
import { Contact } from './components/Contact.js';
import { NoMatch } from './components/NoMatch.js';
import { Layout } from './components/Layout.js';
import { NavigationBar } from './components/NavigationBar.js';
import { Jumbo } from './components/Jumbo.js';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Router>
      <NavigationBar />
      <Jumbo />
    <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route component={NoMatch} />
        </Switch>
    </Layout>
      </Router>
    </React.Fragment>
  );
}

export default App;
