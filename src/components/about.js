import React, { Component } from 'react';
import '../css/About.css';

import ProfilePhoto from '../images/pp3.jpeg';

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
							I'm Edmund and I am a Computer Science graduate from the <a href="https://www.ubc.ca/">University of British Columbia</a>.
							Currently, I am a Junior Automation Engineer at <a href="https://www.trainerize.com/">ABC Trainerize</a>.<br/><br/>
							
							Previously, I worked as an Agile Developer Intern at <a href="https://www.sap.com/">SAP</a> and as a Software QA Engineer Intern at <a href="https://ttt.studio/">TTT Studios</a>.<br/><br/>

							You can find the source code for this website and other projects on my <a href="https://github.com/edmundohh">GitHub</a>. Also check out some of my photos below in the photos section.<br/><br/>

							In my spare time, I enjoy photography, soccer and baseball.<br/>
					</p>
				</div>
			</div>
		);
	}
}
export default About;