import React, { Component } from 'react';

import ProfilePhoto from '../images/profilephoto.png';
import Background from '../images/profilebackground.jpg';
import Typer from './Typer';
import '../css/Profile.css';

const typedMessages = [
    'Edmund Oh'
  ];

const preloadImages = ['../images/profilebackground.jpg', '../images/profilephoto.png'];

class Profile extends Component {
	componentDidMount() {
		preloadImages.forEach((image) => {
			new Image().src = image;
		});
	}

	render() {
		return(
			<div className="homepage">
			<div className="profile" style={{
					backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${Background})`
				}}>
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
				  <li><a href='#about'>About</a></li>
				  <li><a href='#projects'>Projects</a></li>
				  <li><a href='#photos'>Photos</a></li>
			  </div>
			</ul>
			<ul>
			  <div className="nav-media">
					<li><a href="https://www.instagram.com/edmund_oh/"><i class="fa fa-instagram fa-3x" aria-hidden="true"></i></a></li>
					<li><a href="https://github.com/edmundohh"><i class="fa fa-github fa-3x" aria-hidden="true"></i></a></li>
					<li><a href="https://www.linkedin.com/in/edmundoh/"><i class="fa fa-linkedin fa-3x" aria-hidden="true"></i></a></li>
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