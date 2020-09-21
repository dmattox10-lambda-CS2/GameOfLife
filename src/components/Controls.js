import React from 'react'
import { Button } from 'reactstrap'

const Controls = props => {

	return (
		<div className='controls'>
			<Button color='primary' icon='random' labelPosition='right'
				onClick={props.shuffle} disabled={props.playing}
			>Shuffle</Button>
			<Button color='primary' icon='redo' labelPosition='right' onClick={props.clear}>Clear</Button>
			<Button color='primary' icon='right arrow' labelPosition='right' onClick={props.next}>Next</Button>
			{props.playing ?
				<Button color='danger' icon='stop' labelPosition='right' onClick={props.stop}>Stop</Button> :
				<Button color='success' icon='play' labelPosition='right' onClick={props.play}>Play</Button>
			}
		</div>
	)
}

export default Controls