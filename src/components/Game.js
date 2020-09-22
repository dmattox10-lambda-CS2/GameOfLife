import React, { useState } from 'react'
import { useInterval } from '../hooks/useInterval'

import Grid from './Grid'
import Controls from './Controls'
import Presets from './Presets'

import { GENERATION_TIME, createWorld, nextGeneration, shuffle } from '../game'
import { loadPreset } from '../presets'

const Game = props => {

	const [world, updateWorld] = useState(loadPreset('line'))
	const [generation, setGeneration] = useState(0)
	const [playing, setPlaying] = useState(false)
	const [color, setColor] = useState('#424151')

	const changeState = (world, currentGeneration) => {
		updateWorld(world)
		setGeneration(currentGeneration)
	}

	const onChange = world => changeState(world, generation + 1)
	const onClear = () => changeState(createWorld(), 0)
	const onShuffle = () => changeState(shuffle(world), 0)
	const onPreset = preset => changeState(loadPreset(preset), 0)
	const onNext = () => onChange(nextGeneration(world))
	const onColor = newColor => setColor(newColor)

	useInterval(() => {
		onNext()
	}, playing === true ? GENERATION_TIME : null)

	const onPlay = () => {
		setPlaying(true)
		// interval = setInterval(() => onNext(), GENERATION_TIME)
	}
	const onStop = () => {
		setPlaying(false)
		// clearInterval(interval)
	}
	return (
		<div>
			<Grid world={world} onChange={onChange} color={color} />
			<p>Generation: {generation}</p>
			<Controls
				clear={onClear}
				next={onNext}
				play={onPlay}
				stop={onStop}
				shuffle={onShuffle}
				playing={playing}
				color={color}
				changeColor={onColor}
			/>
			<Presets
				load={onPreset}
				playing={playing}
			/>
		</div>
	)
}

export default Game