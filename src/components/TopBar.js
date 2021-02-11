import React, { Component } from 'react';

import Typer from './Typer';
import '../css/TopBar.css';
import NavMenu from './NavMenu';

class TopBar extends Component {

	render() {
		return(
			<div className="topbar-container">
				<ul className="topbar-menu-container">
					<div className="topbar-menu">
						<li><a href="https://github.com/edmundohh">GitHub</a></li>
						<li><a href="https://www.linkedin.com/in/edmundoh/">LinkedIn</a></li>
						<li><a href="mailto: 1edmundoh@gmail.com">Email</a></li>
					</div>
				</ul>
			</div>
		);
	}
}

export default TopBar;