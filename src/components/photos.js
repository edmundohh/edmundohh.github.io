import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Photos.css';

import image1 from '../images/main/cannon.jpg'
import image2 from '../images/main/rainier.jpg'
import image3 from '../images/main/or_sunset.jpg'
import image4 from '../images/main/seadoge.jpg'
import image5 from '../images/main/hawaii.jpg'
import image6 from '../images/main/or_sunset2.jpg'

class Photos extends Component {

	render() {
		return(
			<div className="photos-section">
				<div className="photos-header">
					<h1>photos</h1>
				</div>
				<div className="photos">
					<div className="column">
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image1 }></img>
							{/* </Link> */}
						</div>
						<div className="box">
							{/* <Link to="/album/rainier"> */}
								<img src={ image2 }></img>
							{/* </Link> */}
						</div> 
					</div>
					<div className="column">
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image3 }></img>
							{/* </Link>  */}
						</div>
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image4 }></img>
							{/* </Link>  */}
						</div>
					</div>
					<div className="column">
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image5 }></img>	
							{/* </Link> */}
						</div>
						<div className="box">
							{/* <Link to="/album/goldenears"> */}
								<img src={ image6 }></img>	
							{/* </Link> */}
						</div>		   
					</div>  	  		  
				</div>
				<div className="photos-link">
					photo section coming soon...
				</div>
			</div>
		);
	}

}


export default Photos;