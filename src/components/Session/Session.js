import React, { useState } from "react";
import "./Session.scss";
import { PlusIcon } from "../InteractiveElements/PlusIcon/PlusIcon";
import { Button } from "../InteractiveElements/Button/Button";
import { connect } from "react-redux";
import { ShapeMapper } from "../ShapeMapper/ShapeMapper";
import ShapeDropdown from "../InteractiveElements/ShapeDropdown/ShapeDropdown";
import {
  addRandomShape,
  deleteAllShapes,
  shuffleShapes,
} from "../actions/shapeActions";

const Session = ({ shapes, deleteAll, addRandom, shuffle }) => {
  const hasShapes = shapes.length > 0;

  const handleDeleteAll = () => {
    deleteAll();
  };

  const handleAddRandomShape = () => {
    addRandom();
  };

  const handleShuffle = () => {
    shuffle();
  };

  return (
    <React.Fragment>
      <div className="session--grid">
        <div className="session--grid__cell">
          <div className="session--flexbox">
            <div className="session--flexbox__item">
              <PlusIcon clickHandler={handleAddRandomShape} newSize="256" />
            </div>
          </div>
        </div>
        <div className="session--grid__cell">
          <div className="session--flexbox">
            <div className="session--flexbox__item">
              <Button clickHandler={handleShuffle}>Shuffle shapes</Button>
            </div>
            <div className="session--flexbox__item">
              <Button clickHandler={handleDeleteAll}>Delete all shapes</Button>
            </div>
          </div>
        </div>
        <div className="session--grid__cell">
          <div className="session--flexbox">
            <ShapeDropdown />
          </div>
        </div>
      </div>
      {hasShapes && (
        <div className="session--shape-display">
          <div className="session--shape-display__item">
            {shapes.map((shape) => (
              <ShapeMapper>{shape}</ShapeMapper>
            ))}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    shapes: state.shapes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteAll: () => {
      dispatch(deleteAllShapes());
    },
    addRandom: () => {
      dispatch(addRandomShape());
    },
    shuffle: () => {
      dispatch(shuffleShapes());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Session);
