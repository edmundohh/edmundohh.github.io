import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

var page;

const photos = [
  	{ src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599', width: 4, height: 3 },
	{ src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799', width: 1, height: 1 },
	{ src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', width: 3, height: 4 },
	{ src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', width: 3, height: 4 },
	{ src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', width: 3, height: 4 },
	{ src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599', width: 4, height: 3 },
	{ src: 'https://source.unsplash.com/zh7GEuORbUw/600x799', width: 3, height: 4 },
	{ src: 'https://source.unsplash.com/PpOHJezOalU/800x599', width: 4, height: 3 },
    { src: 'https://source.unsplash.com/I1ASdgphUH4/800x599', width: 4, height: 3 }
];

const hawaii = [
	{ src: 'https://www.dropbox.com/s/wak389tme7eaviw/DSC_0061.jpg?raw=1', width: 3, height: 2 },
	{ src: 'https://www.dropbox.com/s/l5u46agbly8nuxa/DSC_0633.jpg?raw=1', width: 2, height: 3 },
    { src: 'https://www.dropbox.com/s/xm5trhosnmf4i18/DSC_0194.jpg?raw=1', width: 2, height: 3 },
	{ src: 'https://www.dropbox.com/s/pl7a4i4dhed8vo0/DSC_0552.jpg?raw=1', width: 2, height: 3 },
    { src: 'https://www.dropbox.com/s/jbukzorqfg04gv7/DSC_0549.jpg?raw=1', width: 2, height: 3 },
    { src: 'https://www.dropbox.com/s/q4mvy47aw7sypm4/DSC_0673.jpg?raw=1', width: 5, height: 3 },
	{ src: 'https://www.dropbox.com/s/z47ftjyx1amqy2s/DSC_0288.jpg?raw=1', width: 2, height: 3 },
	{ src: 'https://www.dropbox.com/s/qeuq0fb6aq6ra4c/DSC_0418.jpg?raw=1', width: 3, height: 2 },
	{ src: 'https://www.dropbox.com/s/qb6gl6l31g4losq/DSC_0130.jpg?raw=1', width: 2, height: 3 },
	{ src: 'https://www.dropbox.com/s/bygeatxmjnm9owa/DSC_0211.jpg?raw=1', width: 2, height: 3 },
	{ src: 'https://www.dropbox.com/s/orm900p5nm01gmo/DSC_0609.jpg?raw=1', width: 4, height: 3 },
	{ src: 'https://www.dropbox.com/s/d7hutdcrl4h6hkk/DSC_0123.jpg?raw=1', width: 2, height: 3 },
	{ src: 'https://www.dropbox.com/s/415dwkdlby0ttbx/DSC_0111.jpg?raw=1', width: 3, height: 2 },
	{ src: 'https://www.dropbox.com/s/4luh2x2j8f20lqp/DSC_0508.jpg?raw=1', width: 6, height: 5 },
	{ src: 'https://www.dropbox.com/s/k55g4ijfog5q0dd/DSC_0121.jpg?raw=1', width: 4, height: 3 },
	{ src: 'https://www.dropbox.com/s/85ponstvz6nxymi/DSC_0416.jpg?raw=1', width: 2, height: 2 } 	  
];

const oregon = [
	{ src: 'https://www.dropbox.com/s/pt3tgxd1vpedu2a/DSC_5681.jpg?raw=1', width: 3, height: 2 },
	{ src: 'https://www.dropbox.com/s/bwwai7ijqxhgeim/DSC_5912.jpg?raw=1', width: 3, height: 2 },
	{ src: 'https://www.dropbox.com/s/var1m15zpdp9rmb/DSC_5866.jpg?raw=1', width: 7, height: 6 },
	{ src: 'https://www.dropbox.com/s/slxu296aho13eux/DSC_5886.jpg?raw=1', width: 3, height: 2 },
	{ src: 'https://www.dropbox.com/s/xc5qdeyy79syjog/IMG_5783.jpg?raw=1', width: 2, height: 3 },
	{ src: 'https://www.dropbox.com/s/iwr55qph9ya7nik/DSC_5730.jpg?raw=1', width: 3, height: 2 },
	{ src: 'https://www.dropbox.com/s/ez6lvnpvck7y068/IMG_4061%20%281%29.jpg?raw=1', width: 3, height: 2 },
	{ src: 'https://www.dropbox.com/s/awmjspyj4gko2da/DSC_5968.jpg?raw=1', width: 5, height: 4 },
	{ src: 'https://www.dropbox.com/s/9mdfow9hg61oxdw/DSC_5992.jpg?raw=1', width: 5, height: 4 },
	{ src: 'https://www.dropbox.com/s/xee1gzca5s7qay0/DSC_5941.jpg?raw=1', width: 3, height: 2 },
	{ src: 'https://www.dropbox.com/s/mov4qo0n5ofrcc8/DSC_5896.jpg?raw=1', width: 2, height: 3 }
	
];

const bc = [
	{src: 'https://www.dropbox.com/s/8st9vkq84bxf873/DSC_0511.jpg?raw=1', width: 3, height: 2},
	{src: 'https://www.dropbox.com/s/cmr7yxouikojt6c/DSC_0264%20%281%29.JPG?raw=1', width: 2, height: 3},
	{src: 'https://www.dropbox.com/s/934gg4orqhp6c7x/DSC_0031.JPG?raw=1', width: 2, height: 3},
	{src: 'https://www.dropbox.com/s/m2ysh6rf1nxci50/IMG_E4296.jpg?raw=1', width: 2, height: 3},
	{src: 'https://www.dropbox.com/s/wr32xhj5usbqrv9/DSC_0040.JPG?raw=1', width: 2, height: 3},
	{src: 'https://www.dropbox.com/s/pdwjhil8xmwkw89/DSC_0239.jpg?raw=1', width: 2, height: 3},
	{src: 'https://www.dropbox.com/s/bmxex4fu9b7plk2/DSC_0259%20%281%29.jpg?raw=1', width: 2, height: 3},
	{src: 'https://www.dropbox.com/s/2fwru6y4p6ko7e8/DSC_0023.JPG?raw=1', width: 3, height: 2},
	{src: 'https://www.dropbox.com/s/mmxljmdb9zrg60e/DSC_0098%20%281%29.JPG?raw=1', width: 2, height: 3},
	{src: 'https://www.dropbox.com/s/ug7ilgw37ob3vpo/DSC_0293.jpg?raw=1', width: 2, height: 3},
	{src: 'https://www.dropbox.com/s/sw1ozxjp3242vge/DSC_0508.jpg?raw=1', width: 2, height: 3},
	{src: 'https://www.dropbox.com/s/087eibhpjogae5v/IMG_4245.jpg?raw=1', width: 2, height: 3}
];

class Album extends React.Component {
	constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
   	openLightbox(event, obj) {
	    this.setState({
	      currentImage: obj.index,
	      lightboxIsOpen: true,
	    });
  	}
  	closeLightbox() {
	    this.setState({
	      currentImage: 0,
	      lightboxIsOpen: false,
	    });
  	}
  	gotoPrevious() {
	    this.setState({
	      currentImage: this.state.currentImage - 1,
	    });
  	}
  	gotoNext() {
    	this.setState({
      	currentImage: this.state.currentImage + 1,
    	});
  	}
  	componentDidMount() {
    	setTimeout(() => {document.getElementById("album-overlay").style.visibility = "hidden"}, 1250)
	}
	
	componentWillUnmount() {
		document.getElementById("album-overlay").style.visibility = "visible";
	}
  	render() {
  	
  	if (this.props.match.params.id == "hawaii") {
  		page = hawaii;
  	} 
  	else
  	if (this.props.match.params.id == "oregon") {
  		page = oregon;
  	}
  	else
  	if (this.props.match.params.id == "bc") {
  		page = bc;
  	}
  	else
  	{
  		page = photos;
  	}
  	//remove the loading spinner on load event
  	window.addEventListener('load', function(){
		document.getElementById("album-overlay").style.visibility = "hidden";
		})

    return (
    	<header>
				<body>
					<div id="album-overlay">
						<div class="spinner"></div> 
					</div>
					<div className="general-backgrund">
					<ul className="general-main-nav">
						<li><Link to="/"> HOME </Link></li>
						<li className="active"><Link to="/photos"> PHOTOS </Link></li>
						<li><Link to="/projects"> PROJECTS </Link></li>
						<li><Link to="/about"> ABOUT </Link></li>
				    </ul>
      <div>
      <div><h1>{this.props.match.params.id}</h1></div>
        <Gallery photos={page} onClick={this.openLightbox} />
        <Lightbox images={page}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
      </div>
      </body>
      </header>
    )

  }
}

export default Album;