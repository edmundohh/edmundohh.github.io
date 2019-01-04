import React from 'react';

import { HashRouter, Switch, Route } from 'react-router-dom';
import HomePage from './homepage';
import Photos from './photos';
import Projects from './projects';
import About from './about';
import Album from './album';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Main = () => (
	<HashRouter>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/photos" component={Photos} />
				<Route exact path="/album/:id" render={props => <Album {...props} />} />
				<Route exact path="/projects" component={Projects} />
				<Route exact path="/about" component={About} />
			</Switch>
	</HashRouter>	
	
	
)

export default Main;