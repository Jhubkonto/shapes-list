import React from "react";
import { connect } from "react-redux";
import {
  increaseShapeQuantityByOne,
  decreaseShapeQuantityByOne,
} from "../actions/shapeActions";
import { MinusIcon } from "../InteractiveElements/MinusIcon/MinusIcon";
import { PlusIcon } from "../InteractiveElements/PlusIcon/PlusIcon";

export const QuantityController = ({
  children,
  shapeType,
  shapes,
  addQuantity,
  subtractQuantity,
}) => {
  console.log("Log from QuantityController: ");
  console.log(shapes);

  const handleAddQuantity = () => {
    addQuantity(shapeType);
  };

  const handleDeleteAllOfShapeType = () => {
    subtractQuantity(shapeType);
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
  return {
    shapes: state.shapes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addQuantity: (title) => {
      dispatch(increaseShapeQuantityByOne(title));
    },
    subtractQuantity: (title) => {
      dispatch(decreaseShapeQuantityByOne(title));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuantityController);
