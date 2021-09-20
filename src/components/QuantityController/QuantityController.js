import React from "react";
import { connect } from "react-redux";
import { MinusIcon } from "../InteractiveElements/MinusIcon/MinusIcon";
import { PlusIcon } from "../InteractiveElements/PlusIcon/PlusIcon";

export const QuantityController = ({ children, childType, shapes }) => {
  console.log(shapes.title);

  const handleAddQuantity = () => {
    console.log("Add shape type");
  };

  const handleDeleteAllOfShapeType = () => {
    console.log("Delete all of shape type");
  };

  return (
    <div className="quantity-control--flexbox-wrapper">
      <div className="quantity-control--flexbox-wrapper__header">
        <PlusIcon clickHandler={handleAddQuantity} />
        {children}
        <MinusIcon clickHandler={handleDeleteAllOfShapeType} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log("This is mapStateToProps in Quantity controller");
  let title = "Triangle";
  return {
    shapes: state.shapes.find((shape) => shape.title === title),
    // shapes: state.shapes,
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
