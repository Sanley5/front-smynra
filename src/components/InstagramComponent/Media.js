import React, { Component } from 'react'

class MediaInstagram extends Component {
	render() {
		return (
			<a href={this.props.url} rel="noopener noreferrer" target="_blank">
				<div className="p-4">
					<img className="img-fluid" src={this.props.src} alt={this.props.alt} />
				</div>
			</a>
		)
	}
}

export default MediaInstagram