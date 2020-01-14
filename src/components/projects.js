import React, { Component } from 'react';
import '../css/Projects.css';
import ProjectPhoto3 from '../images/projects/incognitoelf.png';
import ProjectPhoto2 from '../images/projects/ubcsublet.png';
import ProjectPhoto1 from '../images/projects/boxblaster.png';
import ProjectPhoto4 from '../images/projects/helpinghand.png';

class Projects extends Component {
	render() {
		return(
			<div className="projects-section">
				<div className="projects-header">
					<h1>Projects</h1>
				</div>
		    <ul className="projects-list">
			<li><div className="project">
						<div className="project-photo">
							<img src={ ProjectPhoto4 }></img>
						</div>
						<div className="profile-title">
							<h2>Helping Hand</h2>
							<h3>1st Place at UBC Local Hack Day 2019</h3>
						</div>
						<ul className="skills">
							<li> PostgreSQL </li>
							<li> Node.js </li>
							<li> React.js </li>
						</ul>
						<div className="project-description">
							<p> 
							A web app allowing easy donations to the homeless by simply scanning a QR code printout acquired from
							a participating merchant.
							</p>
						</div>
						<div className="github-link">
							<a href="https://github.com/edmundohh/HelpingHand"><i class="fa fa-github fa-4x" aria-hidden="true"></i></a>
						</div>
						<div className="demo-link">
							<a href="https://devpost.com/software/helpinghand-a4swt1"><i class="fa fa-laptop fa-4x" aria-hidden="true"></i></a>
						</div>
				</div></li>
		    	<li><div className="project">
						<div className="project-photo">
							<img src={ ProjectPhoto3 }></img>
						</div>
						<div className="profile-title">
							<h2>Incognito Elf</h2>
						</div>
						<ul className="skills">
							<li> Node.js </li>
							<li> MongoDB </li>
						</ul>
						<div className="project-description">
							<p> 
							A Secret Santa app for users to create and join groups to organize a gift exchange.
							</p>
						</div>
						<div className="github-link">
							<a href="https://github.com/edmundohh/IncognitoElf"><i class="fa fa-github fa-4x" aria-hidden="true"></i></a>
						</div>
				</div></li>
				<li><div className="project">
						<div className="project-photo">
							<img src={ ProjectPhoto2 }></img>
						</div>
						<div className="profile-title">
							<h2>ubcSublet</h2>
						</div>
						<ul className="skills">
							<li> Node.js </li>
							<li> React.js </li>
							<li> Oracle </li>
						</ul>
						<div className="project-description">
							<p> 
							A UBC Sublet system allowing users to sign up, create posts, and make requests to posts in order to sublet an available room on campus. 
							</p>
						</div>
						<div className="github-link">
							<a href="https://github.com/edmundohh/ubcSublet"><i class="fa fa-github fa-4x" aria-hidden="true"></i></a>
						</div>
				</div></li>
				<li><div className="project">
						<div className="project-photo2">
							<img src={ ProjectPhoto1 }></img>
						</div>
						<div className="profile-title">
							<h2>Box Blaster</h2>
						</div>
						<ul className="skills">
							<li> Unity </li>
							<li> C# </li>
						</ul>
						<div className="project-description">
							<p> 
							A tower defense game, with the goal of defending your territory from box enemies by constructing Box Blaster Towers.
							</p>
						</div>
						<div className="github-link">
							<a href="https://github.com/edmundohh/Unity-BoxBlaster-Tower-Defense-Game"><i class="fa fa-github fa-4x" aria-hidden="true"></i></a>
						</div>
				</div></li>
			</ul>
		</div>
		);
	}
}

export default Projects;