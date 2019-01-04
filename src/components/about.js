import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
	render() {
		return(
			<header>
			<body>
	
		<div className="general-backgrund">
					<ul className="general-main-nav">
						<li><Link to="/"> HOME </Link></li>
						<li><Link to="/photos"> PHOTOS </Link></li>
						<li><Link to="/projects"> PROJECTS </Link></li>
						<li className="active"><Link to="/about"> ABOUT </Link></li>
				    </ul>
		<div className='fade-in'>				    	
		    <ul className="about">
		    	<li><div className="profile">
			    	<img src="https://www.dropbox.com/s/fgjy4luuo5myvyx/portrait.jpg?raw=1"></img>
			    	<h1>
						Edmund Oh
					</h1>
					
					<p> 
						Hey! Welcome to my portfolio website. <br/>
						I'm a 3rd year Integrated Sciences student integrating Computer Science and Geological Science at the University of British Columbia.<br/><br/>

						This website is made up of three main components: personal photography, projects and a short section about me. (If you don't want to read about me hopefully you can navigate to another page and find other cool stuff!)<br/><br/>

						I will be adding more things to this section in the near future. Stay tuned!
					</p>


				</div></li>
				<div className="email">
			    	
			    	
					<div className="emailIcon">
						<i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
					</div>
					<p> 
						1edmundoh@gmail.com
					</p>
					
				</div>
			  
				
			</ul>
			


			

			
		</div>
		</div>




            
			
	   

	    
		



</body>
</header>
		)
	}
}

export default About;