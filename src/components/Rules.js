import React from 'react'
import {
	Card, CardText, CardBody,
	CardTitle, Col, Row, Container
} from 'reactstrap'

const Rules = () => {

	return (
		<div>
			<Container>
				<Row>
					<Col xs='12'>
						<Card>
							<CardBody>
								<CardTitle><h3>Rules</h3></CardTitle>
								<CardText>
									<p>
										Any live cell with fewer than two live neighbours dies, as if by underpoppation.
									</p>
									<p>
										Any live cell with two or three live neighbours lives on to the next generation.
									</p>
									<p>
										Any live cell with more than three live neighbours dies, as if by overpoppation.
									</p>
									<p>
										Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
									</p>
								</CardText>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Rules