import React, { Component } from 'react'
import Instagram from './../../lib/Instagram'
import MediaInstagram from './Media'
import {
	Row,
	Col
} from 'reactstrap'

class FeedInstagram extends Component {
	static defaultProps = {
		className: "",
		classNameLoading: "",
		getFeedFn: Instagram.getFeed,
	}

	constructor(props) {
		super(props)

		this.state = { loading: true, media: [] }
	}

	componentDidMount() {
		this.props
			.getFeedFn(this.props.userName)
			.then((media) => this.setState({ loading: false, media }))
			.catch(() => this.setState({ loading: false, media: [] }))
	}

	render() {
		const className = this.state.loading ? [this.props.className, this.props.classNameLoading].join(" ") : this.props.className

		return (
			<Row>
				{this.state.media.map((media, index) => (
					<Col key={index} className={className} xs="12" sm="12" md="4">
						<MediaInstagram src={media.src} url={media.url} alt={media.alt} />
					</Col>
				))}
			</Row>
		)
	}
}

export default FeedInstagram;