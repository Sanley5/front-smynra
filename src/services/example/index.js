// just an example with external api call by services into react
import axios from 'axios'
require('dotenv').config()

const {
	REACT_APP_API_URL
} = process.env

export const exampleAPICall = (data) => {
	return axios.create({
		headers: {
			'Cache-Control': 'no-cache',
			'Content-Type': 'application/json'
		},
		json: true
	}).post(`${REACT_APP_API_URL}/`, data)
		.then(response => {
			return response
		})
		.catch(err => {
			throw err
		})
}