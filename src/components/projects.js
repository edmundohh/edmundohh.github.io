import React, { Component } from 'react';
import '../css/Projects.css';
import ProjectListItem from './ProjectListItem';

import ubcSubletPhoto from '../images/projects/ubcsublet.png';
import BoxBlasterPhoto from '../images/projects/boxblaster.png';
import HelpingHandPhoto from '../images/projects/helpinghand.png';
import TeePartyPhoto from '../images/projects/teeparty.png';

const projects = [
	{
		photo: TeePartyPhoto,
		title: "TeeParty",
		skills: ["React Native", "Node.js", "MongoDB"],
		description: "A mobile score-tracking application for golf that enables a friendly competition between users by featuring leaderboards at your favourite courses. Follow other golfers to keep up with their score logs and view them on your leaderboard.",
		ghLink: "https://github.com/edmundohh/TeeParty",
	},
	{
		photo: HelpingHandPhoto,
		title: "Helping Hand",
		subtitle: "1st Place at UBC Local Hack Day 2019",
		skills: ["PostgreSQL", "Node.js", "React.js"],
		description: "A web application that facilitates donations to the homeless, simply from scanning a QR code printout acquired from a participating merchant.",
		ghLink: "https://github.com/edmundohh/HelpingHand",
		demoLink: "https://devpost.com/software/helpinghand-a4swt1"
	},
	{
		photo: ubcSubletPhoto,
		title: "ubcSublet",
		skills: ["Node.js", "React.js", "Oracle"],
		description: "A web application for room sublets on UBC residence, which allows tenants to create detailed postings of their rooms. Simply filter postings to find sublets under desired conditions, and directly contact tenants.",
		ghLink: "https://github.com/edmundohh/ubcSublet"
	},
	{
		photo: BoxBlasterPhoto,
		title: "Box Blaster",
		skills: ["Unity", "C#"],
		description: "A tower defense game, with the goal of defending your territory from box enemies by constructing Box Blaster Towers.",
		ghLink: "https://github.com/edmundohh/Unity-BoxBlaster-Tower-Defense-Game"
	}
]

class Projects extends Component {
	renderItem() {
		return projects.map((item) => {
			return (
				<ProjectListItem
					photo={item.photo}
					title={item.title}
					subtitle={item.subtitle}
					skills={item.skills}
					description={item.description}
					ghLink={item.ghLink}
					demoLink={item.demoLink}
				/>
			);
		});
	}

	render() {
		return(
			<div className="projects-section" id="projects">
				<div className="projects-header">
					<h1>Projects</h1>
				</div>
		    <ul className="projects-list">
					<li>{this.renderItem()}</li>
			 </ul>
		</div>
		);
	}
}

export default Projects;