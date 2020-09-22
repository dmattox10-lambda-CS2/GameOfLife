import React, { useState } from 'react'
import { Button } from 'reactstrap'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRandom, faTimesCircle, faForward, faStopCircle, faPlay } from '@fortawesome/free-solid-svg-icons'

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
			<Button color='primary'
				onClick={props.shuffle} disabled={props.playing}
			>Shuffle&nbsp;<FontAwesomeIcon icon={faRandom} /></Button>
			<Button color='primary' onClick={props.clear}>Clear&nbsp;<FontAwesomeIcon icon={faTimesCircle} /></Button>
			<Button color='primary' onClick={props.next}>Next&nbsp;<FontAwesomeIcon icon={faForward} /></Button>
			{props.playing ?
				<Button color='danger' onClick={props.stop}>Stop&nbsp;<FontAwesomeIcon icon={faStopCircle} /></Button> :
				<Button color='success' onClick={props.play}>Play&nbsp;<FontAwesomeIcon icon={faPlay} /></Button>
			}
			<br />
			<p>Active Cell Color: </p><div style={styles.swatch} onClick={handleClick}>
				<div style={styles.color} />
			</div>
			{ show ? <div style={styles.popover}>
				<div style={styles.cover} onClick={handleClose} />
				<SketchPicker color={props.color} onChange={(e) => handleChange(e.hex)} />
			</div> : null}
		</div>
	)
}

export default Controls