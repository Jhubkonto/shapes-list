import React from 'react';
import PropTypes from 'prop-types';
import './Session.scss';
import { PlusIcon } from '../PlusIcon/PlusIcon';
import { MinusIcon } from '../MinusIcon/MinusIcon';
import { SquareShape } from '../SquareShape/SquareShape';
import { CircleShape } from '../CircleShape/CircleShape';
import { TriangleShape } from '../TriangleShape/TriangleShape';
import { Button } from '../Button/Button';

const Session = () => {

    return (
        <div className="session--grid">
            <div className="session--grid__cell">
                <div className="session--flexbox">
                    <div className="session--flexbox__item">
                        <PlusIcon newSize="256"/>
                    </div>
                </div>
            </div>
            <div className="session--grid__cell">
                <div className="session--flexbox">
                    <div className="session--flexbox__item">
                        <Button>Shuffle shapes</Button>
                    </div>
                    <div className="session--flexbox__item">
                        <Button>Delete all shapes</Button>
                    </div>
                </div>
            </div>
            <div className="session--grid__cell">
                <div className="session--flexbox">
                    <div className="session--flexbox__item">
                        <MinusIcon />
                        <SquareShape />
                        <PlusIcon />
                    </div>
                    <div className="session--flexbox__item">
                        <MinusIcon />
                        <CircleShape />
                        <PlusIcon />
                    </div>
                    <div className="session--flexbox__item">
                        <MinusIcon />
                        <TriangleShape />
                        <PlusIcon />
                    </div>
                </div>
            </div>
        </div>
    );
};

Session.propTypes = {};

export default Session;