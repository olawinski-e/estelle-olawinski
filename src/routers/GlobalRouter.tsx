import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {NotFoundPage} from '../pages/NotFoundPage';

export const GlobalRouter = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/404" component={NotFoundPage} />
			</Switch>
		</Router>
	);
};
