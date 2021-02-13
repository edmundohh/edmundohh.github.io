import React, { Component } from 'react';
import '../css/About.css';

import ProfilePhoto from '../images/profilephoto.png';

class About extends Component {
	render() {
		return(
			<div className="about-section" id="about">
				<div className="about-header">
					<div className="profile-photo">
						<img src={ ProfilePhoto }></img>
					</div>
					<h1>Hello!</h1>
				</div>			    	
				<div className="description">
					<p> 
							My name is Edmund and I'm currently an undergraduate Computer Science student at the <a href="https://www.ubc.ca/">University of British Columbia</a>,
							anticipating to graduate in May 2022.<br/><br/>
							Previously, I worked as an Agile Developer Intern at <a href="https://www.sap.com/">SAP</a>.<br/><br/>

							You can find the source code for my projects including this website on my <a href="https://github.com/edmundohh">GitHub</a>. Also check out some of my photos below in the photos section.<br/><br/>

							In my spare time, I enjoy photography, and watching soccer/hockey.<br/>
					</p>
				</div>
				<div className="about-border"></div>
			</div>
		);
	}
}
export default About;