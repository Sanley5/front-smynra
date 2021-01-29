import React, { Component } from 'react'
import {
	Row,
	Col,
	Container,
	Modal,
	ModalBody,
	Button
} from 'reactstrap'

import './contact.scss'

import LoadingComponent from './../Loading/component'

import { MdEmail } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'

import ReactGA from 'react-ga'
import DividerComponent from '../Divider'

const INITIAL_STATE = {
	loading: false,
	languages: {
		chooseLanguage: {
			pt_BR: '',
			en_US: '',
			es_ES: ''
		}
	}
}

class ContactComponent extends Component {
	constructor(props) {
		super(props)

		this.state = { ...INITIAL_STATE }
	}

	componentDidMount = () => {
		ReactGA.initialize('UA-176583286-1')
		ReactGA.event({
			category: 'page',
			action: 'User has entered at contact page'
		})
	}

	render() {
		const { confirmAge, languages, loading } = this.state
		const { selectedLanguage } = this.props

		if (loading) {
			return (
				<div id="contact-component">
					<LoadingComponent />
				</div>
			)
		}

		return (
			<>
				<Container id="contact-component" fluid>
					<Row>
						<Col xs="12">
							<div className="section-one text-center">
								<h1>
									{`
										Perguntas Frequentes
									`}
								</h1>
								<div className="FAQ">
									<p>
										<strong>
											{`
											Quais são nossos conceitos?
										`}
										</strong>
									</p>
									<p>
										{`
										Não queremos vender apenas tabaco, queremos mostrar nossa história, trabalhar 
										o lúdico, mostrar que você também faz parte de tudo isso!
									`}
									</p>
								</div>
								<div className="FAQ">
									<p>
										<strong>
											{`
											Qual a nossa missão e visão?
										`}
										</strong>
									</p>
									<p>
										{`
										Ser a número 1 do país! O que fazemos com amor vinga. Aprender mais sempre, 
										com a nossa equipe e fãs. A Smyrna é do povo, ela é sua. Visão: Quando a pessoa 
										pensar em narguilé, pensar em Smyrna.
									`}
									</p>
								</div>
								<div className="FAQ">
									<p>
										<strong>
											{`
											Quem pode comprar nossas essências?
										`}
										</strong>
									</p>
									<p>
										{`
										Para você comprar nossas essências, precisa ter CNPJ, e nós vendemos por regiões. 
										Se o usuário final estiver interessado, ele precisa procurar o distribuidor que 
										cobre a região dele, por favor entre em contato conosco.
									`}
									</p>
								</div>
								<div className="FAQ">
									<p>
										<strong>
											{`
											Como criamos novos sabores?
										`}
										</strong>
									</p>
									<p>
										{`
										Sabores novos surgem disso: somos usuários, queremos novidades 
										e surpresas assim como você.
									`}
									</p>
								</div>
								<div className="FAQ">
									<p>
										<strong>
											{`
											O que torna a Smyrna tão diferente?
										`}
										</strong>
									</p>
									<p>
										{`
											Possuímos cuidado em todos os setores, trabalhamos com amor, ouvimos ideias, temos a cabeça 
											aberta, nós respiramos Smyrna. A qualidade é o nosso maior diferencial.											
										`}
									</p>
								</div>
								<div className="FAQ">
									<p>
										<strong>
											{`
											O que você precisa saber sobre nosso tabaco?
										`}
										</strong>
									</p>
									<p>
										{`
											O corte é diferenciado e passa por um controle de qualidade rigoroso. 
											A folha é o tabaco virgínia (classe A), diretamente da Polônia, 
											mas nossas essências são produzidas na Turquia.											
										`}
									</p>
								</div>
								<div className="FAQ">
									<p>
										<strong>
											{`
											Qual a quantidade mínima de compra?
										`}
										</strong>
									</p>
									<p>
										{`
											Nossa quantidade mínima são 80 caixas.											
										`}
									</p>
								</div>
							</div>
						</Col>
					</Row>
					<DividerComponent pt="0px" pb="0px" mt="45px" mb="45px" />
					<Row>
						<Col xs="12">
							<div className="section-two text-center">
								<h1>Tem outras dúvidas? Bora bater um papo</h1>
								<p><span className="mr-2"><MdEmail size={32} color="#F27405" /></span> Email: contato@smyrnaflavors.com</p>
								<p><span className="mr-2"><FaPhoneAlt size={32} color="#F27405" /></span> Telefone: (11) 96890-1030</p>
							</div>
						</Col>
					</Row>
				</Container>
			</>
		)
	}
}

export default ContactComponent