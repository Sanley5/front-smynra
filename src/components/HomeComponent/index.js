import React, { Component } from 'react'
import {
	Row,
	Col,
	Container
} from 'reactstrap'

import './home.scss'

import FeedInstagram from './../InstagramComponent/Feed'

import placeholderSlide from './../../assets/images/placeholder_slide.png'

// ERA DOS DEUSES
import kratos from './../../assets/images/banners/site_deuses_0000_kratos.jpg'
import hercules from './../../assets/images/banners/site_deuses_0001_HERCULES.jpg'
import hefesto from './../../assets/images/banners/site_deuses_0002_HEFESTO.jpg'
import apollo from './../../assets/images/banners/site_deuses_0003_apollo.jpg'
import zeus from './../../assets/images/banners/site_deuses_0004_zeus.jpg'
import hermes from './../../assets/images/banners/site_deuses_0005_hermes.jpg'
import poseidon from './../../assets/images/banners/site_deuses_0006_poseidon.jpg'
import hera from './../../assets/images/banners/site_deuses_0007_hera.jpg'
import ares from './../../assets/images/banners/site_deuses_0008_ares.jpg'
import adonis from './../../assets/images/banners/site_deuses_0009_adonis.jpg'
import afrodite from './../../assets/images/banners/site_deuses_0010_afrodite.jpg'
import hades from './../../assets/images/banners/site_deuses_0011_hades.jpg'

// VOVÓ DISSE
import limao from './../../assets/images/banners/vovo_disse_0000_torta de limao.jpg'
import pacoca from './../../assets/images/banners/vovo_disse_0001_pacoca.jpg'
import maracuja from './../../assets/images/banners/vovo_disse_0002_mousse de maracuja.jpg'
import danoninho from './../../assets/images/banners/vovo_disse_0003_danoninho.jpg'
import banana from './../../assets/images/banners/vovo_disse_0004_banana.jpg'

// TRADICIONAL
import trad from './../../assets/images/banners/site_tradicionais.png'
import trad1 from './../../assets/images/banners/site_tradicionais1.png'
import trad2 from './../../assets/images/banners/site_tradicionais2.png'
import trad3 from './../../assets/images/banners/site_tradicionais3.png'

import DividerComponent from './../Divider'

import { FiInstagram } from 'react-icons/fi'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const INITIAL_STATE = {
	settings: {
		dots: true,
		fade: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000
	},
	settingsEraDeuses: {
		dots: true,
		fade: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000
	},
	settingsVovo: {
		dots: true,
		fade: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000
	}
}

class HomeComponent extends Component {
	constructor(props) {
		super(props)

		this.state = { ...INITIAL_STATE }
	}

	render() {
		const { settings, settingsEraDeuses, settingsVovo } = this.state
		return (
			<>
				<Container fluid id="home-component">
					<Row>
						<Col xs="12" sm="12" md="6" lg="6">
							<div className="collection-gods">
								<h3>Era Dos Deuses</h3>
								<p>A linha mais poderosa de todo o Olimpo, agora está disponível para todos os mortais sentirem esses poderes em suas mãos.</p>
							</div>
						</Col>
						<Col xs="12" sm="12" md="6" lg="6">
							<div className="collection-carousel">
								<Slider {...settingsEraDeuses}>
									<img src={kratos} className="img-fluid" alt="Kratos" />
									<img src={hercules} className="img-fluid" alt="Hercules" />
									<img src={hefesto} className="img-fluid" alt="Hefesto" />
									<img src={apollo} className="img-fluid" alt="Apollo" />
									<img src={zeus} className="img-fluid" alt="Zeus" />
									<img src={hermes} className="img-fluid" alt="Hermes" />
									<img src={poseidon} className="img-fluid" alt="Poseidon" />
									<img src={hera} className="img-fluid" alt="Hera" />
									<img src={ares} className="img-fluid" alt="Ares" />
									<img src={adonis} className="img-fluid" alt="Adonis" />
									<img src={afrodite} className="img-fluid" alt="Afrodite" />
									<img src={hades} className="img-fluid" alt="Hades" />
								</Slider>
							</div>
						</Col>
					</Row>
					<DividerComponent pt="0px" pb="0px" mt="20px" mb="20px" />
					<Row>
						<Col xs="12" sm="12" md="6" lg="6">
							<div className="collection-carousel">
								<Slider {...settingsVovo}>
									<img src={limao} className="img-fluid" alt="Torta de Limão" />
									<img src={pacoca} className="img-fluid" alt="Paçoca" />
									<img src={maracuja} className="img-fluid" alt="Mousse de Maracujá" />
									<img src={danoninho} className="img-fluid" alt="Danoninho" />
									<img src={banana} className="img-fluid" alt="Banana" />
								</Slider>
							</div>
						</Col>
						<Col xs="12" sm="12" md="6" lg="6">
							<div className="collection-grandma">
								<h3>Vovó Disse</h3>
								<p>A Vovó, com toda a sua experiência, trouxe seus sabores favoritos e receitas especiais do seu livro para esquentar nossos corações!</p>
							</div>
						</Col>
					</Row>
					<DividerComponent pt="0px" pb="0px" mt="20px" mb="20px" />
					<Row>
						<Col xs="12" sm="12" md="6" lg="6">
							<div className="collection-traditional">
								<h3>Tradicional</h3>
								<p>
									{`
										A tradicional e mais querida linha da Smyrna possui sabores frutados, 
										cítricos, quentes, refrescantes, doces, fortes, suaves... Tudo que você 
										imaginou e muito mais.
									`}
								</p>
							</div>
						</Col>
						<Col xs="12" sm="12" md="6" lg="6">
							<div className="collection-carousel">
								<Slider {...settings}>
									<img src={trad} className="img-fluid" alt="Tradicional" />
									<img src={trad1} className="img-fluid" alt="Tradicional" />
									<img src={trad2} className="img-fluid" alt="Tradicional" />
									<img src={trad3} className="img-fluid" alt="Tradicional" />
								</Slider>
							</div>
						</Col>
					</Row>
					<DividerComponent pt="0px" pb="0px" mt="20px" mb="20px" />
					<div className="d-flex justify-content-center">
						<span className="mr-2">
							<FiInstagram size={45} />
						</span>
						<h1 className="font-weight-lighter">SMYRNABRASIL</h1>
					</div>
					<FeedInstagram
						userName="smyrnabrasil"
						className="Feed"
						classNameLoading="Loading"
					/>
				</Container>
			</>
		)
	}
}

export default HomeComponent