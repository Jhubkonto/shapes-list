const initState = {
    shapes: [
        { key: '1', title: 'Square' },
        { key: '2', title: 'Triangle' },
        { key: '3', title: 'Circle' },
    ],
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_SHAPE') {
        let newShapes = state.shapes.filter((shape) => {
            return action.title !== shape.title
        })
        return {
            ...state,
            shapes: newShapes,
        }
    }
    return state
}

export default rootReducer
