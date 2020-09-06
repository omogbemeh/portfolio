import React, { Fragment } from 'react';
import Navbar from './layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './home/Home'
import About from './about/About'

import './App.css';


const App = () => {
  
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path = '/' component={Home} />
          <Route exact path = '/about' component={About} />
        </Switch>
      </Fragment>
    </Router>
    
  );
}

export default App;
