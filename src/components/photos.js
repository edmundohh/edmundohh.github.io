import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransitioin, TransitionGroup } from 'react-transition-group';


class Photos extends Component {

	//remove the loading spinner after set time if on load event does not fire
	componentDidMount() {
    setTimeout(() => {document.getElementById("overlay").style.visibility = "hidden"}, 1300)
	}

	componentWillUnmount() {
		document.getElementById("overlay").style.visibility = "visible";
	}

	render() {
		//remove the loading spinner on load event
		window.addEventListener('load', function(){
		document.getElementById("overlay").style.visibility = "hidden";
		})

		return(
		
			<header>


		
				<body>
					<div id="overlay">
						<div class="spinner"></div> 
					</div>
					<div className="general-backgrund">
					<ul className="general-main-nav">
						<li><Link to="/"> HOME </Link></li>
						<li className="active"><Link to="/photos"> PHOTOS </Link></li>
						<li><Link to="/projects"> PROJECTS </Link></li>
						<li><Link to="/about"> ABOUT </Link></li>
				    </ul>
				<div className='fade-in'>
				    <div className="row"> 
					  <div className="column">
					    <div className="box">
						    <Link to="/album/hawaii">
							    <img src="https://www.dropbox.com/s/pl7a4i4dhed8vo0/DSC_0552.jpg?raw=1"></img>
								<div className="detail">
								<div className="text">Hawaii</div>
								</div>
						    </Link>
					    </div>
					    <div className="box">
						    <Link to="/album/sanfrancisco">
							    <img src="https://www.dropbox.com/s/wyxb5osnb10l3ye/DSC_7763.jpg?raw=1"></img>
								    <div className="detail">
								    	<div className="text">San Francisco/Pebble Beach</div>
								    </div>
						    </Link>
					    </div>
					    <div className="box">
						    <Link to="/album/capilano">
							    <img src="https://www.dropbox.com/s/f0os0vw5vl6apkq/DSC_0452.jpg?raw=1"></img>
								    <div className="detail">
								    	<div className="text">Capilano Suspension Bridge</div>
								    </div>
						    </Link>
					    </div>
					    <div className="box">
						    <Link to="/album/philadelphia">
							    <img src="https://www.dropbox.com/s/mflr2hy7zlt8wlj/DSC_3146.jpg?raw=1"></img>
								    <div className="detail">
								    	<div className="text">Philadelphia</div>
								    </div>
						    </Link>
					    </div>
					    <div className="box">
						    <Link to="/album/quebec">
							    <img src="https://www.dropbox.com/s/ruaeqw2jva6qya6/DSC_4640.jpg?raw=1"></img>
								    <div className="detail">
								    	<div className="text">Montreal/Québec</div>
								    </div>
						    </Link>
					    </div>
					    
					    
					  </div>
					  
					  <div className="column">
					  	<div className="box">
						    <Link to="/album/oregon">
							    <img src="https://www.dropbox.com/s/bwwai7ijqxhgeim/DSC_5912.jpg?raw=1"></img>
								    <div className="detail">
								    	<div className="text">Oregon</div>
								    </div>
						    </Link>
					    </div>
					    <div className="box">
						    <Link to="/album/bc">
							    <img src="https://www.dropbox.com/s/cmr7yxouikojt6c/DSC_0264%20%281%29.JPG?raw=1"></img>
								    <div className="detail">
								    	<div className="text">Explore BC</div>
								    </div>
						    </Link>
					    </div> 
					  	<div className="box">
						    <Link to="/album/newyork">
							    <img src="https://www.dropbox.com/s/rvjmbycf2jn3t81/DSC_2919.jpg?raw=1"></img>
								    <div className="detail">
								    	<div className="text">New York</div>
								    </div>
						    </Link>
					    </div>
					    <div className="box">
						    <Link to="/album/chilliwacksunflower">
							    <img src="https://www.dropbox.com/s/gdjgjuixa0wfzs3/DSC_0289.jpg?raw=1"></img>
								    <div className="detail">
								    	<div className="text">Chilliwack Sunflower Festival</div>
								    </div>
						    </Link>
					    </div> 
					    <div className="box">
						    <Link to="/album/rainier">
							    <img src="https://www.dropbox.com/s/aac2m2gdlh37evc/DSC_0613.jpg?raw=1"></img>
								    <div className="detail">
								    	<div className="text">Mount Rainier National Park</div>
								    </div>
						    </Link>
					    </div>
					     

					   
					   
					  </div>
					  <div className="column">
					  	<div className="box">
						    <Link to="/album/goldenears">
							    <img src="https://www.dropbox.com/s/bqwv4x1zo4k19ap/DSC_0288%20%281%29.JPG?raw=1"></img>
								    <div className="detail">
								    	<div className="text">Golden Ears Provincial Park</div>
								    </div>
						    </Link>
					    </div>
					    <div className="box">
						    <Link to="/album/niagara">
							    <img src="https://www.dropbox.com/s/tumnvbt4jvclmor/DSC_4284.jpg?raw=1"></img>
								    <div className="detail">
								    	<div className="text">Niagara Falls</div>
								    </div>
						    </Link>
					    </div>
					     <div className="box">
						    <Link to="/album/joffre">
							    <img src="https://www.dropbox.com/s/p3aj7nhwyuvwr5u/DSC_1080.jpg?raw=1"></img>
								    <div className="detail">
								    	<div className="text">Brandywine Falls/Joffre Lake/Sea to Sky</div>
								    </div>
						    </Link>
					    </div>
					    <div className="box">
						    <Link to="/album/ab">
							    <img src="https://www.dropbox.com/s/60ed80agg85xg5a/DSC_9921.jpg?raw=1"></img>
								    <div className="detail">
								    	<div className="text">Alberta</div>
								    </div>
						    </Link>
					    </div> 
					    <div className="box">
						    <Link to="/album/dc">
							    <img src="https://www.dropbox.com/s/vmtmc5519bpc0v0/DSC_3799.jpg?raw=1"></img>
								    <div className="detail">
								    	<div className="text">Washington DC</div>
								    </div>
						    </Link>
					    </div>
					    
					    

					   
					   
					   
					  </div>  
					  
					

				
				</div>
				    </div>
				    </div>
			    </body>
		    </header>


        
		)
	}

}


export default Photos;