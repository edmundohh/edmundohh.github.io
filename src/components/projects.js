import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Projects extends Component {
	render() {
		return(
			<header>
			<body>
	
		<div className="general-backgrund">
					<ul className="general-main-nav">
						<li><Link to="/"> HOME </Link></li>
						<li><Link to="/photos"> PHOTOS </Link></li>
						<li className="active"><Link to="/projects"> PROJECTS </Link></li>
						<li><Link to="/about"> ABOUT </Link></li>
				    </ul>
		<div className='fade-in'>
		    <ul className="projects">
		    	<li><div className="project1">
			    	<img src="https://www.dropbox.com/s/eh9u73xjzytzk54/oooo.plus_131.png?raw=1"></img>
			    	<h1>
						IncognitoElf
					</h1>
					<ul className="skills">
						<li> MongoDB </li>
						<li> Mongoose </li>
						<li> Node.js </li>
					</ul>
					<p> 
						A Secret Santa app for users to create and join groups to organize a gift exchange. Designed the back-end database using MongoDB.
					</p>
				</div></li>
		    	<li><div className="project1">
			    	<img src="https://www.dropbox.com/s/ssooopvb8jh3n2m/Sublet.png?raw=1"></img>
			    	<h1>
						ubcSublet
					</h1>
					<ul className="skills">
						<li> SQL </li>
						<li> Node.js </li>
						<li> Oracle SQLDeveloper </li>
					</ul>
					<p> 
						A UBC Sublet system allowing users to sign up/log in, create posts, and make requests to posts in order to sublet an available room on campus. 
					</p>
				</div></li>
			    <li><div className="project2">
			    	<img src="https://www.dropbox.com/s/3redpi1l22quljw/Box.png?raw=1"></img>
			    	<h1>
						Box Blaster!
					</h1>
					<ul className="skills">
						<li> Unity </li>
						<li> C# </li>
						<li> Adobe Photoshop </li>
					</ul>
					<p> 
						A tower defense game, with the goal of defending your territory from box enemies by constructing Box Blaster Towers.
					</p>
				</div></li>
				<div className="source">
			    	
			    	<p> 
						Check out the source code for my projects including this website on my GitHub!
					</p>
					<div class="gitHubLink">
						<a href="https://github.com/edmundohh"><i class="fa fa-github fa-3x" aria-hidden="true"></i></a>
					</div>
					
				</div>
				
			</ul>
		</div>
			


			

			
		</div>




            
			
	   

	    
		



</body>
</header>
		)
	}
}

export default Projects;