import React, { Component } from 'react';
import { Link } from 'react-scroll';

import '../css/BottomMenu.css';
import Profile from './Profile';

class BottomMenu extends Component {

	render() {
		return(
			<div className="bottom-container">
				<ul className="bottom-menu-container">
					<div className="bottom-menu">
            <Link
              className="bottom-menu-item"
              activeClass="active"
              to="profile"
              containerId="rectangle-inner"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
            ><i class="fa fa-home fa-3x" aria-hidden="true"></i></Link>
					</div>
				</ul>
			</div>
		);
	}
}

export default BottomMenu;