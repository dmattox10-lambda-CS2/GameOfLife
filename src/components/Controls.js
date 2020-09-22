import React, { useState } from 'react'
import { Button } from 'reactstrap'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'

const Controls = props => {

	const [show, setShow] = useState(false)

	const handleClick = () => setShow(prevShow => !prevShow)
	const handleClose = () => setShow(false)
	const handleChange = newColor => props.changeColor(newColor)

	const styles = reactCSS({
		'default': {
			color: {
				width: '36px',
				height: '14px',
				borderRadius: '2px',
				background: `${props.color}`,
			},
			swatch: {
				padding: '5px',
				background: '#fff',
				borderRadius: '1px',
				boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
				display: 'inline-block',
				cursor: 'pointer',
			},
			popover: {
				position: 'absolute',
				zIndex: '2',
			},
			cover: {
				position: 'fixed',
				top: '0px',
				right: '0px',
				bottom: '0px',
				left: '0px',
			},
		},
	})

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
			<br />
			<p>Active Cell Color: <div style={styles.swatch} onClick={handleClick}>
				<div style={styles.color} />
			</div></p>
			{ show ? <div style={styles.popover}>
				<div style={styles.cover} onClick={handleClose} />
				<SketchPicker color={props.color} onChange={(e) => handleChange(e.hex)} />
			</div> : null}
		</div>
	)
}

export default Controls