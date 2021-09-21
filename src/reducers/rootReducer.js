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
    // let shapeToDelete = state.shapes.find((shape) => {
    //   return action.title === shape.title;
    // });
    // console.log("DELETE_ALL_OF_SHAPE_TYPE: " + shapeToDelete.title);
    // const newShapes = state.shapes;
    // for (let shape of newShapes) {
    //   if (shape.title === action.title) {
    //     shape.count = 0;
    //   }
    // }
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
    // let shapeToAdd = state.shapes.find((shape) => action.title === shape.title);
    // console.log("INCREASE_SHAPE_QUANTITY_BY_ONE: " + shapeToAdd.title);
    // const newShapes = state.shapes;
    // for (let shape of newShapes) {
    //   if (shape.title === action.title) {
    //     shape.count += 1;
    //   }
    // }
    const newShapes = state.shapes.concat({ title: action.title });
    return {
      ...state,
      shapes: newShapes,
    };
  }

  if (action.type === ADD_RANDOM_SHAPE) {
    // let randomShapeToAdd =
    //   state.shapes[Math.floor(Math.random() * state.shapes.length)];

    // let newRandomShapeCount = state.shapes.randomShapeToAdd.count - 1;
    // console.log();
    // TODO: Lookup syntax for how to return the action correctly
    const randomElement =
      shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
    const newShapes = state.shapes.concat({ title: randomElement });
    return {
      ...state,
      shapes: newShapes,
    };
  }

  if (action.type === SHUFFLE_SHAPES) {
    // let randomShapeToShuffle =
    //   state.shapes[Math.floor(Math.random() * state.shapes.length)];

    // TODO: Lookup syntax for how to return the action correctly
    return {
      ...state,
    };
  }

  return state;
};

export default rootReducer;
