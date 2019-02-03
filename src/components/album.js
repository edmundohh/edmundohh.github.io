import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

var page;

//albums
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
	{ src: 'https://www.dropbox.com/s/85ponstvz6nxymi/DSC_0416.jpg?raw=1', width: 2, height: 2 }, 
	{ src: 'https://www.dropbox.com/s/k55g4ijfog5q0dd/DSC_0121.jpg?raw=1', width: 4, height: 3 }	  
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

const ge = [
	{src: 'https://www.dropbox.com/s/ofv509002dco73t/background.JPG?raw=1', width: 2, height: 3},
	{src: 'https://www.dropbox.com/s/c7ut36lkzf44cnb/DSC_0110.JPG?raw=1', width: 2, height: 3},
	{src: 'https://www.dropbox.com/s/z5b6cnkfhg9u9x0/DSC_0120.JPG?raw=1', width: 2, height: 3},
	{src: 'https://www.dropbox.com/s/b5k0ia3g8p66e0x/DSC_0176.JPG?raw=1', width: 2, height: 3},
	{src: 'https://www.dropbox.com/s/m3y1jfrudib3mp8/DSC_0203.jpg?raw=1', width: 2, height: 3},
	{src: 'https://www.dropbox.com/s/m11eocbs5yxj6wh/DSC_0253%20%283%29.JPG?raw=1', width: 2, height: 3},
	{src: 'https://www.dropbox.com/s/knbc5sp1jk5ahn7/DSC_0521.jpg?raw=1', width: 2, height: 3},
	{src: 'https://www.dropbox.com/s/xjd3e6vojchit4z/IMG_8172.jpg?raw=1', width: 2, height: 3},
	{src: 'https://www.dropbox.com/s/qrbkoj0bqk0g2c8/IMG_8174.jpg?raw=1', width: 2, height: 3}
];

const sf = [
	{src: 'https://www.dropbox.com/s/f0ru1v4vvrfaqbd/DSC_7222.jpg?raw=1', width: 3, height: 3},
	{src: 'https://www.dropbox.com/s/w0ti1a7g3uj0i0e/DSC_7361.jpg?raw=1', width: 3, height: 2},
	{src: 'https://www.dropbox.com/s/du7oh9m1uzlf9m2/DSC_7392.jpg?raw=1', width: 3, height: 2},
	{src: 'https://www.dropbox.com/s/tw03q00tewn62y1/DSC_7503.jpg?raw=1', width: 3, height: 2},
	{src: 'https://www.dropbox.com/s/4h31erp6fvvenkg/DSC_7536.jpg?raw=1', width: 3, height: 2},
	{src: 'https://www.dropbox.com/s/xhm8q5vuddzrn4i/DSC_7688.jpg?raw=1', width: 5, height: 4},
	{src: 'https://www.dropbox.com/s/wyxb5osnb10l3ye/DSC_7763.jpg?raw=1', width: 3, height: 2},
	{src: 'https://www.dropbox.com/s/c9itgil1db6ihs1/IMG_4507.jpg?raw=1', width: 4, height: 3}
];

const cap = [
	{src: 'https://www.dropbox.com/s/f0os0vw5vl6apkq/DSC_0452.jpg?raw=1', width: 2, height: 3},
	{src: 'https://www.dropbox.com/s/tl87wlxsdbbb9u5/DSC_0439.jpg?raw=1', width: 2, height: 3},
	{src: 'https://www.dropbox.com/s/svhibi21zt2cdbt/DSC_0466.jpg?raw=1', width: 2, height: 3}
];

const chilliwacksunflower = [
	{ src: 'https://www.dropbox.com/s/8nj14wq6cgc9eyl/DSC_0290.jpg?raw=1', width: 2, height: 2 },
	{ src: 'https://www.dropbox.com/s/gdjgjuixa0wfzs3/DSC_0289.jpg?raw=1', width: 2, height: 3 },
    { src: 'https://www.dropbox.com/s/wfn8dhxa42rgvuq/DSC_0311.jpg?raw=1', width: 2, height: 3 },
    { src: 'https://www.dropbox.com/s/by4use78cwwh4fj/DSC_0370.jpg?raw=1', width: 2, height: 3 },
    { src: 'https://www.dropbox.com/s/lvzcdl14noz5ogu/DSC_0409.jpg?raw=1', width: 4, height: 3 },
    { src: 'https://www.dropbox.com/s/hn348tsdnj6amsm/DSC_0397.jpg?raw=1', width: 2, height: 3 },
	{ src: 'https://www.dropbox.com/s/ukf0vlifew149jf/DSC_0410.jpg?raw=1', width: 2, height: 3 },
	{ src: 'https://www.dropbox.com/s/7f4uaygjf2kmfm7/DSC_0443.jpg?raw=1', width: 2, height: 3 },
	{ src: 'https://www.dropbox.com/s/yk5q5198da4cb0s/DSC_0483.jpg?raw=1', width: 2, height: 3 }	  
];

const rainier = [
  	{ src: 'https://www.dropbox.com/s/aac2m2gdlh37evc/DSC_0613.jpg?raw=1', width: 3, height: 2 },
	{ src: 'https://www.dropbox.com/s/m5xsuqkelv7l97r/DSC_0578.jpg?raw=1', width: 3, height: 3 },
	{ src: 'https://www.dropbox.com/s/fztjelo1pm4jwv1/DSC_0638.jpg?raw=1', width: 3, height: 2 },
	{ src: 'https://www.dropbox.com/s/nw6rgijii3m1p4p/DSC_0582.jpg?raw=1', width: 6, height: 5 },
];

const dc =[
    { src: 'https://www.dropbox.com/s/kzspua3ch21gg7j/DSC_3488.jpg?raw=1', width: 3, height: 2 },
    { src: 'https://www.dropbox.com/s/j26hwsy3hudibeo/DSC_3724.jpg?raw=1', width: 3, height: 2 },
    { src: 'https://www.dropbox.com/s/nwb0vc5infkguql/DSC_3782.jpg?raw=1', width: 2, height: 3 },
	{ src: 'https://www.dropbox.com/s/pajzx7ohnk2f5ik/DSC_3538.jpg?raw=1', width: 3, height: 2 },
    { src: 'https://www.dropbox.com/s/g4ywsg028ya7iab/DSC_3728.jpg?raw=1', width: 2, height: 3 },
    { src: 'https://www.dropbox.com/s/vmtmc5519bpc0v0/DSC_3799.jpg?raw=1', width: 3, height: 3 },
	{ src: 'https://www.dropbox.com/s/rwcj3yumb0xplo6/DSC_3804.jpg?raw=1', width: 2, height: 3 }
];

const joffre = [
	{ src: 'https://www.dropbox.com/s/mfjvcrp5ejvslzw/DSC_0193.jpg?raw=1', width: 6, height: 5 },
	{ src: 'https://www.dropbox.com/s/v2mergusry07yq5/DSC_1054.jpg?raw=1', width: 3, height: 2 },
	{ src: 'https://www.dropbox.com/s/v9c0nwx3pqk969y/DSC_8421.jpg?raw=1', width: 3, height: 2 },
    { src: 'https://www.dropbox.com/s/p3aj7nhwyuvwr5u/DSC_1080.jpg?raw=1', width: 2, height: 3 },
    { src: 'https://www.dropbox.com/s/kxbyvlx4nqfwyfg/DSC_8638.jpg?raw=1', width: 3, height: 2 },
   	{ src: 'https://www.dropbox.com/s/fjo7ygj82giddc6/DSC_8392.jpg?raw=1', width: 3, height: 3 },
   	{ src: 'https://www.dropbox.com/s/kpxv4qavdpp9o3g/IMG_2903.jpg?raw=1', width: 3, height: 2 },
	{ src: 'https://www.dropbox.com/s/slzsoo0o5jchye8/DSC_8388.jpg?raw=1', width: 3, height: 2 }
];

const newyork = [
	{src: 'https://www.dropbox.com/s/37kxyryayj0jvfp/DSC_5290.jpg?raw=1', width: 3, height: 2},
	{src: 'https://www.dropbox.com/s/7cl0cnfk1k6gl2l/DSC_5408.jpg?raw=1', width: 2, height: 3},
	{src: 'https://www.dropbox.com/s/rvjmbycf2jn3t81/DSC_2919.jpg?raw=1', width: 4, height: 3},
	{src: 'https://www.dropbox.com/s/h22sqsv6ylnt40q/DSC_2890.jpg?raw=1', width: 3, height: 4},
	{src: 'https://www.dropbox.com/s/0qshnb3dej94tjl/DSC_2834.jpg?raw=1', width: 4, height: 3},
	{src: 'https://www.dropbox.com/s/yjkh12ud8tin85j/DSC_2941.jpg?raw=1', width: 3, height: 4},
	{src: 'https://www.dropbox.com/s/ihfegqt1pewzg23/DSC_2916.jpg?raw=1', width: 3, height: 2},
	{src: 'https://www.dropbox.com/s/37tybg9wehegao9/DSC_2871.jpg?raw=1', width: 3, height: 2},
	{src: 'https://www.dropbox.com/s/r1c6ez39ojy0t5k/DSC_5495.jpg?raw=1', width: 3, height: 2},
	{src: 'https://www.dropbox.com/s/k0l51cxplvecc64/DSC_5526.jpg?raw=1', width: 3, height: 2},
	{src: 'https://www.dropbox.com/s/tks005ji2urj1jj/DSC_2833.jpg?raw=1', width: 4, height: 3},
];

const philly = [
	{src: 'https://www.dropbox.com/s/zipnzq0gfxqgsan/DSC_2985.jpg?raw=1', width: 3, height: 2},
	{src: 'https://www.dropbox.com/s/mflr2hy7zlt8wlj/DSC_3146.jpg?raw=1', width: 3, height: 2},
	{src: 'https://www.dropbox.com/s/79p1ecfsv4e3ecj/DSC_2987.jpg?raw=1', width: 4, height: 3},
	{src: 'https://www.dropbox.com/s/ynpas20i12cwohr/DSC_3118.jpg?raw=1', width: 4, height: 4},
	{src: 'https://www.dropbox.com/s/1e73sjw66klrtr3/DSC_3171.jpg?raw=1', width: 4, height: 3}
];

const quebec = [
	{src: 'https://www.dropbox.com/s/x2jfdxw6sfhak2a/DSC_4630.jpg?raw=1', width: 3, height: 2},
	{src: 'https://www.dropbox.com/s/ruaeqw2jva6qya6/DSC_4640.jpg?raw=1', width: 2, height: 3},
	{src: 'https://www.dropbox.com/s/x4lfvimvufuodb0/DSC_4774.jpg?raw=1', width: 3, height: 2},
	{src: 'https://www.dropbox.com/s/3n13pwieu4lwclz/DSC_4815.jpg?raw=1', width: 3, height: 3},
	{src: 'https://www.dropbox.com/s/q9ox4kmo4lsk746/DSC_4856.jpg?raw=1', width: 2, height: 4},
	{src: 'https://www.dropbox.com/s/8n2i2f7q3hl6uce/DSC_5030.jpg?raw=1', width: 4, height: 3}
];

const niagara = [
	{ src: 'https://www.dropbox.com/s/85r10c7xxfnz6qn/DSC_4067.jpg?raw=1', width: 3, height: 2 },
	{ src: 'https://www.dropbox.com/s/w0y2lpkmnqq9yhr/DSC_3937.jpg?raw=1', width: 3, height: 3 },
	{ src: 'https://www.dropbox.com/s/nzu7xs8n448dxji/DSC_3954.jpg?raw=1', width: 2, height: 3 },
    { src: 'https://www.dropbox.com/s/bc68n09xe9a8ly9/DSC_4065.jpg?raw=1', width: 3, height: 2 },
    { src: 'https://www.dropbox.com/s/tumnvbt4jvclmor/DSC_4284.jpg?raw=1', width: 4, height: 3 },
    { src: 'https://www.dropbox.com/s/fct3126tlbo3saz/DSC_4289.jpg?raw=1', width: 3, height: 2 },
   	{ src: 'https://www.dropbox.com/s/45ed7iz9d2ty7mh/DSC_4256.jpg?raw=1', width: 3, height: 2 },
	{ src: 'https://www.dropbox.com/s/7d0j7kowt1g9zyi/DSC_3991.jpg?raw=1', width: 3, height: 2 }
];

const alberta = [
    { src: 'https://www.dropbox.com/s/ddupl6a3l0stc7w/DSC_9912.jpg?raw=1', width: 5, height: 4 },
        { src: 'https://www.dropbox.com/s/60ed80agg85xg5a/DSC_9921.jpg?raw=1', width: 3, height: 2 },
	{ src: 'https://www.dropbox.com/s/01nu84cxnnp63rq/DSC_9875.jpg?raw=1', width: 3, height: 2 },
	{ src: 'https://www.dropbox.com/s/an1i1bz9zbqvvin/DSC_9880.jpg?raw=1', width: 3, height: 2 },
    { src: 'https://www.dropbox.com/s/mwol1um48tbb7p6/DSC_9814.jpg?raw=1', width: 9, height: 8 },
   	{ src: 'https://www.dropbox.com/s/8pgis7bec7ne7pk/DSC_9931.jpg?raw=1', width: 3, height: 2 },
   	{ src: 'https://www.dropbox.com/s/gr4yzydpbc8xo44/DSC_9948.jpg?raw=1', width: 6, height: 5 }
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
	

  	render() {

  	switch(this.props.match.params.id) {
  		case "hawaii":
	  		page = hawaii;
	  		break;
  		case "oregon":
	  		page = oregon;
	  		break;
  		case "bc":
	  		page = bc;
	  		break;
	  	case "goldenears":
	  		page = ge;
	  		break;
	  	case "sanfrancisco":
	  		page = sf;
	  		break;
	  	case "capilano":
	  		page = cap;
	  		break;
	  	case "chilliwacksunflower":
	  		page = chilliwacksunflower;
	  		break;
	  	case "rainier":
	  		page = rainier;
	  		break;
	  	case "dc":
	  		page = dc;
	  		break;
	  	case "joffre":
	  		page = joffre;
	  		break;
	  	case "newyork":
	  		page = newyork;
	  		break;
	  	case "philadelphia":
	  		page = philly;
	  		break;
	  	case "quebec":
	  		page = quebec;
	  		break;
	  	case "niagara":
	  		page = niagara;
	  		break;
	  	case "ab":
	  		page = alberta;
	  		break;
  		default:
  		    page = hawaii;
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
      <div className="photography">
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