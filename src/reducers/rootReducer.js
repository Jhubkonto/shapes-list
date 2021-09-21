import {
  ADD_RANDOM_SHAPE,
  DECREASE_SHAPE_QUANTITY_BY_ONE,
  DELETE_ALL_OF_SHAPE_TYPE,
  DELETE_ALL_SHAPES,
  INCREASE_SHAPE_QUANTITY_BY_ONE,
  SHUFFLE_SHAPES,
} from "../components/actions/action-types/shape-actions";

const shapeTypes = ["Square", "Triangle", "Circle"];

const initState = {
  shapes: [{ title: "Square" }, { title: "Triangle" }, { title: "Circle" }],
};

const rootReducer = (state = initState, action) => {
  if (action.type === DELETE_ALL_SHAPES) {
    console.log("DELETE_ALL_SHAPES");
    return {
      ...state,
      shapes: [],
    };
  }

  if (action.type === DELETE_ALL_OF_SHAPE_TYPE) {
    let filteredShapes = state.shapes.filter(
      (shape) => action.title !== shape.title
    );
    return {
      ...state,
      shapes: filteredShapes,
    };
  }

  if (action.type === DECREASE_SHAPE_QUANTITY_BY_ONE) {
    let shapeToDelete = state.shapes.find(
      (shape) => action.title === shape.title
    );
    console.log("DECREASE_SHAPE_QUANTITY_BY_ONE: " + shapeToDelete.title);
    const newShapes = state.shapes;
    for (let shape of newShapes) {
      if (shape.title === action.title) {
        shape.count -= 1;
      }
    }
    return {
      ...state,
      shapes: newShapes,
    };
  }

  if (action.type === INCREASE_SHAPE_QUANTITY_BY_ONE) {
    const newShapes = state.shapes.concat({ title: action.title });
    return {
      ...state,
      shapes: newShapes,
    };
  }

  if (action.type === ADD_RANDOM_SHAPE) {
    const randomElement =
      shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
    const newShapes = state.shapes.concat({ title: randomElement });
    return {
      ...state,
      shapes: newShapes,
    };
  }

  if (action.type === SHUFFLE_SHAPES) {
    console.log("Shapes have been shuffled");
    console.log("before shuffle", state.shapes);
    const shuffledShapes = state.shapes;
    // https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
    shuffledShapes.sort((a, b) => 0.5 - Math.random());
    console.log("shuffledShapes", shuffledShapes);

    return {
      ...state,
      shapes: shuffledShapes,
    };
  }

  return state;
};

export default rootReducer;
