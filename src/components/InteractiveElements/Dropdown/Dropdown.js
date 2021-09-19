import React, { useState } from 'react'
import { CircleShape } from '../../Shapes/CircleShape/CircleShape'
import { DownArrow } from '../../DownArrrow/DownArrow'
import { QuantityController } from '../../QuantityController/QuantityController'
import { SquareShape } from '../../Shapes/SquareShape/SquareShape'
import { TriangleShape } from '../../Shapes/TriangleShape/TriangleShape'
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
                            <SquareShape />
                        </QuantityController>
                    </li>
                    <li className="dropdown--list__item">
                        <QuantityController>
                            <CircleShape />
                        </QuantityController>
                    </li>
                    <li className="dropdown--list__item">
                        <QuantityController>
                            <TriangleShape />
                        </QuantityController>
                    </li>
                </ul>
            )}
        </div>
    )
}

export default Dropdown
