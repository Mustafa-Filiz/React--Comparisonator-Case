import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Navbar from '../components/Navbar'

function AppRouter() {
	return (
		<Router>
			<Navbar />
		</Router>
	)
}

export default AppRouter
