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
						A UBC Sublet system that allows users to sign up/log in, create posts, and make requests to posts in order to sublet an available room. Application database created using Oracle on the UBC undergrad server.
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
						Tower defense game that allows users to construct towers on the game map in order to prevent enemy boxes from reaching their destination portal. All animations and 2D sprites utilized in this game were designed on Adobe Photoshop.
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