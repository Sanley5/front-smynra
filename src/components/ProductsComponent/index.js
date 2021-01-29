import React, { Component } from 'react'
import {
	Row,
	Col,
	Container,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button
} from 'reactstrap'

import './products.scss'

import LoadingComponent from './../Loading/component'

import bgEraDeuses from './../../assets/images/two_columns.png'
import bgTradicional from './../../assets/images/bg_traditional.png'
import bgVovo from './../../assets/images/bg_vovo.png'

import ReactGA from 'react-ga'
import DividerComponent from '../Divider'

const INITIAL_STATE = {
	loading: false,
	categories: [
		{
			id: 1,
			bg: {
				pt_BR: 'bgVovo',
				en_US: 'bgVovo',
				es_ES: 'bgVovo'
			},
			name: {
				pt_BR: 'Vovó Disse',
				en_US: 'Vovó Disse',
				es_ES: 'Vovó Disse'
			},
			color: '#3ABEFF',
			cover: '_danoninho.png',
			products: [
				{
					photos: [
						'_danoninho.png'
					],
					name: {
						pt_BR: 'IOGURTE DE MORANGO',
						en_US: '',
						es_ES: ''
					},
					description: {
						pt_BR: `
							A essência de Iogurte de morango é ideal para o seu rosh 
							durante o intervalo daquela partida de videogame. 
							Com o forte sabor dessa sobremesa irresistível, a Vovó 
							garante uma sessão inesquecível.
						`,
						en_US: '',
						es_ES: ''
					},
					obs: [
						{
							title: {
								pt_BR: 'DISPONÍVEL EM',
								en_US: '',
								es_ES: ''
							},
							text: {
								pt_BR: '50g / 500g / 6kg',
								en_US: '',
								es_ES: ''
							}
						}
					]
				},
				{
					photos: [
						'_mousse-maracuja.png'
					],
					name: {
						pt_BR: 'MOUSSE DE MARACUJÁ',
						en_US: 'MOUSSE DE MARACUJÁ',
						es_ES: 'MOUSSE DE MARACUJÁ'
					},
					description: {
						pt_BR: `
							Sendo uma das frutas e 
							sabores mais queridos entre os narguileiros, 
							a essência de Mousse de Maracujá 
							não poderia ficar de fora 
							dessa linha de sobremesas da 
							Vovó Smyrna.
						`,
						en_US: `
							Sendo uma das frutas e 
							sabores mais queridos entre os narguileiros, 
							a essência de Mousse de Maracujá 
							não poderia ficar de fora 
							dessa linha de sobremesas da 
							Vovó Smyrna.
						`,
						es_ES: `
							Sendo uma das frutas e 
							sabores mais queridos entre os narguileiros, 
							a essência de Mousse de Maracujá 
							não poderia ficar de fora 
							dessa linha de sobremesas da 
							Vovó Smyrna.
						`
					},
					obs: []
				},
				{
					photos: [
						'_banana-doce-de-leite.png'
					],
					name: {
						pt_BR: 'BANANA COM DOCE DE LEITE',
						en_US: 'BANANA COM DOCE DE LEITE',
						es_ES: 'BANANA COM DOCE DE LEITE'
					},
					description: {
						pt_BR: `
							Quem nunca experimentou um doce 
							inusitado? A Vovó Smyrna desenvolveu e 
							garantiu que essa essência fosse uma 
							das aventuras mais insanas que você já 
							tenha experimentado.
						`,
						en_US: `
							Quem nunca experimentou um doce 
							inusitado? A Vovó Smyrna desenvolveu e 
							garantiu que essa essência fosse uma 
							das aventuras mais insanas que você já 
							tenha experimentado.
						`,
						es_ES: `
							Quem nunca experimentou um doce 
							inusitado? A Vovó Smyrna desenvolveu e 
							garantiu que essa essência fosse uma 
							das aventuras mais insanas que você já 
							tenha experimentado.
						`
					},
					obs: []
				},
				{
					photos: [
						'_pacoca.png'
					],
					name: {
						pt_BR: 'PAÇOCA',
						en_US: 'PAÇOCA',
						es_ES: 'PAÇOCA'
					},
					description: {
						pt_BR: `
							Um dos doces mais famosos da infância, 
							quem nunca saboreou uma doce paçoca depois de 
							uma tarde inteira de diversão e brincadeiras 
							de rua? Essa receita da Vovó é a essência ideal 
							para uma sessão divertida e com um 
							suave sabor nostálgico. Melão e morango juntos são 
							uma combinação perfeita igual a 
							beleza do sábio Adonis! 
							Junte o doce e azedo do morango 
							e o refrescante do melão e fume 
							esse sabor dos deuses em qualquer estação. 
							O que é gostoso é bem-vindo sempre!
						`,
						en_US: `
							Um dos doces mais famosos da infância, 
							quem nunca saboreou uma doce paçoca depois de 
							uma tarde inteira de diversão e brincadeiras 
							de rua? Essa receita da Vovó é a essência ideal 
							para uma sessão divertida e com um 
							suave sabor nostálgico. Melão e morango juntos são 
							uma combinação perfeita igual a 
							beleza do sábio Adonis! 
							Junte o doce e azedo do morango 
							e o refrescante do melão e fume 
							esse sabor dos deuses em qualquer estação. 
							O que é gostoso é bem-vindo sempre!
						`,
						es_ES: `
							Um dos doces mais famosos da infância, 
							quem nunca saboreou uma doce paçoca depois de 
							uma tarde inteira de diversão e brincadeiras 
							de rua? Essa receita da Vovó é a essência ideal 
							para uma sessão divertida e com um 
							suave sabor nostálgico. Melão e morango juntos são 
							uma combinação perfeita igual a 
							beleza do sábio Adonis! 
							Junte o doce e azedo do morango 
							e o refrescante do melão e fume 
							esse sabor dos deuses em qualquer estação. 
							O que é gostoso é bem-vindo sempre!
						`
					},
					obs: []
				},
				{
					photos: [
						'_banana-doce-de-leite.png'
					],
					name: {
						pt_BR: 'TORTA DE LIMÃO',
						en_US: 'TORTA DE LIMÃO',
						es_ES: 'TORTA DE LIMÃO'
					},
					description: {
						pt_BR: `
							Refrescante e saboroso, a essência de torta de 
							limão é o pedido certo para deixar 
							a sessão ainda melhor. 
							A Vovó Smyrna garante uma saborosa sessão.
						`,
						en_US: `
							Refrescante e saboroso, a essência de torta de 
							limão é o pedido certo para deixar 
							a sessão ainda melhor. 
							A Vovó Smyrna garante uma saborosa sessão.
						`,
						es_ES: `
							Refrescante e saboroso, a essência de torta de 
							limão é o pedido certo para deixar 
							a sessão ainda melhor. 
							A Vovó Smyrna garante uma saborosa sessão.
						`
					},
					obs: []
				}
			]
		},
		{
			id: 2,
			bg: {
				pt_BR: 'bgEraDeuses',
				en_US: 'bgEraDeuses',
				es_ES: 'bgEraDeuses'
			},
			name: {
				pt_BR: 'Era dos Deuses',
				en_US: 'Era dos Deuses',
				es_ES: 'Era dos Deuses'
			},
			color: '#F2AC29',
			cover: 'zeus.png',
			products: [
				{
					photos: [
						'zeus.png'
					],
					name: {
						pt_BR: 'ZEUS - COLD MINT',
						en_US: '',
						es_ES: ''
					},
					description: {
						pt_BR: `
							A essência de Zeus é uma 
							das mais poderosas do Olimpo, 
							e portanto, é a menta mais poderosa 
							e refrescante que você já viu. 
							Desenvolvida no berço do narguilé, lá na Turquia, 
							com os nossos melhores especialistas. 
							Experimente e sinta esse poder imensurável de um deus do Olimpo! 
							Você merece essa qualidade!
						`,
						en_US: '',
						es_ES: ''
					},
					obs: [
						{
							title: {
								pt_BR: 'DISPONÍVEL EM',
								en_US: '',
								es_ES: ''
							},
							text: {
								pt_BR: '50g / 500g / 6kg',
								en_US: '',
								es_ES: ''
							}
						}
					]
				},
				{
					photos: [
						'hades.png'
					],
					name: {
						pt_BR: 'HADES',
						en_US: 'HADES',
						es_ES: 'HADES'
					},
					description: {
						pt_BR: `
							O sabor da menta forte é a representação 
							ideal para o deus do submundo. 
							A essência de Hades foi desenvolvida para representar 
							o poderoso deus e o seu reino inferior, 
							trazendo uma forte sensação de refrescância.
						`,
						en_US: `
							O sabor da menta forte é a representação 
							ideal para o deus do submundo. 
							A essência de Hades foi desenvolvida para representar 
							o poderoso deus e o seu reino inferior, 
							trazendo uma forte sensação de refrescância.
						`,
						es_ES: `
							O sabor da menta forte é a representação 
							ideal para o deus do submundo. 
							A essência de Hades foi desenvolvida para representar 
							o poderoso deus e o seu reino inferior, 
							trazendo uma forte sensação de refrescância.
						`
					},
					obs: []
				},
				{
					photos: [
						'poseidon.png'
					],
					name: {
						pt_BR: 'POSEIDON - MELON PASSION',
						en_US: 'POSEIDON - MELON PASSION',
						es_ES: 'POSEIDON - MELON PASSION'
					},
					description: {
						pt_BR: `
							O melão e o maracujá do 
							Olimpo resolveram se juntar nessa essência 
							doce com aquele toque cítrico que você 
							quer na sua sessão. 
							Traga essa força do outro mundo no seu 
							rosh e não se arrependa!
						`,
						en_US: `
								O melão e o maracujá do 
								Olimpo resolveram se juntar nessa essência 
								doce com aquele toque cítrico que você 
								quer na sua sessão. 
								Traga essa força do outro mundo no seu 
								rosh e não se arrependa!
						`,
						es_ES: `
								O melão e o maracujá do 
								Olimpo resolveram se juntar nessa essência 
								doce com aquele toque cítrico que você 
								quer na sua sessão. 
								Traga essa força do outro mundo no seu 
								rosh e não se arrependa!
						`
					},
					obs: []
				},
				{
					photos: [
						'adonis.png'
					],
					name: {
						pt_BR: 'ADONIS - MELON STRAWBERRY',
						en_US: 'ADONIS - MELON STRAWBERRY',
						es_ES: 'ADONIS - MELON STRAWBERRY'
					},
					description: {
						pt_BR: `
							Melão e morango juntos são uma combinação 
							perfeita igual a beleza do sábio Adonis! 
							Junte o doce e azedo do morango e o 
							refrescante do melão e fume 
							esse sabor dos deuses em qualquer estação. 
							O que é gostoso é bem-vindo sempre!
						`,
						en_US: `
							Melão e morango juntos são uma combinação 
							perfeita igual a beleza do sábio Adonis! 
							Junte o doce e azedo do morango e o 
							refrescante do melão e fume 
							esse sabor dos deuses em qualquer estação. 
							O que é gostoso é bem-vindo sempre!
						`,
						es_ES: `
							Melão e morango juntos são uma combinação 
							perfeita igual a beleza do sábio Adonis! 
							Junte o doce e azedo do morango e o 
							refrescante do melão e fume 
							esse sabor dos deuses em qualquer estação. 
							O que é gostoso é bem-vindo sempre!
						`
					},
					obs: []
				},
				{
					photos: [
						'afrodite.png'
					],
					name: {
						pt_BR: 'AFRODITE - COTTON CANDY',
						en_US: 'AFRODITE - COTTON CANDY',
						es_ES: 'AFRODITE - COTTON CANDY'
					},
					description: {
						pt_BR: `
							Sinta o amor na sua sessão! 
							O algodão doce do Olimpo é leve, 
							docinho e com aquela refrescância única, 
							que leva vocês aos céus! 
							Experimente a doçura leve de Afrodite.
						`,
						en_US: `
							Sinta o amor na sua sessão! 
							O algodão doce do Olimpo é leve, 
							docinho e com aquela refrescância única, 
							que leva vocês aos céus! 
							Experimente a doçura leve de Afrodite.
						`,
						es_ES: `
							Sinta o amor na sua sessão! 
							O algodão doce do Olimpo é leve, 
							docinho e com aquela refrescância única, 
							que leva vocês aos céus! 
							Experimente a doçura leve de Afrodite.
						`
					},
					obs: []
				},
				{
					photos: [
						'ares.png'
					],
					name: {
						pt_BR: 'ARES - MIXED MELON',
						en_US: 'ARES - MIXED MELON',
						es_ES: 'ARES - MIXED MELON'
					},
					description: {
						pt_BR: `
							A essência do poderoso deus 
							Ares agora pode ser sua! 
							Sinta o poder do deus da guerra na sua 
							sessão e se surpreenda com o 
							mix de melões mais poderoso 
							do Olimpo! 
							O poder é seu, sinta!
						`,
						en_US: `
							A essência do poderoso deus 
							Ares agora pode ser sua! 
							Sinta o poder do deus da guerra na sua 
							sessão e se surpreenda com o 
							mix de melões mais poderoso 
							do Olimpo! 
							O poder é seu, sinta!
						`,
						es_ES: `
							A essência do poderoso deus 
							Ares agora pode ser sua! 
							Sinta o poder do deus da guerra na sua 
							sessão e se surpreenda com o 
							mix de melões mais poderoso 
							do Olimpo! 
							O poder é seu, sinta!
						`
					},
					obs: []
				},
				{
					photos: [
						'hera.png'
					],
					name: {
						pt_BR: 'HERA - CHERRY LEMON',
						en_US: 'HERA - CHERRY LEMON',
						es_ES: 'HERA - CHERRY LEMON'
					},
					description: {
						pt_BR: `
							Uma das melhores combinações do Olimpo, 
							a essência de Hera apresenta a mistura 
							perfeita de cereja com limão. 
							Com um gosto único, a cereja traz 
							o aspecto doce e o limão refresca 
							o sabor, tornando-o harmônico.
						`,
						en_US: `
							Uma das melhores combinações do Olimpo, 
							a essência de Hera apresenta a mistura 
							perfeita de cereja com limão. 
							Com um gosto único, a cereja traz 
							o aspecto doce e o limão refresca 
							o sabor, tornando-o harmônico.
						`,
						es_ES: `
							Uma das melhores combinações do Olimpo, 
							a essência de Hera apresenta a mistura 
							perfeita de cereja com limão. 
							Com um gosto único, a cereja traz 
							o aspecto doce e o limão refresca 
							o sabor, tornando-o harmônico.
						`
					},
					obs: []
				},
				{
					photos: [
						'hermes.png'
					],
					name: {
						pt_BR: 'HERMES - BUBBLE GUM',
						en_US: 'HERMES - BUBBLE GUM',
						es_ES: 'HERMES - BUBBLE GUM'
					},
					description: {
						pt_BR: `
							Esse é um chiclete do outro mundo! 
							Com o gosto do chiclete que lembra a 
							infânica de tutti fruti, a essência 
							de Hermes é diferente de tudo que 
							você já provou. 
							É uma explosão do chiclete na sua boca!
						`,
						en_US: `
							Esse é um chiclete do outro mundo! 
							Com o gosto do chiclete que lembra a 
							infânica de tutti fruti, a essência 
							de Hermes é diferente de tudo que 
							você já provou. 
							É uma explosão do chiclete na sua boca!
						`,
						es_ES: `
							Esse é um chiclete do outro mundo! 
							Com o gosto do chiclete que lembra a 
							infânica de tutti fruti, a essência 
							de Hermes é diferente de tudo que 
							você já provou. 
							É uma explosão do chiclete na sua boca!
						`
					},
					obs: []
				}
			]
		},
		{
			id: 3,
			bg: {
				pt_BR: 'bgTradicional',
				en_US: 'bgTradicional',
				es_ES: 'bgTradicional'
			},
			name: {
				pt_BR: 'Tradicional',
				en_US: 'Tradicional',
				es_ES: 'Tradicional'
			},
			color: '#0D0D0D',
			cover: 'super.png',
			products: [
				{
					photos: [
						'super.png'
					],
					name: {
						pt_BR: 'SUPER*** - menta doce',
						en_US: 'SUPER*** - menta doce',
						es_ES: 'SUPER*** - menta doce'
					},
					description: {
						pt_BR: `
							A essência de Zeus é uma 
							das mais poderosas do Olimpo, 
							e portanto, é a menta mais poderosa 
							e refrescante que você já viu. 
							Desenvolvida no berço do narguilé, lá na Turquia, 
							com os nossos melhores especialistas. 
							Experimente e sinta esse poder imensurável de um deus do Olimpo! 
							Você merece essa qualidade!
						`,
						en_US: `
							A essência de Zeus é uma 
							das mais poderosas do Olimpo, 
							e portanto, é a menta mais poderosa 
							e refrescante que você já viu. 
							Desenvolvida no berço do narguilé, lá na Turquia, 
							com os nossos melhores especialistas. 
							Experimente e sinta esse poder imensurável de um deus do Olimpo! 
							Você merece essa qualidade!
						`,
						es_ES: `
							A essência de Zeus é uma 
							das mais poderosas do Olimpo, 
							e portanto, é a menta mais poderosa 
							e refrescante que você já viu. 
							Desenvolvida no berço do narguilé, lá na Turquia, 
							com os nossos melhores especialistas. 
							Experimente e sinta esse poder imensurável de um deus do Olimpo! 
							Você merece essa qualidade!
						`
					},
					obs: [
						{
							title: {
								pt_BR: 'DISPONÍVEL EM',
								en_US: '',
								es_ES: ''
							},
							text: {
								pt_BR: '50g / 500g / 6kg',
								en_US: '',
								es_ES: ''
							}
						}
					]
				},
				{
					photos: [
						'ruby.png'
					],
					name: {
						pt_BR: 'RUBY – MORANGO E KIWI',
						en_US: 'RUBY – MORANGO E KIWI',
						es_ES: 'RUBY – MORANGO E KIWI'
					},
					description: {
						pt_BR: `
							Com o morango em prevalência, o kiwi e o 
							ice acompanham para quebrar o doce do morango. 
							A proposta dessa essência é trazer o 
							sabor de uma bala de morango. 
							A escolha do nome foi porque o morango 
							se compara a preciosidade da pedra rubi, 
							que além de ter seu charme, 
							nada se compara a ela.
						`,
						en_US: `
							Com o morango em prevalência, o kiwi e o 
							ice acompanham para quebrar o doce do morango. 
							A proposta dessa essência é trazer o 
							sabor de uma bala de morango. 
							A escolha do nome foi porque o morango 
							se compara a preciosidade da pedra rubi, 
							que além de ter seu charme, 
							nada se compara a ela.
						`,
						es_ES: `
							Com o morango em prevalência, o kiwi e o 
							ice acompanham para quebrar o doce do morango. 
							A proposta dessa essência é trazer o 
							sabor de uma bala de morango. 
							A escolha do nome foi porque o morango 
							se compara a preciosidade da pedra rubi, 
							que além de ter seu charme, 
							nada se compara a ela.
						`
					},
					obs: []
				},
				{
					photos: [
						'sexy.png'
					],
					name: {
						pt_BR: 'SEXY BITCH',
						en_US: 'SEXY BITCH',
						es_ES: 'SEXY BITCH'
					},
					description: {
						pt_BR: `
							Com o morango em prevalência, o kiwi e o 
							ice acompanham para quebrar o doce do morango. 
							A proposta dessa essência é trazer o 
							sabor de uma bala de morango. 
							A escolha do nome foi porque o morango 
							se compara a preciosidade da pedra rubi, 
							que além de ter seu charme, 
							nada se compara a ela.
						`,
						en_US: `
							Com o morango em prevalência, o kiwi e o 
							ice acompanham para quebrar o doce do morango. 
							A proposta dessa essência é trazer o 
							sabor de uma bala de morango. 
							A escolha do nome foi porque o morango 
							se compara a preciosidade da pedra rubi, 
							que além de ter seu charme, 
							nada se compara a ela.
						`,
						es_ES: `
							Com o morango em prevalência, o kiwi e o 
							ice acompanham para quebrar o doce do morango. 
							A proposta dessa essência é trazer o 
							sabor de uma bala de morango. 
							A escolha do nome foi porque o morango 
							se compara a preciosidade da pedra rubi, 
							que além de ter seu charme, 
							nada se compara a ela.
						`
					},
					obs: []
				},
				{
					photos: [
						'give.png'
					],
					name: {
						pt_BR: 'GIVE ME BACK',
						en_US: 'GIVE ME BACK',
						es_ES: 'GIVE ME BACK'
					},
					description: {
						pt_BR: `
							Aquele cítrico que 
							não pode faltar na sua sessão! 
							É aquela essência que assim que você 
							passa a mangueira, já quer de volta.
						`,
						en_US: `
							Aquele cítrico que 
							não pode faltar na sua sessão! 
							É aquela essência que assim que você 
							passa a mangueira, já quer de volta.
						`,
						es_ES: `
							Aquele cítrico que 
							não pode faltar na sua sessão! 
							É aquela essência que assim que você 
							passa a mangueira, já quer de volta.
						`
					},
					obs: []
				},
				{
					photos: [
						'tanger.png'
					],
					name: {
						pt_BR: 'TANGER EXPLOSION',
						en_US: 'TANGER EXPLOSION',
						es_ES: 'TANGER EXPLOSION'
					},
					description: {
						pt_BR: `
							Sensação única do sabor da tangerina 
							com o toque de ice para refrescar seu rolê! 
							É de fato uma explosão de tangerina, 
							na medida certa, no seu paladar.
						`,
						en_US: `
							Sensação única do sabor da tangerina 
							com o toque de ice para refrescar seu rolê! 
							É de fato uma explosão de tangerina, 
							na medida certa, no seu paladar.
						`,
						es_ES: `
							Sensação única do sabor da tangerina 
							com o toque de ice para refrescar seu rolê! 
							É de fato uma explosão de tangerina, 
							na medida certa, no seu paladar.
						`
					},
					obs: []
				},
				{
					photos: [
						'eva.png'
					],
					name: {
						pt_BR: 'EVA’S SIN',
						en_US: 'EVA’S SIN',
						es_ES: 'EVA’S SIN'
					},
					description: {
						pt_BR: `
							Uma proposta nova do sabor incomparável 
							de maçã verde! 
							Sabor bem presente de maçã verde do início ao fim. 
							Como o próprio nome diz, 
							se até Eva se arriscou por esse sabor, 
							é porque vale a pena!
						`,
						en_US: `
							Uma proposta nova do sabor incomparável 
							de maçã verde! 
							Sabor bem presente de maçã verde do início ao fim. 
							Como o próprio nome diz, 
							se até Eva se arriscou por esse sabor, 
							é porque vale a pena!
						`,
						es_ES: `
							Uma proposta nova do sabor incomparável 
							de maçã verde! 
							Sabor bem presente de maçã verde do início ao fim. 
							Como o próprio nome diz, 
							se até Eva se arriscou por esse sabor, 
							é porque vale a pena!
						`
					},
					obs: []
				},
				{
					photos: [
						'ice.png'
					],
					name: {
						pt_BR: 'ICE BREAKERS',
						en_US: 'ICE BREAKERS',
						es_ES: 'ICE BREAKERS'
					},
					description: {
						pt_BR: `
							Proposta exclusiva da Smyrna, 
							a Ice Breakers é algo nunca sentido 
							antes, um sabor exclusivo feito pra você.
						`,
						en_US: `
							Proposta exclusiva da Smyrna, 
							a Ice Breakers é algo nunca sentido 
							antes, um sabor exclusivo feito pra você.
						`,
						es_ES: `
							Proposta exclusiva da Smyrna, 
							a Ice Breakers é algo nunca sentido 
							antes, um sabor exclusivo feito pra você.
						`
					},
					obs: []
				},
				{
					photos: [
						'iceberg.png'
					],
					name: {
						pt_BR: 'ICEBERG – MENTA ICE',
						en_US: 'ICEBERG – MENTA ICE',
						es_ES: 'ICEBERG – MENTA ICE'
					},
					description: {
						pt_BR: `
							Fumar esse sabor sozinho dá a 
							real sensação de estar na ponta 
							de um iceberg. 
							Indicado para refrescar o seu verão, 
							também é muito utilizada em mix 
							com sabores cítricos ou doces.
						`,
						en_US: `
							Fumar esse sabor sozinho dá a 
							real sensação de estar na ponta 
							de um iceberg. 
							Indicado para refrescar o seu verão, 
							também é muito utilizada em mix 
							com sabores cítricos ou doces.
						`,
						es_ES: `
							Fumar esse sabor sozinho dá a 
							real sensação de estar na ponta 
							de um iceberg. 
							Indicado para refrescar o seu verão, 
							também é muito utilizada em mix 
							com sabores cítricos ou doces.
						`
					},
					obs: []
				},
				{
					photos: [
						'mint.png'
					],
					name: {
						pt_BR: 'MINT – MENTA',
						en_US: 'MINT – MENTA',
						es_ES: 'MINT – MENTA'
					},
					description: {
						pt_BR: `
							Sabor clássico de hortelã. Geralmente utilizada 
							para fazer mix com outras essências. 
							Ao fumar sozinha, possui gosto de 
							hortelã fresco.
						`,
						en_US: `
							Sabor clássico de hortelã. Geralmente utilizada 
							para fazer mix com outras essências. 
							Ao fumar sozinha, possui gosto de 
							hortelã fresco.
						`,
						es_ES: `
							Sabor clássico de hortelã. Geralmente utilizada 
							para fazer mix com outras essências. 
							Ao fumar sozinha, possui gosto de 
							hortelã fresco.
						`
					},
					obs: []
				},
				{
					photos: [
						'mon.png'
					],
					name: {
						pt_BR: 'MON AMOUR',
						en_US: 'MON AMOUR',
						es_ES: 'MON AMOUR'
					},
					description: {
						pt_BR: `
							É o mix perfeito de melão e melancia! 
							Uma proposta que sempre foi bem aceita, 
							por isso se chama assim. 
							É o nosso amor, não é mesmo?
						`,
						en_US: `
							É o mix perfeito de melão e melancia! 
							Uma proposta que sempre foi bem aceita, 
							por isso se chama assim. 
							É o nosso amor, não é mesmo?
						`,
						es_ES: `
							É o mix perfeito de melão e melancia! 
							Uma proposta que sempre foi bem aceita, 
							por isso se chama assim. 
							É o nosso amor, não é mesmo?
						`
					},
					obs: []
				},
				{
					photos: [
						'touch.png'
					],
					name: {
						pt_BR: 'TOUCH ME',
						en_US: 'TOUCH ME',
						es_ES: 'TOUCH ME'
					},
					description: {
						pt_BR: `
							Sabor suave do casamento perfeito 
							entre o pêssego suave e a 
							manga também leve. 
							Combina com qualquer estação e, 
							claro, tem o toque 
							especial da Smyrna!
						`,
						en_US: `
							Sabor suave do casamento perfeito 
							entre o pêssego suave e a 
							manga também leve. 
							Combina com qualquer estação e, 
							claro, tem o toque 
							especial da Smyrna!
						`,
						es_ES: `
							Sabor suave do casamento perfeito 
							entre o pêssego suave e a 
							manga também leve. 
							Combina com qualquer estação e, 
							claro, tem o toque 
							especial da Smyrna!
						`
					},
					obs: []
				},
				{
					photos: [
						'pipoca.png'
					],
					name: {
						pt_BR: 'POPSTAR - PIPOCA',
						en_US: 'POPSTAR - PIPOCA',
						es_ES: 'POPSTAR - PIPOCA'
					},
					description: {
						pt_BR: `
							A essência Pipoca foi uma 
							grande aposta de inovação no sabor, 
							entregando um aroma indescritível e 
							um incrível volume de fumaça. 
							O sabor da pipoca tradicional foge 
							do óbvio e garante uma sessão divertida.
						`,
						en_US: `
							A essência Pipoca foi uma 
							grande aposta de inovação no sabor, 
							entregando um aroma indescritível e 
							um incrível volume de fumaça. 
							O sabor da pipoca tradicional foge 
							do óbvio e garante uma sessão divertida.
						`,
						es_ES: `
							A essência Pipoca foi uma 
							grande aposta de inovação no sabor, 
							entregando um aroma indescritível e 
							um incrível volume de fumaça. 
							O sabor da pipoca tradicional foge 
							do óbvio e garante uma sessão divertida.
						`
					},
					obs: []
				},
				{
					photos: [
						'gods_seed.png'
					],
					name: {
						pt_BR: 'GOD’S SEED - NOZES CARAMELADAS',
						en_US: 'GOD’S SEED - NOZES CARAMELADAS',
						es_ES: 'GOD’S SEED - NOZES CARAMELADAS'
					},
					description: {
						pt_BR: `
							Com sementes divinas vinda diretamente 
							do céu, a essência God’s Seed 
							de nozes caramelizadas possui um sabor 
							doce e leve que permanece na boca 
							mesmo após a sessão terminar.
						`,
						en_US: `
							Com sementes divinas vinda diretamente 
							do céu, a essência God’s Seed 
							de nozes caramelizadas possui um sabor 
							doce e leve que permanece na boca 
							mesmo após a sessão terminar.
						`,
						es_ES: `
							Com sementes divinas vinda diretamente 
							do céu, a essência God’s Seed 
							de nozes caramelizadas possui um sabor 
							doce e leve que permanece na boca 
							mesmo após a sessão terminar.
						`
					},
					obs: []
				},
				{
					photos: [
						'green_sky.png'
					],
					name: {
						pt_BR: 'GREEN SKY - PERA',
						en_US: 'GREEN SKY - PERA',
						es_ES: 'GREEN SKY - PERA'
					},
					description: {
						pt_BR: `
							A essência Green Sky possui o 
							real sabor da pera gelada com 
							um leve toque de mentol, 
							o que a torna perfeita para 
							qualquer estação do ano.
						`,
						en_US: `
							A essência Green Sky possui o 
							real sabor da pera gelada com 
							um leve toque de mentol, 
							o que a torna perfeita para 
							qualquer estação do ano.
						`,
						es_ES: `
							A essência Green Sky possui o 
							real sabor da pera gelada com 
							um leve toque de mentol, 
							o que a torna perfeita para 
							qualquer estação do ano.
						`
					},
					obs: []
				}
			]
		}
	],
	selectedCategory: {
		id: 2,
		bg: {
			pt_BR: 'bgEraDeuses',
			en_US: 'bgEraDeuses',
			es_ES: 'bgEraDeuses'
		},
		name: {
			pt_BR: 'Era dos Deuses',
			en_US: 'Era dos Deuses',
			es_ES: 'Era dos Deuses'
		},
		color: '#F2AC29',
		cover: 'zeus.png',
		products: [
			{
				photos: [
					'zeus.png'
				],
				name: {
					pt_BR: 'ZEUS - COLD MINT',
					en_US: '',
					es_ES: ''
				},
				description: {
					pt_BR: `
						A essência de Zeus é uma 
						das mais poderosas do Olimpo, 
						e portanto, é a menta mais poderosa 
						e refrescante que você já viu. 
						Desenvolvida no berço do narguilé, lá na Turquia, 
						com os nossos melhores especialistas. 
						Experimente e sinta esse poder imensurável de um deus do Olimpo! 
						Você merece essa qualidade!
					`,
					en_US: '',
					es_ES: ''
				},
				obs: [
					{
						title: {
							pt_BR: 'DISPONÍVEL EM',
							en_US: '',
							es_ES: ''
						},
						text: {
							pt_BR: '50g / 500g / 6kg',
							en_US: '',
							es_ES: ''
						}
					}
				]
			},
			{
				photos: [
					'hades.png'
				],
				name: {
					pt_BR: 'HADES',
					en_US: 'HADES',
					es_ES: 'HADES'
				},
				description: {
					pt_BR: `
						O sabor da menta forte é a representação 
						ideal para o deus do submundo. 
						A essência de Hades foi desenvolvida para representar 
						o poderoso deus e o seu reino inferior, 
						trazendo uma forte sensação de refrescância.
					`,
					en_US: `
						O sabor da menta forte é a representação 
						ideal para o deus do submundo. 
						A essência de Hades foi desenvolvida para representar 
						o poderoso deus e o seu reino inferior, 
						trazendo uma forte sensação de refrescância.
					`,
					es_ES: `
						O sabor da menta forte é a representação 
						ideal para o deus do submundo. 
						A essência de Hades foi desenvolvida para representar 
						o poderoso deus e o seu reino inferior, 
						trazendo uma forte sensação de refrescância.
					`
				},
				obs: []
			},
			{
				photos: [
					'poseidon.png'
				],
				name: {
					pt_BR: 'POSEIDON - MELON PASSION',
					en_US: 'POSEIDON - MELON PASSION',
					es_ES: 'POSEIDON - MELON PASSION'
				},
				description: {
					pt_BR: `
						O melão e o maracujá do 
						Olimpo resolveram se juntar nessa essência 
						doce com aquele toque cítrico que você 
						quer na sua sessão. 
						Traga essa força do outro mundo no seu 
						rosh e não se arrependa!
					`,
					en_US: `
							O melão e o maracujá do 
							Olimpo resolveram se juntar nessa essência 
							doce com aquele toque cítrico que você 
							quer na sua sessão. 
							Traga essa força do outro mundo no seu 
							rosh e não se arrependa!
					`,
					es_ES: `
							O melão e o maracujá do 
							Olimpo resolveram se juntar nessa essência 
							doce com aquele toque cítrico que você 
							quer na sua sessão. 
							Traga essa força do outro mundo no seu 
							rosh e não se arrependa!
					`
				},
				obs: []
			},
			{
				photos: [
					'adonis.png'
				],
				name: {
					pt_BR: 'ADONIS - MELON STRAWBERRY',
					en_US: 'ADONIS - MELON STRAWBERRY',
					es_ES: 'ADONIS - MELON STRAWBERRY'
				},
				description: {
					pt_BR: `
						Melão e morango juntos são uma combinação 
						perfeita igual a beleza do sábio Adonis! 
						Junte o doce e azedo do morango e o 
						refrescante do melão e fume 
						esse sabor dos deuses em qualquer estação. 
						O que é gostoso é bem-vindo sempre!
					`,
					en_US: `
						Melão e morango juntos são uma combinação 
						perfeita igual a beleza do sábio Adonis! 
						Junte o doce e azedo do morango e o 
						refrescante do melão e fume 
						esse sabor dos deuses em qualquer estação. 
						O que é gostoso é bem-vindo sempre!
					`,
					es_ES: `
						Melão e morango juntos são uma combinação 
						perfeita igual a beleza do sábio Adonis! 
						Junte o doce e azedo do morango e o 
						refrescante do melão e fume 
						esse sabor dos deuses em qualquer estação. 
						O que é gostoso é bem-vindo sempre!
					`
				},
				obs: []
			},
			{
				photos: [
					'afrodite.png'
				],
				name: {
					pt_BR: 'AFRODITE - COTTON CANDY',
					en_US: 'AFRODITE - COTTON CANDY',
					es_ES: 'AFRODITE - COTTON CANDY'
				},
				description: {
					pt_BR: `
						Sinta o amor na sua sessão! 
						O algodão doce do Olimpo é leve, 
						docinho e com aquela refrescância única, 
						que leva vocês aos céus! 
						Experimente a doçura leve de Afrodite.
					`,
					en_US: `
						Sinta o amor na sua sessão! 
						O algodão doce do Olimpo é leve, 
						docinho e com aquela refrescância única, 
						que leva vocês aos céus! 
						Experimente a doçura leve de Afrodite.
					`,
					es_ES: `
						Sinta o amor na sua sessão! 
						O algodão doce do Olimpo é leve, 
						docinho e com aquela refrescância única, 
						que leva vocês aos céus! 
						Experimente a doçura leve de Afrodite.
					`
				},
				obs: []
			},
			{
				photos: [
					'ares.png'
				],
				name: {
					pt_BR: 'ARES - MIXED MELON',
					en_US: 'ARES - MIXED MELON',
					es_ES: 'ARES - MIXED MELON'
				},
				description: {
					pt_BR: `
						A essência do poderoso deus 
						Ares agora pode ser sua! 
						Sinta o poder do deus da guerra na sua 
						sessão e se surpreenda com o 
						mix de melões mais poderoso 
						do Olimpo! 
						O poder é seu, sinta!
					`,
					en_US: `
						A essência do poderoso deus 
						Ares agora pode ser sua! 
						Sinta o poder do deus da guerra na sua 
						sessão e se surpreenda com o 
						mix de melões mais poderoso 
						do Olimpo! 
						O poder é seu, sinta!
					`,
					es_ES: `
						A essência do poderoso deus 
						Ares agora pode ser sua! 
						Sinta o poder do deus da guerra na sua 
						sessão e se surpreenda com o 
						mix de melões mais poderoso 
						do Olimpo! 
						O poder é seu, sinta!
					`
				},
				obs: []
			},
			{
				photos: [
					'hera.png'
				],
				name: {
					pt_BR: 'HERA - CHERRY LEMON',
					en_US: 'HERA - CHERRY LEMON',
					es_ES: 'HERA - CHERRY LEMON'
				},
				description: {
					pt_BR: `
						Uma das melhores combinações do Olimpo, 
						a essência de Hera apresenta a mistura 
						perfeita de cereja com limão. 
						Com um gosto único, a cereja traz 
						o aspecto doce e o limão refresca 
						o sabor, tornando-o harmônico.
					`,
					en_US: `
						Uma das melhores combinações do Olimpo, 
						a essência de Hera apresenta a mistura 
						perfeita de cereja com limão. 
						Com um gosto único, a cereja traz 
						o aspecto doce e o limão refresca 
						o sabor, tornando-o harmônico.
					`,
					es_ES: `
						Uma das melhores combinações do Olimpo, 
						a essência de Hera apresenta a mistura 
						perfeita de cereja com limão. 
						Com um gosto único, a cereja traz 
						o aspecto doce e o limão refresca 
						o sabor, tornando-o harmônico.
					`
				},
				obs: []
			},
			{
				photos: [
					'hermes.png'
				],
				name: {
					pt_BR: 'HERMES - BUBBLE GUM',
					en_US: 'HERMES - BUBBLE GUM',
					es_ES: 'HERMES - BUBBLE GUM'
				},
				description: {
					pt_BR: `
						Esse é um chiclete do outro mundo! 
						Com o gosto do chiclete que lembra a 
						infânica de tutti fruti, a essência 
						de Hermes é diferente de tudo que 
						você já provou. 
						É uma explosão do chiclete na sua boca!
					`,
					en_US: `
						Esse é um chiclete do outro mundo! 
						Com o gosto do chiclete que lembra a 
						infânica de tutti fruti, a essência 
						de Hermes é diferente de tudo que 
						você já provou. 
						É uma explosão do chiclete na sua boca!
					`,
					es_ES: `
						Esse é um chiclete do outro mundo! 
						Com o gosto do chiclete que lembra a 
						infânica de tutti fruti, a essência 
						de Hermes é diferente de tudo que 
						você já provou. 
						É uma explosão do chiclete na sua boca!
					`
				},
				obs: []
			}
		]
	},
	selectedProduct: {
		modal: false,
		product: null
	}
}

class ProductsComponent extends Component {
	constructor(props) {
		super(props)

		this.state = { ...INITIAL_STATE }
		this.toggle = this.toggle.bind(this)
	}

	componentDidMount = () => {
		ReactGA.initialize('UA-176583286-1')
		ReactGA.event({
			category: 'page',
			action: 'User has entered at products page'
		})
	}

	toggle = () => {
		this.setState({
			selectedProduct: {
				...this.state.selectedProduct,
				modal: !this.state.selectedProduct.modal
			}
		})
	}

	handleSelectProduct = (product) => {
		this.setState({
			selectedProduct: {
				modal: true,
				product
			}
		})
	}

	render() {
		const { confirmAge, languages, loading, categories, selectedCategory, selectedProduct } = this.state
		const { selectedLanguage } = this.props

		if (loading) {
			return (
				<div id="products-component">
					<LoadingComponent />
				</div>
			)
		}

		return (
			<>
				<Container id="products-component"
					style={{
						backgroundImage: (selectedCategory.id === 1 ? `url(${bgVovo})` : selectedCategory.id === 2 ? `url(${bgEraDeuses})` : `url(${bgTradicional})`),
						backgroundColor: (selectedCategory.id === 3 ? "#fff" : ""),
						backgroundRepeat: 'repeat',
						backgroundPosition: 'center'
					}}
					fluid>
					<Row>
						<Col xs="12">
							<div className="section-one text-center">
								<h1>CONHEÇA NOSSAS COLEÇÕES</h1>
							</div>
						</Col>
					</Row>
					<Row>
						{
							categories.length > 0 && categories.map((category, i) => {
								return (
									<Col key={i} xs="12" sm="12" md="4">
										<div onClick={() => this.setState({ selectedCategory: category })} className={`text-center p-2 image-collection rounded ${selectedCategory.id === category.id ? "selection-bordered" : ""}`}>
											<img width={(category.id === 1 ? "250px" : (category.id === 2 ? "450px" : "300px"))} className="img-fluid" src={require(`./../../assets/images/embalagens/${category.cover}`)} alt={category.name[selectedLanguage]} />
										</div>
										<div className="text-center font-weight-bolder">
											<p style={{ color: category.color }}>{category.name[selectedLanguage]}</p>
										</div>
									</Col>
								)
							})
						}
					</Row>
					<DividerComponent pt="0px" pb="0px" mt="45px" mb="45px" />
					<Row className="pb-5">
						{
							selectedCategory.products.length > 0 && selectedCategory.products.map((product, i) => {
								return (
									<Col key={i} xs="12" sm="12" md="4">
										<div onClick={() => this.handleSelectProduct(product)} className="cover-image">
											<div>
												<img className="img-fluid" src={require(`./../../assets/images/embalagens/${product.photos[0]}`)} alt={product.name[selectedLanguage]} />
											</div>
											<div className="bg-dark text-white pt-2 pb-1 rounded text-center">
												<h3>{product.name[selectedLanguage]}</h3>
											</div>
										</div>
									</Col>
								)
							})
						}
					</Row>
					<div id="modal-place">
						{
							selectedProduct.product && selectedProduct.modal &&
							<Modal size="xl" isOpen={selectedProduct.modal} toggle={this.toggle}>
								<ModalHeader toggle={this.toggle}>{selectedProduct.product.name[selectedLanguage]}</ModalHeader>
								<ModalBody>
									<Row>
										<Col xs="12" sm="12" md="4">
											<img src={require(`./../../assets/images/embalagens/${selectedProduct.product.photos[0]}`)} className="img-fluid" alt={selectedProduct.product.name[selectedLanguage]} />
										</Col>
										<Col xs="12" sm="12" md="8">
											<div className="product-details">
												<h1>{selectedProduct.product.name[selectedLanguage]}</h1>
												<p className="text-dark">
													{`
													${selectedProduct.product.description[selectedLanguage]}
												`}
												</p>
												{
													selectedProduct.product.obs.length > 0 && selectedProduct.product.obs.map((obs, i) => {
														return (
															<div key={i} className="product-obs">
																<h1>{obs.title[selectedLanguage]}</h1>
																<p className="text-dark">{obs.text[selectedLanguage]}</p>
															</div>
														)
													})
												}
											</div>
										</Col>
									</Row>
								</ModalBody>
							</Modal>
						}
					</div>
				</Container>
			</>
		)
	}
}

export default ProductsComponent