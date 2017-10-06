import React, { Component } from 'react';
import logo from './logo.svg';
import owl from './random-image-005.jpg';
import './App.css';

import { Route } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';

import Header from './Header';
import DancingTree from './DancingTree';
import MortysMindblowers from './MortysMindblowers';

const TwoTrees = () => (
    <div>
        <DancingTree width={600} height={200} />
        <DancingTree width={600} height={200} />
    </div>
);

class App extends Component {
  render() {
      return <BrowserRouter>
    <div>
        <nav>
            <Link to="/morty">Morty's Mindblowers</Link>
            &nbsp;|&nbsp;
            <Link to="/tree">Dancing Tree</Link>
        </nav>
        <Route path="/morty" component={MortysMindblowers} />
        <Route path="/tree" component={TwoTrees} />
    </div>
      </BrowserRouter>
  }
}

export default App;
