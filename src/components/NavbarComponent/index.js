import React, { Component } from 'react'
import {
	Container, Row, Col, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText
} from 'reactstrap'

import flagBrazil from './../../assets/images/flags/brazil.png'
import flagUsa from './../../assets/images/flags/usa.png'
import flagSpain from './../../assets/images/flags/spain.png'
import logo_smyrna_white from './../../assets/images/logos/logo-smyrnabrasil.png'

import './navbar.scss'

import { FiInstagram, FiFacebook, FiYoutube } from 'react-icons/fi'

import ReactGA from 'react-ga'

const INITIAL_STATE = {
	isOpen: false,
	languages: {
		home: {
			pt_BR: 'HOME',
			en_US: 'HOME',
			es_ES: 'HOME'
		},
		about: {
			pt_BR: 'HISTÓRIA',
			en_US: 'ABOUT',
			es_ES: 'SOBRE'
		},
		products: {
			pt_BR: 'PRODUTOS',
			en_US: 'PRODUCTS',
			es_ES: 'PRODUCTOS'
		},
		blog: {
			pt_BR: 'BLOG',
			en_US: 'BLOG',
			es_ES: 'BLOG'
		},
		contact: {
			pt_BR: 'CONTATO',
			en_US: 'CONTACT',
			es_ES: 'CONTACTO'
		}
	}
}

class NavbarComponent extends Component {
	constructor(props) {
		super(props)

		this.toggle = this.toggle.bind(this)

		this.state = { ...INITIAL_STATE }
	}

	componentDidMount = () => {
		// ReactGA.initialize('UA-176583286-1')
		// ReactGA.event({
		// 	category: 'page',
		// 	action: 'User has entered at home page'
		// })
	}

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	render() {
		const { isOpen, languages } = this.state
		const { updateLanguage, selectedLanguage } = this.props
		const { pathname } = window.location
		return (
			<>
				<Container fluid id="navbar">
					<Navbar dark expand="md">
						<NavbarBrand href="/">
							<img src={logo_smyrna_white} width="160px" className="img-fluid" alt="Smyrna Flavors" />
						</NavbarBrand>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={isOpen} navbar>
							<Nav className="mr-auto" navbar>
								<NavItem>
									<NavLink href="/">{languages.home[selectedLanguage]}</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="/about">{languages.about[selectedLanguage]}</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="/products">{languages.products[selectedLanguage]}</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="/contact">{languages.contact[selectedLanguage]}</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="/blog">{languages.blog[selectedLanguage]}</NavLink>
								</NavItem>
								{/* <UncontrolledDropdown nav inNavbar>
									<DropdownToggle nav caret>
										Options
              		</DropdownToggle>
									<DropdownMenu right>
										<DropdownItem>
											Option 1
										</DropdownItem>
										<DropdownItem>
											Option 2
                		</DropdownItem>
										<DropdownItem divider />
										<DropdownItem>
											Reset
                		</DropdownItem>
									</DropdownMenu>
								</UncontrolledDropdown> */}
							</Nav>
							<Nav className="ml-auto" navbar>
								<div className="d-flex flex-column">
									<div className="selecting-languages d-flex flex-row p-2">
										<span className="ml-2 mr-2">
											<img className="img-fluid" width="25px" style={{ filter: (selectedLanguage !== 'pt_BR' ? "grayscale(100%)" : "") }} onClick={() => updateLanguage('pt_BR')} src={flagBrazil} alt="brazil" />
										</span>
										<span className="ml-2 mr-2">
											<img className="img-fluid" width="25px" style={{ filter: (selectedLanguage !== 'en_US' ? "grayscale(100%)" : "") }} onClick={() => updateLanguage('en_US')} src={flagUsa} alt="united states" />
										</span>
										<span className="ml-2 mr-2">
											<img className="img-fluid" width="25px" style={{ filter: (selectedLanguage !== 'es_ES' ? "grayscale(100%)" : "") }} onClick={() => updateLanguage('es_ES')} src={flagSpain} alt="spain" />
										</span>
									</div>
									<div className="social-media mx-auto d-flex flex-row p-2">
										<span className="ml-2 mr-2">
											<a href="https://www.instagram.com/smyrnabrasil/?hl=pt-br" rel="noopener noreferrer" target="_blank">
												<FiInstagram />
											</a>
										</span>
										<span className="ml-2 mr-2">
											<a href="https://www.facebook.com/SmyrnaBrasil/" rel="noopener noreferrer" target="_blank">
												<FiFacebook />
											</a>
										</span>
										<span className="ml-2 mr-2">
											<a href="https://www.youtube.com/channel/UCQoMsyrcJvx3f1u6sjsX2Mg" rel="noopener noreferrer" target="_blank">
												<FiYoutube />
											</a>
										</span>
									</div>
								</div>
								{/* <NavItem>
									<NavLink href="/">HOME</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="/about">SOBRE</NavLink>
								</NavItem> */}
							</Nav>
							{/* <NavbarText>Simple Text</NavbarText> */}
						</Collapse>
					</Navbar>
				</Container>
			</>
		)
	}
}

export default NavbarComponent