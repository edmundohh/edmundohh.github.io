import React, { Component } from 'react';
import '../css/Projects.css';
import ProjectListItem from './ProjectListItem';

import IncognitoElfPhoto from '../images/projects/incognitoelf.png';
import ubcSubletPhoto from '../images/projects/ubcsublet.png';
import BoxBlasterPhoto from '../images/projects/boxblaster.png';
import HelpingHandPhoto from '../images/projects/helpinghand.png';
import TeePartyPhoto from '../images/projects/teeparty.png';

const projects = [
	{
		photo: TeePartyPhoto,
		title: "TeeParty",
		skills: ["React Native", "Node.js", "MongoDB"],
		description: "A mobile app that enables a friendly competition between users by allowing you to log scores at your favourite golf course. Follow other players to keep up with their score logs and view them on the leaderboard.",
		ghLink: "https://github.com/edmundohh/TeeParty",
	},
	{
		photo: HelpingHandPhoto,
		title: "Helping Hand",
		subtitle: "1st Place at UBC Local Hack Day 2019",
		skills: ["PostgreSQL", "Node.js", "React.js"],
		description: "A web app for easily donating to the homeless by simply scanning a QR code printout acquired from a participating merchant.",
		ghLink: "https://github.com/edmundohh/HelpingHand",
		demoLink: "https://devpost.com/software/helpinghand-a4swt1"
	},
	{
		photo: IncognitoElfPhoto,
		title: "Incogito Elf",
		skills: ["Node.js", "MongoDB"],
		description: "A Secret Santa app for users to create and join groups to organize a gift exchange.",
		ghLink: "https://github.com/edmundohh/IncognitoElf"
	},
	{
		photo: ubcSubletPhoto,
		title: "ubcSublet",
		skills: ["Node.js", "React.js", "Oracle"],
		description: "A UBC residence sublet system allowing users to sign up, create posts, and make requests to posts in order to sublet an available room on campus.",
		ghLink: "https://github.com/edmundohh/ubcSublet"
	},
	{
		photo: BoxBlasterPhoto,
		title: "Box Blaster",
		skills: ["Unity", "C#"],
		description: "A tower defense game, with the goal of defending your territory from box enemies by constructing Box Blaster Towers. (Inspired by TT)",
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
			<div className="projects-section">
				<div className="projects-header">
					<h1>projects</h1>
				</div>
		    <ul className="projects-list">
					<li>{this.renderItem()}</li>
			 </ul>
		</div>
		);
	}
}

export default Projects;