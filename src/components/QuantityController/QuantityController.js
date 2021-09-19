import React from 'react'
import { MinusIcon } from '../InteractiveElements/MinusIcon/MinusIcon'
import { PlusIcon } from '../InteractiveElements/PlusIcon/PlusIcon'

export const QuantityController = ({ children }) => {
    return (
        <div>
            <MinusIcon />
            {children}
            <PlusIcon />
        </div>
    )
}
