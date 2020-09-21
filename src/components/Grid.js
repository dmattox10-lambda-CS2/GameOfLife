import React from 'react'
import { changeArrayValue } from '../game'

const Grid = props => {

	const toggleCell = (cell, x, y) => {
		const { world } = props
		const row = changeArrayValue(world[y], x, cell ? 0 : 1)
		const newWorld = changeArrayValue(world, y, row)
		props.onChange(newWorld)
	}

	const renderCell = (cell, x, y) => {
		return (
			<div key={x}
				className='cell'
				onMouseDown={() => toggleCell(cell, x, y)}
				style={{ backgroundColor: cell ? '#424151' : null }}
			/>
		)
	}

	const renderRow = (row, y) => (
		<div className='game-row' key={y}>
			{row.map((cell, x) => renderCell(cell, x, y))}
		</div>
	)

	return (
		<div className='game-grid'>
			{props.world.map((row, y) => renderRow(row, y))}
		</div>
	)

}

export default Grid