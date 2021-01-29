import React, { Component } from 'react';
import {
	Container, Row, Col
} from 'reactstrap'

import ReactGA from 'react-ga'

const NotFound = () => (
	<>
		<NotFoundBase />
	</>
);


class NotFoundBase extends Component {
	componentDidMount = () => {
		// ReactGA.initialize('UA-154915059-2')
		// ReactGA.event({
		// 	category: 'component',
		// 	action: 'User has entered at component not found'
		// });
	}

	render() {
		return (
			<Container fluid>
				<Row style={{ minHeight: '70vh', height: 'auto' }}>
					<Col xs="12" className="text-center">
						<h1>Erro 404 :(</h1>
						<p>Não foi possível localizar esta página.</p>
					</Col>
				</Row>
			</Container>
		);
	}
}


export default NotFound;
