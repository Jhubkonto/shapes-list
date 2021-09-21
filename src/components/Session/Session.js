import React from "react";
import "./Session.scss";
import { PlusIcon } from "../InteractiveElements/PlusIcon/PlusIcon";
import { Button } from "../InteractiveElements/Button/Button";
import { connect } from "react-redux";
import { ShapeMapper } from "../ShapeMapper/ShapeMapper";
import ShapeDropdown from "../InteractiveElements/ShapeDropdown/ShapeDropdown";
import { deleteAllShapes } from "../actions/shapeActions";

const Session = ({ shapes, deleteAll }) => {
  const shapeList = shapes.length;

  const handleDeleteAll = () => {
    deleteAll();
  };

  return (
    <React.Fragment>
      <div className="session--grid">
        <div className="session--grid__cell">
          <div className="session--flexbox">
            <div className="session--flexbox__item">
              <PlusIcon newSize="256" />
            </div>
          </div>
        </div>
        <div className="session--grid__cell">
          <div className="session--flexbox">
            <div className="session--flexbox__item">
              <Button>Shuffle shapes</Button>
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
      {shapeList && (
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Session);
