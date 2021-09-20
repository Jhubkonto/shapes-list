# shapes-list
A test of what I know concerning core ReactJS concepts and a learning experience!

# Summary
I tried to componentize as many elements and functions in order to break them down into smaller re-usable parts as that helps me to determine how I can piece everything together and what I'll need next. Some parts of the project I may have overcomplicated such as the way Dropdown, ShapeMapper and QuantityController work together. In hindsight, I'd tackle that differently.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


# Project structure
```shell
App
└── Session
    ├── rootReducer.js
    ├── PlusIcon
    ├── Button
    ├── Dropdown
    │      ├── DropdownArrow
    │      ├── QuantityController
    │      │        ├── PlusIcon
    │      │        ├── MinusIcon
    │      │        └── rootReducer.js
    │      └── ShapeMapper
    │      │        ├── Square
    │      │        ├── Triangle
    │      │        └── Circle
    │      └── config.js
    └── ShapeMapper
           ├── Square
           ├── Triangle
           └── Circle
```

# Config & available reducers
I chose to initialize the array object for the dropdown box in a `config.js`.

The available reducers are as follows:
- `ADD_RANDOM_SHAPE`
- `DELETE_ALL_OF_SHAPE_TYPE`
- `DELETE_ALL_SHAPES`
- `DECREASE_SHAPE_QUANTITY_BY_ONE`
- `INCREASE_SHAPE_QUANTITY_BY_ONE`
- `SHUFFLE_SHAPES`

# Take away
Putting the project together was challenging, I came accross concepts that I'd touched upon but never had to implement on my own before. Implementing the Redux store took a lot longer than expected but once in place, made accessing the global array of shape objects easier than it otherwise would have been by passing down levels of components via props.

Things I hadn't considered weren't reacting the way I expected. One example, if trying to use the state directly mapped via props as a condition for rendering, upon the redux state being updated, a functional component won't re-render without the use of state hooks. I ran into this issue upon updating the shape counter.

I also spent far too long trying to figure out why the redux state wasn't being called in QuantityController and realised it was because I'd used a default export and had tried to import it as a named import.

There are still reducers left to implement & I need some state hooks to help me re-render the page on redux state change.

Overall a rewarding experience
