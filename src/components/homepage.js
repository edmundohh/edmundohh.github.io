import React, { Component } from 'react';
import { Link } from 'react-router-dom';





class HomePage extends Component {

	// componentDidMount() {
	// document.getElementById("home-background").hide().fadeIn(1000);
	// }

	render() {
		
		return(
  <header>
   
  	<div className="home-background">
  	<div className='fade-in'>
  	
     <div className="home-title">
            Welcome.
      </div>  
      <ul className="home-main-nav">
        <div className="home-vertical">
            <li><Link to="/photos" > PHOTOS</Link></li>
            <li><Link to="/projects"> PROJECTS </Link></li>
            <li><Link to="/about"> ABOUT </Link></li>
          </div>
      </ul>
      <ul>
        <div className="home-media">
              <li><a href="https://www.instagram.com/edmund_oh/"><i class="fa fa-instagram fa-4x" aria-hidden="true"></i></a></li>
              <li><a href="https://github.com/edmundohh"><i class="fa fa-github fa-4x" aria-hidden="true"></i></a></li>
              <li><a href="https://www.linkedin.com/in/edmundoh/"><i class="fa fa-linkedin fa-4x" aria-hidden="true"></i></a></li>
        </div>
         </ul>     
 	</div> 
 	</div>
 	
 </header>
  
		)
	}
}

export default HomePage;