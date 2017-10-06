import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header';
import DancingTree from './DancingTree';

class App extends Component {
  render() {
    return [
        <Header logo={logo} />,
        <DancingTree width="1028" height="600" />
    ];
  }
}

export default App;
