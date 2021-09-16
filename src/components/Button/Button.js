import React from 'react';
import './Button.scss'

export const Button = ({ children, clickHandler }) => {
    return (
        <button
            className="button"
            onClick={clickHandler}
        >
            {children}
        </button>
    );
};