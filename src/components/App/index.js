import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomePage from '../../pages/Home'
import HeaderPage from '../../pages/Header'
import AboutPage from '../../pages/About'
import ContactPage from '../../pages/Contact'
import ProductsPage from '../../pages/Products'
import BlogPage from '../../pages/Blog'
import FooterComponent from './../Footer'
import NotFound from '../NotFound'

import * as ROUTES from '../../constants/routes'

import './app.scss'

import ReactGA from 'react-ga'
import NavbarComponent from '../NavbarComponent'

const INITIAL_STATE = {
	selectedLanguage: 'pt_BR'
}

class AppComponent extends Component {
	constructor(props) {
		super(props)

		this.state = { ...INITIAL_STATE }
	}

	componentDidMount = () => {
		// const { selectedLanguage } = this.props
		// console.log(selectedLanguage)
		// if(selectedLanguage) {
		// 	this.setState({
		// 		selectedLanguage
		// 	})
		// }

		// ReactGA.initialize('UA-176583286-1')
		// ReactGA.event({
		// 	category: 'page',
		// 	action: 'User has entered at home page'
		// })
	}

	handleUpdateLanguage = (selectedLanguage) => {
		this.setState({
			selectedLanguage
		})
	}

	render() {
		const { selectedLanguage } = this.state
		return (
			<>
				<Router>
					<div id="main">
						<NavbarComponent selectedLanguage={selectedLanguage} updateLanguage={(selectedLanguage) => this.handleUpdateLanguage(selectedLanguage)} {...this.props} />
						<Switch>
							<Route exact path={ROUTES.ENTER} render={(props) => <HeaderPage selectedLanguage={selectedLanguage} updateLanguage={(selectedLanguage) => this.handleUpdateLanguage(selectedLanguage)} {...props} />} />
							<Route exact path={ROUTES.HOME} render={(props) => <HeaderPage selectedLanguage={selectedLanguage} updateLanguage={(selectedLanguage) => this.handleUpdateLanguage(selectedLanguage)} {...props} />} />
							<Route exact path={ROUTES.ABOUT} render={(props) => <AboutPage selectedLanguage={selectedLanguage} updateLanguage={(selectedLanguage) => this.handleUpdateLanguage(selectedLanguage)} {...props} />} />
							<Route exact path={ROUTES.CONTACT} render={(props) => <ContactPage selectedLanguage={selectedLanguage} updateLanguage={(selectedLanguage) => this.handleUpdateLanguage(selectedLanguage)} {...props} />} />
							<Route exact path={ROUTES.PRODUCTS} render={(props) => <ProductsPage selectedLanguage={selectedLanguage} updateLanguage={(selectedLanguage) => this.handleUpdateLanguage(selectedLanguage)} {...props} />} />
							<Route exact path={ROUTES.BLOG} render={(props) => <BlogPage selectedLanguage={selectedLanguage} updateLanguage={(selectedLanguage) => this.handleUpdateLanguage(selectedLanguage)} {...props} />} />
							<Route exact path={ROUTES.NOTFOUND} render={(props) => <NotFound {...props} />} />
						</Switch>
					</div>
					<Route exact path={ROUTES.ENTER} render={(props) => <HomePage {...props} />} />
					<FooterComponent />
				</Router>
			</>
		)
	}
}

export default AppComponent