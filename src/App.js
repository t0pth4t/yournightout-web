import React, { Component } from 'react';
import Menu from './components/Menu'
import Router from './components/Router'

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Router />
      </div>
    );
  }
}

export default App;