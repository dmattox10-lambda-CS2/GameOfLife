import React from 'react'
import { Container, Row, Col, Jumbotron } from 'reactstrap'
import Game from './components/Game'
import Rules from './components/Rules'

import './App.css'
import 'bootswatch/dist/slate/bootstrap.min.css'
import 'react-rangeslider/lib/index.css'


function App() {
	return (
		<div className="App">
			<Container>
				<Row>
					<Col xs='12'>
						<Jumbotron>
							<h1>Conway&apos;s Game of Life</h1>
						</Jumbotron>
					</Col>
				</Row>
				<Row>
					<Col xs='12'>
						<Container>
							<Game />
						</Container>
					</Col>
				</Row>
				<Row>
					<Col xs='12'>
						<Rules />
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default App
