import React, { Component } from 'react';
import '../css/About.css';

class About extends Component {
	render() {
		return(
			<div className="about-section">
				<div className="about-header">
					<h1>hello!</h1>
				</div>			    	
				<div className="description">
					<p> 
							I'm currently an undergraduate Computer Science student at the University of British Columbia. 
							Previously, I have worked as a Software Developer Intern at <a href="https://www.sap.com/">SAP</a>.<br/><br/>

							<span class="cat-highlight">Interests:</span> Hackathons, Photography, Soccer, Hockey, Music<br/>
							<span class="cat-highlight">Favourite Movies:</span> Us, Train to Busan, The Silence of the Lambs<br/>
							<span class="cat-highlight">Favourite Artists:</span> John Mayer, Kendrick Lamar, Hyukoh<span class="blackpink">, BLACKPINK</span><br/>
					</p>
				</div>
			</div>
		);
	}
}
export default About;