import React, { useState } from 'react'
import { Circle } from '../../Shapes/CircleShape/Circle'
import { DownArrow } from '../../DownArrrow/DownArrow'
import { QuantityController } from '../../QuantityController/QuantityController'
import { Square } from '../../Shapes/SquareShape/Square'
import { Triangle } from '../../Shapes/TriangleShape/Triangle'
import './Dropdown.scss'

const Dropdown = () => {
    const [open, setOpen] = useState(false)
    const toggle = () => setOpen(!open)

    return (
        <div className="dropdown--wrapper">
            <div
                className="dropdown--header"
                role="button"
                onClick={() => toggle(!open)}
            >
                <h1>Available shapes</h1>
                <DownArrow />
            </div>
            {open && (
                <ul className="dropdown--list">
                    <li className="dropdown--list__item">
                        <QuantityController>
                            <Square />
                        </QuantityController>
                    </li>
                    <li className="dropdown--list__item">
                        <QuantityController>
                            <Circle />
                        </QuantityController>
                    </li>
                    <li className="dropdown--list__item">
                        <QuantityController>
                            <Triangle />
                        </QuantityController>
                    </li>
                </ul>
            )}
        </div>
    )
}

export default Dropdown
