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
							I'm a 3rd year Integrated Sciences student at the University of British Columbia, integrating Computer Science and Geological Science.<br/><br/>

							Here are some facts about me:<br/><br/>

							<span class="cat-highlight">Interests:</span> Hackathons, Photography, Sports, Music<br/>
							<span class="cat-highlight">Favourite Food:</span> Fried Chicken<br/>
							<span class="cat-highlight">Favourite Artists:</span> John Mayer, Kendrick Lamar<br/>
							<span class="cat-highlight">Favourite Sports Teams:</span> San Francisco Giants, Montreal Canadiens, Manchester United<br/>
							<span class="cat-highlight">Super Smash Bros Main:</span> Mega Man
					</p>
				</div>
			</div>
		);
	}
}
export default About;