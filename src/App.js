import React, { Component } from 'react';
import './App.css';
import BottomMenu from './components/BottomMenu';
import TopBar from './components/TopBar';
import Window from './components/Window';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <TopBar/>
        <Window/>
        <BottomMenu/>
      </div>
      );
  }
}

export default App;
