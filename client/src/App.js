import React, { Fragment } from 'react';
import Navbar from './layout/Navbar';
import Home from './layout/Home'
import './App.css';
import Kanye from './layout/Kanye';
import Contact from './layout/Contact';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <Kanye />
      <Contact />
    </Fragment>
  );
}

export default App;
