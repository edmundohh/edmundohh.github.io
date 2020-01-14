import React, { Component } from 'react';
import '../css/About.css';

class About extends Component {
	render() {
		return(
			<div className="about-section">
				<div className="about-header">
					<h1>Hello!</h1>
				</div>			    	
				<div className="description">
					<p> 
							I'm currently a 3rd year Integrated Sciences student at the University of British Columbia, studying Computer Science, Mathematics, and Geological Science.<br/><br/>

							Previously, I have worked as a Software Developer Intern at <a href="https://www.sap.com/">SAP</a>.<br/><br/>

							Here are some fun facts about me:<br/><br/>

							<span class="cat-highlight">Interests:</span> Hackathons, Photography, Soccer, Hockey, Music<br/>
							<span class="cat-highlight">Favourite Food:</span> Fried Chicken<br/>
							<span class="cat-highlight">Favourite Artists:</span> John Mayer, Kendrick Lamar<br/>
							<span class="cat-highlight">Favourite Sports Teams:</span> San Francisco Giants, Montreal Canadiens, Manchester United<br/>
					</p>
				</div>
			</div>
		);
	}
}
export default About;