import React, { Component } from 'react'
import {
	Row,
	Col,
	Container,
	Modal,
	ModalBody,
	Button
} from 'reactstrap'

import './about.scss'

import LoadingComponent from './../Loading/component'

import AdonisMelonStrawberry from './../../assets/images/embalagens/adonis.png'
import HeraCherryLemon from './../../assets/images/embalagens/hera.png'

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

class AboutComponent extends Component {
	constructor(props) {
		super(props)

		this.state = { ...INITIAL_STATE }
	}

	componentDidMount = () => {
		ReactGA.initialize('UA-176583286-1')
		ReactGA.event({
			category: 'page',
			action: 'User has entered at about page'
		})
	}

	render() {
		const { confirmAge, languages, loading } = this.state
		const { selectedLanguage } = this.props

		if (loading) {
			return (
				<div id="about-component">
					<LoadingComponent />
				</div>
			)
		}

		return (
			<>
				<Container id="about-component" fluid>
					<Row>
						<Col xs="12">
							<div className="section-one text-center">
								<h1>INTRODUÇÃO</h1>
								<p>
									{`
								Conheça agora a história de Mirra (Smyrna) 
								a verdadeira criadora das essências do poder,
								seu passado, e como desenvolveu o seu grande 
								talento com essências, a sua trajetória com 
								os deuses do Olimpo, desde seu avô até seu filho Adonis, 
								o carinho por Afrodite e seus confrontos com Zeus.
								Smyrna, que foi transformada em árvore por uma maldição, e seu 
								filho Adonis que levou as essências ao conhecimento dos homens, 
								uma história cheia de conflitos, intrigas, maldições e poder, 
								conheça a ERA DOS DEUSES.
							`}
								</p>
							</div>
							<div className="section-two">
								<span className="text-center">
									<h1>CONTOS DE OUTRAS OUTRORAS</h1>
								</span>
								<p>
									{`
								Pigmaleão, adorador da arte, apaixonado pela emoção, era conhecido por suas 
								esculturas magnificas, dotado de um grande talento, foi convidado pelo próprio 
								Zeus a esculpir uma estátua em frente ao Monte Olimpo, com a imagem e semelhança 
								do próprio deus dos deuses, por sua vez, Pigmaleão esculpiu tal escultura.
							`}
								</p>
								<p>
									{`
								Zeus admirou-se, pois a perfeição de sua estátua era grandiosa e em forma de gratificação, 
								transforma Pigmaleão em Rei de Chipre, pois dali saía toda sua matéria prima (mármore). 
								Zeus também ordena a Pigmaleão para que jamais faça uma estátua de outro deus, pois ninguém jamais 
								deveria obter tal grandeza tão perfeitamente esculpida em forma de mármore. Mas Afrodite, a deusa da 
								beleza, ficou deslumbrada pela perfeição do trabalho que o rei havia executado, entretanto já sabia 
								do ordenado por Zeus ao rei.
							`}
								</p>
								<p>
									{`
								Afrodite ficou invadida de amor pela obra do rei, e pediu que Pigmaleão a esculpisse também, porém, 
								como a mais bela estátua do monte Olimpo, assim ela lhe concederia um pedido. Afrodite era conhecedora 
								dos desejos de amor que o rei tinha secretamente por uma de suas estátuas. 
							`}
								</p>
								<p>
									{`
								Pigmaleão então fez a sua mais bela obra, e esculpiu cada detalhe sob a imagem e semelhança da 
								deusa Afrodite, a estátua mais linda e bela do monte Olimpo nasceu, e por sua vez o tão sonhado 
								desejo do Rei de Chipre lhe foi concedido. Afrodite trouxe vida a sua estátua, agora chamada de
								Galateia, porém em segredo, Zeus não poderia saber de forma alguma daquele fato.
							`}
								</p>
								<p>
									{`
								Em pouco tempo aquele segredo veio à tona, e logo Zeus descobriu a grande trama entre o rei e a 
								deusa Afrodite. Ao se deparar com a estátua, Zeus ficou estupefato de tão exuberante e graciosa 
								que era, sabendo que só existia um homem que poderia ter feito aquela obra, assim em sua ira, 
								visitou o rei, que em grande temor revelou a verdade, o segredo entre ele e Afrodite.
							`}
								</p>
								<p>
									{`
								Então o deus do trovão o amaldiçoou, proclamou que do amor entre ele e sua obra Galateia 
								nasceria uma criança, esse fruto deveria ser levado até o monte Olimpo quando completasse sua 
								fase adulta, assim seria serva dos deuses ou da linhagem deles.
							`}
								</p>
								<p>
									{`
								Os anos se passaram enquanto a pequena Cenchreis cresceu, beleza não era um dom que ela tinha, 
								era apenas um mortal entre os mortais.
							`}
								</p>
								<p>
									{`
								Quando completou a idade para pagar pelos pecados de seu pai, foi levada e aprisionada, mas Zeus 
								logo não se agradou com sua beleza, e a fez de serva.
							`}
								</p>
							</div>
						</Col>
					</Row>
					<DividerComponent pt="0px" pb="0px" mt="45px" mb="45px" />
					<Row>
						<Col xs="12" sm="4">
							<img src={AdonisMelonStrawberry} className="img-fluid" />
						</Col>
						<Col xs="12" sm="8">
							<div className="section-three">
								<p>
									{`
									Adônis era um jovem de grande beleza que nasceu das relações 
									incestuosas que o rei Cínitras de Chipre manteve com sua filha Mirra. 
									Ele então passou a despertar o amor de Perséfane e Afrodite. Mais tarde 
									ambas as deusas passaram a disputar a companhia do menino, e tiveram que 
									submeter-se à sentença de Zeus. Este estipulou que ele passaria um terço 
									do ano com cada uma delas, mas Adônis, que preferia Afrodite, permanecia 
									com ela também no terço restante. Nasce desse mito a ideia do ciclo anual 
									da vegetação, com a semente que permanece sob a terra por quatro meses.
								`}
								</p>
							</div>
						</Col>
					</Row>
					<Row>
						<Col xs="12" sm="8">
							<div className="section-four">
								<p>
									{`
									Hera é a deusa das bodas, da maternidade, e das esposas, equivalente a Juno 
									no mito romano. Irmã e esposa de Zeus, é a rainha dos deuses, e patrona 
									da fidelidade conjugal. Retratada como majestosa e solene, muitas vezes 
									coroadas com os polos (uma coroa alta cilíndrica usada por várias deusas), 
									Hera é geralmente representada ostentando na mão uma romã, símbolo da 
									fertilidade, sangue e morte, e substituto das cápsulas da papoula de ópio. 
									A vaca e, posteriormente, o pavão eram seus animais simbólicos principais. 
									Íris era sua fiel atendente, também mensageira e aia. Retratada como 
									ciumenta e agressiva contra qualquer relação extra-conjulgal, odiava e 
									perseguia as amantes de Zeus, e os filhos bastardos gerados desses 
									relacionamentos. Tentou, dentre alguns exemplos, matar Héracles ainda no berço.
									A única exceção era Hermes e sua mãe Maia, que a deusa até admirava pela astúcia 
									e beleza.
								`}
								</p>
							</div>
						</Col>
						<Col xs="12" sm="4">
							<img src={HeraCherryLemon} className="img-fluid" />
						</Col>
					</Row>
				</Container>
			</>
		)
	}
}

export default AboutComponent