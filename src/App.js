import React, {Fragment} from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Cart from './components/Cart';
import './App.css';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <About />
      <Cart />
    </Fragment>
  );
}

export default App;
