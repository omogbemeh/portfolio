import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact'
import Footer from './components/layout/Footer';
import Project from './components/project/Project';


import './App.css';


const App = () => {
  
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path = '/' component={Home} />
          <Route exact path = '/about' component={About} />
          <Route exact path = '/contact' component={Contact} />
          <Route exact path = '/projects' component={Project} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
    
  );
}

export default App;
