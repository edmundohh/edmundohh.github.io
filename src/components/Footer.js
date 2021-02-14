import React, { Component } from 'react';
import '../css/Footer.css';

class Footer extends Component {
	render() {
		return(
			<div className="footer-section">
				<div className="email">
					<a href="mailto: 1edmundoh@gmail.com">1edmundoh@gmail.com</a>
				</div>
				<div className="footer">
					<p>Built with React.js | Edmund Oh &copy; 2021</p>
				</div>
      </div>
		);
	}
}

export default Footer;