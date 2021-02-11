import React, { Component } from 'react';

import Profile from './Profile';
import About from './About';
import Projects from './Projects';
import Photos from './Photos';
import '../css/Window.css';
import NavMenu from './NavMenu';

class Window extends Component {

	render() {
		return(
    <div className="rectangle-outer">
      <div className="rectangle-top">
        <div className="box-container-l">
          <span className="box"></span>
        </div>
        <div className="bar-container">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className="box-container-r">
          <span className="box"></span>
          <span className="box"></span>
        </div>
      </div>
      <div className="rectangle-inner" id="rectangle-inner">
        <Profile/>
        <About/>
        <Projects/>
        <Photos/>
      </div>
    </div>
		);
	}
}

export default Window;