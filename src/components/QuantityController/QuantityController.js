import React from "react";
import { connect } from "react-redux";
import { MinusIcon } from "../InteractiveElements/MinusIcon/MinusIcon";
import { PlusIcon } from "../InteractiveElements/PlusIcon/PlusIcon";

export const QuantityController = ({ shapes, children }) => {
  //   console.log(children.type.name);
  const handleAddShapeType = () => {
    console.log("Add shape type");
  };

  const handleDeleteAllShapeType = () => {
    console.log("Delete all of shape type");
  };

  return (
    <div className="quantity-control--flexbox-wrapper">
      <div className="quantity-control--flexbox-wrapper__header">
        <PlusIcon clickHandler={handleAddShapeType} />
        {children}
        <MinusIcon clickHandler={handleDeleteAllShapeType} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  // let title = children.type.name
  let title = "Square";
  return {
    shapes: state.shapes.find((shape) => shape.title === title),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteShape: (title) => {
      dispatch({ type: "DELETE_SHAPE", title: title });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuantityController);
