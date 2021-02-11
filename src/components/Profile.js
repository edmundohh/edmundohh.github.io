import React, { Component } from 'react';

import ProfilePhoto from '../images/profilephoto.png';
import Background from '../images/profilebackground.jpg';
import Typer from './Typer';
import '../css/Profile.css';
import NavMenu from './NavMenu';

const typedMessages = [
		'Hello! Welcome to my website.',
		'Feel free to navigate to one of the following sections.'
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
			<div className="profile-page">
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