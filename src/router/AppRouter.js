import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Navbar from '../components/Navbar'
import TeamsPlayers from '../pages/TeamsPlayers'
import Comparison from '../pages/Comparison'
import Favourites from '../pages/Favourites'

function AppRouter() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path="/comparison" component={Comparison} />
				<Route path="/favourites" component={Favourites} />
				<Route path="/" component={TeamsPlayers} />
			</Switch>
		</Router>
	)
}

export default AppRouter
