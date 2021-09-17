import React, { useState } from 'react'
import { CircleShape } from '../CircleShape/CircleShape'
import { DownArrow } from '../DownArrrow/DownArrow'
import { MinusIcon } from '../MinusIcon/MinusIcon'
import { PlusIcon } from '../PlusIcon/PlusIcon'
import { SquareShape } from '../SquareShape/SquareShape'
import { TriangleShape } from '../TriangleShape/TriangleShape'
import './Dropdown.scss'

const Dropdown = () => {
    const [open, setOpen] = useState(false)
    const toggle = () => setOpen(!open)

    const handleDelForSquare = () => {
        console.log('Delete all squares')
    }

    const handleAddForSquare = () => {
        console.log('Add a square')
    }

    const handleDelForCircle = () => {
        console.log('Delete all circles')
    }

    const handleAddForCircle = () => {
        console.log('Add a circle')
    }

    const handleDelForTriangle = () => {
        console.log('Delete all triangles')
    }

    const handleAddForTriangle = () => {
        console.log('Delete a triangle')
    }

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
                        <MinusIcon clickHandler={handleDelForSquare} />
                        <SquareShape />
                        <PlusIcon clickHandler={handleAddForSquare} />
                    </li>
                    <li className="dropdown--list__item">
                        <MinusIcon clickHandler={handleDelForCircle} />
                        <CircleShape />
                        <PlusIcon clickHandler={handleAddForCircle} />
                    </li>
                    <li className="dropdown--list__item">
                        <MinusIcon clickHandler={handleDelForTriangle} />
                        <TriangleShape />
                        <PlusIcon clickHandler={handleAddForTriangle} />
                    </li>
                </ul>
            )}
        </div>
    )
}

export default Dropdown
