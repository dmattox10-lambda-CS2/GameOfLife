import React, { useState } from 'react'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap'
const options = [
	{ key: 'line', value: 'line', text: 'Line' },
	{ key: 'glider', value: 'glider', text: 'Glider' },
	{ key: 'pulsar', value: 'pulsar', text: 'Pulsar' },
	{ key: 'diehard', value: 'diehard', text: 'Diehard' },
	{ key: 'gliderGun', value: 'gliderGun', text: 'Gosper Glider Gun' }
]

const Presets = props => {

	const [preset, setPreset] = useState('line')
	const [dropdownOpen, setOpen] = useState(false)

	const toggle = () => setOpen(!dropdownOpen)

	const onLoad = () => {
		return preset ? props.load(preset) : null
	}

	return (
		<div className='controls'>
			<ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
				<DropdownToggle caret>
                    Select a Preset:
				</DropdownToggle>
				<DropdownMenu>
					{
						options.map(option => (
							<DropdownItem key={option.key} value={option.value} onClick={() => setPreset(option.value)}>{option.text}</DropdownItem>
						))
					}
				</DropdownMenu>
			</ButtonDropdown>
			<Button
				content='Load'
				onClick={onLoad}
				disabled={props.playing}
			>Load</Button>
		</div>
	)

}

export default Presets