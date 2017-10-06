import React, { Component } from 'react';
import logo from './logo.svg';
import owl from './random-image-005.jpg';
import './App.css';

import Header from './Header';
import DancingTree from './DancingTree';
import MortysMindblowers from './MortysMindblowers';

class App extends Component {
  render() {
    return [
        //<DancingTree width={640} height="480" />
        <MortysMindblowers />
    ];
  }
}

export default App;
