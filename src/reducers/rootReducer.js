import {
  ADD_RANDOM_SHAPE,
  DECREASE_SHAPE_QUANTITY_BY_ONE,
  DELETE_ALL_OF_SHAPE_TYPE,
  DELETE_ALL_SHAPES,
  INCREASE_SHAPE_QUANTITY_BY_ONE,
  SHUFFLE_SHAPES,
} from "../components/actions/action-types/shape-actions";

const initState = {
  shapes: [
    { title: "Square", count: 5 },
    { title: "Triangle", count: 1 },
    { title: "Circle", count: 1 },
  ],
};

const rootReducer = (state = initState, action) => {
  if (action.type === DELETE_ALL_SHAPES) {
    // TODO: Lookup syntax for how to return the action correctly
    state.shapes = [];
    return {
      ...state,
    };
  }

  if (action.type === DELETE_ALL_OF_SHAPE_TYPE) {
    // Remove all instances of shape from array
    let newShapes = state.shapes.filter((shape) => {
      return action.title !== shape.title;
    });
    // TODO: Lookup syntax for how to return the action correctly
    return {
      ...state,
      shapes: newShapes,
    };
  }

  if (action.type === DECREASE_SHAPE_QUANTITY_BY_ONE) {
    let shapeToDelete = state.shapes.find(
      (shape) => action.title === shape.title
    );
    const newShapes = state.shapes;
    console.log("DECREASE_SHAPE_QUANTITY_BY_ONE: " + shapeToDelete.title);
    for (let shape of newShapes) {
      if (shape.title === action.title) {
        shape.count -= 1;
      }
    }
    return {
      ...state,
    };
  }

  if (action.type === INCREASE_SHAPE_QUANTITY_BY_ONE) {
    let shapeToAdd = state.shapes.find((shape) => action.title === shape.title);
    const newShapes = state.shapes;
    console.log("INCREASE_SHAPE_QUANTITY_BY_ONE: " + shapeToAdd.title);
    for (let shape of newShapes) {
      if (shape.title === action.title) {
        shape.count += 1;
      }
    }
    return {
      ...state,
      shapes: newShapes,
    };
  }

  if (action.type === ADD_RANDOM_SHAPE) {
    let randomShapeToAdd =
      state.shapes[Math.floor(Math.random() * state.shapes.length)];

    let newRandomShapeCount = state.shapes.randomShapeToAdd.count - 1;
    console.log();
    // TODO: Lookup syntax for how to return the action correctly
    return {
      ...state,
    };
  }

  if (action.type === SHUFFLE_SHAPES) {
    let randomShapeToShuffle =
      state.shapes[Math.floor(Math.random() * state.shapes.length)];

    // TODO: Lookup syntax for how to return the action correctly
    return {
      ...state,
    };
  }

  return state;
};

export default rootReducer;
