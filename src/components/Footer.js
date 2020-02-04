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
					<p>handbuilt with React.js</p>
				</div>
            </div>
		);
	}
}

export default Footer;