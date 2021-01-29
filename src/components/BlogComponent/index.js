import React, { Component } from 'react'
import {
	Row,
	Col,
	Container,
	Modal,
	ModalBody,
	Button,
	Badge
} from 'reactstrap'

import './blog.scss'

import LoadingComponent from './../Loading/component'

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

class BlogComponent extends Component {
	constructor(props) {
		super(props)

		this.state = { ...INITIAL_STATE }
	}

	componentDidMount = () => {
		ReactGA.initialize('UA-176583286-1')
		ReactGA.event({
			category: 'page',
			action: 'User has entered at blog page'
		})
	}

	render() {
		const { confirmAge, languages, loading } = this.state
		const { selectedLanguage } = this.props

		if (loading) {
			return (
				<div id="blog-component">
					<LoadingComponent />
				</div>
			)
		}

		return (
			<>
				<Container id="blog-component">
					<Row>
						<Col xs="12">
							<div className="section-one text-center">
								<h1>BLOG</h1>
							</div>
						</Col>
					</Row>
					<Row>
						<Col xs="12">
							<div className="blog-post d-flex border rounded">
								<div className="blog-image">
									<img className="img-fluid" alt="Blog Image" src={require('./../../assets/images/blog/controle_carvao.png')} />
								</div>
								<div className="text-right blog-description">
									<Badge color="secondary">Dicas</Badge>
									<div>
										<h1>Controle de calor: por que trocar o carvão de lugar?</h1>
										<p>
											{`
												Para a terceira e última dica de como controlar o calor no seu rosh 
												sem o uso de nenhuma ferramenta, vamos falar sobre o tipo de furação e 
												o momento certo de colocar o carvão no seu rosh.
											`}
										</p>
									</div>
									<small className="blog_date">14 de janeiro de 2020</small>
								</div>
							</div>
						</Col>

						<Col xs="12">
							<div className="blog-post d-flex border rounded">
								<div className="blog-image">
									<img className="img-fluid" alt="Blog Image" src={require('./../../assets/images/blog/controle_carvao.png')} />
								</div>
								<div className="text-right blog-description">
									<Badge color="secondary">Dicas</Badge>
									<div>
										<h1>Controle de calor: por que trocar o carvão de lugar?</h1>
										<p>
											{`
												Para a terceira e última dica de como controlar o calor no seu rosh 
												sem o uso de nenhuma ferramenta, vamos falar sobre o tipo de furação e 
												o momento certo de colocar o carvão no seu rosh.
											`}
										</p>
									</div>
									<p className="blog_date">14 de janeiro de 2020</p>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</>
		)
	}
}

export default BlogComponent