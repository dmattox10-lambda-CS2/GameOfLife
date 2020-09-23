import React, { useState } from 'react'
import { useInterval } from '../hooks/useInterval'
import Slider from 'react-rangeslider'

import Grid from './Grid'
import Controls from './Controls'
import Presets from './Presets'

import { GENERATION_TIME, createWorld, nextGeneration, shuffle } from '../game'
import { loadPreset } from '../presets'

const Game = () => {

	const [world, updateWorld] = useState(loadPreset('line'))
	const [generation, setGeneration] = useState(0)
	const [playing, setPlaying] = useState(false)
	const [color, setColor] = useState('#424151')
	const [speed, setSpeed] = useState(GENERATION_TIME)

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
	}, playing === true ? speed : null)

	const onPlay = () => {
		setPlaying(true)
		// interval = setInterval(() => onNext(), GENERATION_TIME)
	}
	const onStop = () => {
		setPlaying(false)
		// clearInterval(interval)
	}

	const onSpeed = value => setSpeed(value)

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
			<p>Simulation Speed: (Time between generations, more is slower)</p>
			<Slider
				value={speed}
				min={200}
				max={2000}
				step={100}
				orientation='horizontal'
				onChange={onSpeed}
			/>
			<Presets
				load={onPreset}
				playing={playing}
			/>
		</div>
	)
}

export default Game