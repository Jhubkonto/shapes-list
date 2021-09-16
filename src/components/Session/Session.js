import React from 'react';
import PropTypes from 'prop-types';
import './Session.scss';

const Session = () => {

    

    return (
        <div className="grid">
            <div className="grid--cell">
                <h1>Add random shape</h1>
                <button>Add</button>
            </div>
            <div className="grid--cell">
                <button>Shuffle</button>
                <button>Delete all</button>
            </div>
            <div className="grid--cell">
                <h1>Available shapes</h1>
                <div className="flex">
                    <div>
                        <button>delete all squares</button>
                        <h2>Square</h2>
                        <button>add a square</button>
                    </div>
                    <div>
                        <button>delete all cicles</button>
                        <h2>Circle</h2>
                        <button>add a circle</button>
                    </div>
                    <div>
                        <button>delete all triangles</button>
                        <h2>Triangle</h2>
                        <button>add a triangle</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Session.propTypes = {};

export default Session;