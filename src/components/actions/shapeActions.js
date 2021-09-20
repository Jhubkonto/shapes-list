import {
  ADD_RANDOM_SHAPE,
  DELETE_ALL_OF_SHAPE_TYPE,
  DELETE_ALL_SHAPES,
  INCREASE_SHAPE_BY_ONE,
  REDUCE_SHAPE_QUANTITY_BY_ONE,
  SHUFFLE_SHAPES,
} from "./action-types/shape-actions";

//Delete all shapes
export const deleteAllShapes = (title) => {
  return {
    type: DELETE_ALL_SHAPES,
    title,
  };
};
//Delete all of shape type action
export const deleteAllShapeType = (title) => {
  return {
    type: DELETE_ALL_OF_SHAPE_TYPE,
    title,
  };
};
//reduce shape quantity by one action
export const decreaseShapeQuantityByOne = (title) => {
  return {
    type: REDUCE_SHAPE_QUANTITY_BY_ONE,
    title,
  };
};
//increase shape quantity by one action
export const increaseShapeQuantityByOne = (title) => {
  return {
    type: INCREASE_SHAPE_BY_ONE,
    title,
  };
};
//add random shape
export const addRandomShape = (title) => {
  return {
    type: ADD_RANDOM_SHAPE,
    title,
  };
};

//shuffle shapes in list
export const shuffleShapes = (title) => {
  return {
    type: SHUFFLE_SHAPES,
    title,
  };
};
