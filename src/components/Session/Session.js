import React from 'react';
import PropTypes from 'prop-types';
import './Session.scss';
import { PlusIcon } from '../PlusIcon/PlusIcon';
import { Button } from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';

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
                    <Dropdown />
                </div>
            </div>
        </div>
    );
};

Session.propTypes = {};

export default Session;