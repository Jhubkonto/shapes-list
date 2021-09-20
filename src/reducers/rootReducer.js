const initState = {
  shapes: [
    { count: 1, title: "Square" },
    { count: 1, title: "Triangle" },
    { count: 1, title: "Circle" },
  ],
};

const rootReducer = (state = initState, action) => {
  if (action.type === "DELETE_SHAPE") {
    let newShapes = state.shapes.filter((shape) => {
      return action.title !== shape.title;
    });
    return {
      ...state,
      shapes: newShapes,
    };
  }
  return state;
};

export default rootReducer;
