import React from 'react'
import { Container, Row, Col, Jumbotron } from 'reactstrap'
import Game from './components/Game'
import Controls from './components/Controls'
import Rules from './components/Rules'

import 'bootswatch/dist/sketchy/bootstrap.min.css'
import './App.css'

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
					<Col xs='6'>
						<Rules />
					</Col>
					<Col xs='6'>
						<Controls />
					</Col>
				</Row>
				<Row>
					<Col xs='12'>
						<Game />
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default App
