import React, { Component } from 'react';
import { Link } from 'react-scroll';

import '../css/NavMenu.css';

class NavMenu extends Component {

	render() {
		return(
			<div className="main-nav">
				<ul className="home-nav-menu">
          <div className="nav-menu">
            <Link
              className="nav-item"
              activeClass="active"
              to="about"
              containerId="rectangle-inner"
              spy={true}
              smooth={true}
              offset={60}
              duration={500}
            >About</Link>
            <Link
              className="nav-item"
              activeClass="active"
              to="projects"
              containerId="rectangle-inner"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >Projects</Link>
            <Link
              className="nav-item"
              activeClass="active"
              to="photos"
              containerId="rectangle-inner"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
            >Photos</Link>
            {/* <li><a href='#about'>About</a></li> */}
            {/* <li><a href='#projects'>Projects</a></li>
            <li><a href='#photos'>Photos</a></li> */}
          </div>
        </ul>
        <ul>
          {/* <div className="nav-media">
            <li><a href="https://github.com/edmundohh"><i class="fa fa-github fa-3x" aria-hidden="true"></i></a></li>
            <li><a href="https://www.linkedin.com/in/edmundoh/"><i class="fa fa-linkedin fa-3x" aria-hidden="true"></i></a></li>
            <li><a href="mailto: 1edmundoh@gmail.com"><i class="fa fa-envelope fa-3x" aria-hidden="true"></i></a></li>
          </div> */}
			  </ul>
			</div>
		);
	}
}

export default NavMenu;