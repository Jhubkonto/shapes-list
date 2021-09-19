import React from 'react'
import { CircleShape } from '../Shapes/CircleShape/CircleShape'
import { SquareShape } from '../Shapes/SquareShape/SquareShape'
import { TriangleShape } from '../Shapes/TriangleShape/TriangleShape'

export const ShapeMapper = ({ children }) => {
    const renderShape = () => {
        switch (children) {
            case 'Square': {
                return <SquareShape />
            }
            case 'Triangle': {
                return <TriangleShape />
            }
            case 'Circle': {
                return <CircleShape />
            }
            default: {
                return
            }
        }
    }
    return <div>{renderShape()}</div>
}
