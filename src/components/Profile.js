import React, { Component } from 'react';

import ProfilePhoto from '../images/profilephoto.png';
import Typer from './Typer';
import '../css/Profile.css';

const typedMessages = [
    'edmund oh'
  ];

class Profile extends Component {
	render() {
		return(
			<div className="homepage">
			<div className="profile">
					<div className="profile-photo">
						<img src={ ProfilePhoto }></img>
					</div>
					<div className="profile-title">
						{ this.renderTypedMessages() }
					</div>	
			</div>
			<div className="main-nav">
			<ul className="home-nav-menu">
			  <div className="nav-menu">
				  <li><a href='#about'>about</a></li>
				  <li><a href='#projects'>projects</a></li>
				  <li><a href='#photos'>photos</a></li>
			  </div>
			</ul>
			<ul>
			  <div className="nav-media">
					<li><a href="https://www.instagram.com/edmund_oh/"><i class="fa fa-instagram fa-4x" aria-hidden="true"></i></a></li>
					<li><a href="https://github.com/edmundohh"><i class="fa fa-github fa-4x" aria-hidden="true"></i></a></li>
					<li><a href="https://www.linkedin.com/in/edmundoh/"><i class="fa fa-linkedin fa-4x" aria-hidden="true"></i></a></li>
			  </div>
			</ul>
		  </div>
		  </div>
		);
	}

	renderTypedMessages() {
		return (
		  <Typer
		  	dataText={ typedMessages }
		  />
		);
	  }
}

export default Profile;