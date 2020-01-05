import React from 'react';

import { HashRouter, Switch, Route } from 'react-router-dom';
import Photos from './Photos';
import Projects from './Projects';
import About from './Profile';
import Album from './album';
import Profile from './Profile';

const Main = () => (
	<HashRouter>
			<Switch>
				<Route exact path="/" component={Profile} />
				<Route exact path="/photos" component={Photos} />
				<Route exact path="/album/:id" render={props => <Album {...props} />} />
				<Route exact path="/projects" component={Projects} />
				<Route exact path="/about" component={About} />
			</Switch>
	</HashRouter>	
	
	
)

export default Main;