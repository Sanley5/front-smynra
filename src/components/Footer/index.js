import React, { Component } from 'react'
import {
	Row, Col, Container, Form, FormGroup, Input, Button, InputGroupAddon, InputGroup
} from 'reactstrap'
import './footer.scss'

import * as ROUTES from './../../constants/routes'

import { MdKeyboardArrowRight } from 'react-icons/md'

const INITIAL_STATE = {
	input: {
		email: ''
	},
	sending: false
}

class FooterComponent extends Component {
	constructor(props) {
		super(props)

		this.state = { ...INITIAL_STATE }
		this.sendContactForm = this.sendContactForm.bind(this)
	}

	onChange = e => {
		this.setState({
			input: {
				...this.state.input,
				[e.target.name]: e.target.value
			}
		})
	}

	sendContactForm = e => {
		e.preventDefault()
		this.setState({
			alert: {
				status: false,
				error: false,
				message: '',
				color: ''
			},
			sending: true
		})
	}

	render() {
		const { input, sending } = this.state
		return (
			<>
				<Container fluid id="footer">
					<Row>
						<Col xs="12" sm="12" md="6" className="text-left left-side mb-5">
							<div className="text-footer">
								<p>Aqui vem um texto legal falando de pq se inscrever com o e-mail.</p>
							</div>
						</Col>
						<Col xs="12" sm="12" md="6" className="right-side mb-5">
							<div className="text-footer">
								<p>Inscreva-se</p>
								<Form onSubmit={this.sendContactForm}>
									<FormGroup>
										<InputGroup>
											<Input
												autoComplete="off"
												id="email"
												name="email"
												type="email"
												className="form-control"
												placeholder="E-MAIL"
												value={input.email}
												required
												onChange={this.onChange}
											/>
											<InputGroupAddon addonType="append">
												<Button className="btn-send">
													ENVIAR
													<MdKeyboardArrowRight />
												</Button>
											</InputGroupAddon>
										</InputGroup>
									</FormGroup>
								</Form>
							</div>
						</Col>
					</Row>
				</Container>
			</>
		)
	}
}

export default FooterComponent