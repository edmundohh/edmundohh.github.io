import React, { Component } from 'react';
import './App.css';
// import './main.css';
import Main from './components/main';
import Profile from './components/Profile';
import About from './components/About';
import Photos from './components/Photos';
import ScrollableAnchor from 'react-scrollable-anchor';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="fade-in">
          <Profile/>
          <ScrollableAnchor id={'about'}><About /></ScrollableAnchor>
          <ScrollableAnchor id={'photos'}><Photos /></ScrollableAnchor>
        </div>
      </div>
      );
  }
}

export default App;
