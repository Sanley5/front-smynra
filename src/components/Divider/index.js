import React from 'react';
import {
	Row,
	Col
} from 'reactstrap'

import divider from './../../assets/images/divider.png'


const DividerComponent = (props) => (
	<Row style={{ paddingTop: props.pt, paddingBottom: props.pb, marginTop: props.mt, marginBottom: props.mb }}>
		<Col xs="12" className="text-center">
			<img alt="divider" src={divider} className="img-fluid" />
		</Col>
	</Row>
);

export default DividerComponent;
