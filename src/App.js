import React, {Fragment, useState} from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { breakStatement } from '@babel/types';

function App() {
  const [basket, setBasket] = useState(0);

  const addToBasket = () => {
    setBasket(basket + 1)
  }
  return (
    <Fragment>
      <Router>
        <Navbar basketNumber={basket}/>
        <Switch>
          <Route exact path="/" render={() => <Home myFunc={addToBasket} />} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
