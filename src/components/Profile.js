import React, { Component } from 'react';

import Typer from './Typer';
import '../css/Profile.css';
import NavMenu from './NavMenu';

const typedMessages = [
		'Hello! Welcome to my website.',
		'open navigation menu'
	];

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = { menuVisible: false }
		this.updateMenuVisible = this.updateMenuVisible
	}
	
	updateMenuVisible = () => {
		this.setState({ menuVisible: true })
	}

	render() {
		return(
			<div className="profile-page" id="profile">
				<div className="profile-name">
					<h1>Edmund Oh</h1>
				</div>
				<div className="profile-description">
			 		{ this.renderTypedMessages() }
		 		</div>
				<div className="main-nav">
					{ this.state.menuVisible ? <NavMenu/> : null }
				</div>
			</div>
		);
	}

	renderTypedMessages() {
		return (
		  <Typer
				dataText={ typedMessages }
				updateMenuVisibility={ this.updateMenuVisible }
		  />
		);
	  }
}

export default Profile;