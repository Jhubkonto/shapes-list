import React, { useState } from 'react';
import { CircleShape } from '../CircleShape/CircleShape';
import { DownArrow } from '../DownArrrow/DownArrow';
import { MinusIcon } from '../MinusIcon/MinusIcon';
import { PlusIcon } from '../PlusIcon/PlusIcon';
import { SquareShape } from '../SquareShape/SquareShape';
import { TriangleShape } from '../TriangleShape/TriangleShape';
import './Dropdown.scss';

const Dropdown = () => {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open)

    return (
        <div className="dropdown--wrapper">
            <div
                className="dropdown--header"
                role="button"
                onClick={() => toggle(!open)}
            >
                <h1>Available shapes</h1>
                <DownArrow/>
            </div>
            {open && (
                <ul className="dropdown--list">
                    <li className="dropdown--list__item">
                        <MinusIcon />
                        <SquareShape />
                        <PlusIcon />
                    </li>
                    <li className="dropdown--list__item">
                        <MinusIcon />
                        <CircleShape />
                        <PlusIcon />
                    </li>
                    <li className="dropdown--list__item">
                        <MinusIcon />
                        <TriangleShape />
                        <PlusIcon />
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Dropdown;