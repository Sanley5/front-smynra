import React, { Component } from 'react'
import {
	Row,
	Col,
	Container,
	Modal,
	ModalBody,
	Button
} from 'reactstrap'

import flagBrazil from './../../assets/images/flags/brazil.png'
import flagUsa from './../../assets/images/flags/usa.png'
import flagSpain from './../../assets/images/flags/spain.png'
import logo_smyrna_white from './../../assets/images/logos/logo-smyrnabrasil.png'

import './header.scss'

import LoadingComponent from './../Loading/component'

import ReactGA from 'react-ga'

const INITIAL_STATE = {
	confirmAge: true,
	loading: true,
	languages: {
		chooseLanguage: {
			pt_BR: 'ESCOLHA SEU IDIOMA:',
			en_US: 'CHOOSE YOUR LANGUAGE:',
			es_ES: 'ELIJE TU IDIOMA:'
		},
		overAge: {
			pt_BR: 'VOCÊ POSSUI MAIS DE 18 ANOS?',
			en_US: 'ARE YOU OVER 18?',
			es_ES: '¿TIENES MÁS DE 18 AÑOS?'
		},
		overAgeButtonYes: {
			pt_BR: 'SIM',
			en_US: 'YES',
			es_ES: 'SÍ'
		},
		overAgeButtonNo: {
			pt_BR: 'NÃO',
			en_US: 'NO',
			es_ES: 'NO'
		},
		warning: {
			pt_BR: 'AVISO:',
			en_US: 'WARNING:',
			es_ES: 'ADVERTENCIA:'
		},
		warningText: {
			pt_BR: 'ESTE PRODUTO CONTÉM NICOTINA. FUMAR É PREJUDICIAL À SAÚDE E CAUSA DEPENDÊNCIA. PRODUTO PROIBIDO PARA MENORES DE 18 ANOS.',
			en_US: 'THIS PRODUCT CONTAINS NICOTINE. SMOKING IS HARMFUL TO HEALTH AND CAUSES DEPENDENCE. PROHIBITED FOR UNDER 18 YEARS.',
			es_ES: 'ESTE PRODUCTO CONTIENE NICOTINA. FUMAR ES PERJUDICIAL PARA LA SALUD Y CAUSA DEPENDENCIA. PRODUCTO PROHIBIDO PARA MENORES DE 18 AÑOS.'
		}
	}
}

class HeaderComponent extends Component {
	constructor(props) {
		super(props)

		this.toggle = this.toggle.bind(this)

		this.state = { ...INITIAL_STATE }
	}

	componentDidMount = () => {
		ReactGA.initialize('UA-176583286-1')
		ReactGA.event({
			category: 'page',
			action: 'User has entered at home page'
		})
		this.checkAge()
	}

	checkAge = () => {
		const overAge = localStorage.getItem('overAge')

		if (overAge) {
			this.setState({
				confirmAge: false,
				loading: false
			})
		} else {
			this.setState({
				loading: false
			})
		}
	}

	toggle = () => {
		this.setState({
			confirmAge: !this.state.confirmAge
		})
	}

	handleOverAgeUser = () => {
		localStorage.setItem('overAge', true)
		this.toggle()
	}

	render() {
		const { confirmAge, languages, loading } = this.state
		const { updateLanguage, selectedLanguage } = this.props

		if (loading) {
			return (
				<LoadingComponent />
			)
		}

		return (
			<>
				{/* <Container fluid id="header-component">
					<Row>
						<Col sm="12" md={{ size: 6, offset: 3 }} className="text-center">
							<div className="banner-header">
								<h3>O Poder da Verdadeira Essência</h3>
								<h5>As essências Smyrna são diferentes de tudo que você já provou antes.</h5>
								<Button className="btn-know-products">Conheça nossos produtos</Button>
							</div>
						</Col>
					</Row>
				</Container> */}
				<Modal size="xl" centered isOpen={confirmAge}>
					<ModalBody className="text-center over-age pb-0 text-white">
						<Row className="mt-5 pt-5">
							<img src={logo_smyrna_white} alt="Smyrna Flavors" className="img-fluid mx-auto" />
						</Row>
						<Row className="p-5">
							<Col xs="12">
								<h3>{languages.chooseLanguage[selectedLanguage]}</h3>
								<div className="mx-auto selecting_languages">
									<span className="m-2">
										<img style={{ filter: (selectedLanguage !== 'pt_BR' ? "grayscale(100%)" : "") }} onClick={() => updateLanguage('pt_BR')} src={flagBrazil} alt="brazil" />
									</span>
									<span className="m-2">
										<img style={{ filter: (selectedLanguage !== 'en_US' ? "grayscale(100%)" : "") }} onClick={() => updateLanguage('en_US')} src={flagUsa} alt="united states" />
									</span>
									<span className="m-2">
										<img style={{ filter: (selectedLanguage !== 'es_ES' ? "grayscale(100%)" : "") }} onClick={() => updateLanguage('es_ES')} src={flagSpain} alt="spain" />
									</span>
								</div>
							</Col>
						</Row>
						<Row className="p-5">
							<Col xs="12">
								<h3>{languages.overAge[selectedLanguage]}</h3>
								<Button className="m-3" block color="danger" outline>{languages.overAgeButtonNo[selectedLanguage]}</Button>
								<Button onClick={() => this.handleOverAgeUser()} className="m-3" block color="success" outline>{languages.overAgeButtonYes[selectedLanguage]}</Button>
							</Col>
						</Row>
						<Row className="bg-white text-dark">
							<Col xs="12" className="p-0">
								<strong>{languages.warning[selectedLanguage]} </strong>
								{languages.warningText[selectedLanguage]}
							</Col>
						</Row>
					</ModalBody>
				</Modal>
			</>
		)
	}
}

export default HeaderComponent