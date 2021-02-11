import React, { Component } from 'react';
import './App.css';
import TopBar from './components/TopBar';
import Window from './components/Window';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <TopBar/>
        <Window/>
      </div>
      );
  }
}

export default App;
