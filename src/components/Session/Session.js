import React from "react";
import "./Session.scss";
import { PlusIcon } from "../InteractiveElements/PlusIcon/PlusIcon";
import { Button } from "../InteractiveElements/Button/Button";
import Dropdown from "../InteractiveElements/Dropdown/Dropdown";
import { connect } from "react-redux";
import { ShapeMapper } from "../ShapeMapper/ShapeMapper";

const Session = ({ shapes }) => {
  const shapeList = shapes.length;
  console.log(shapes + "In Session.js");
  // const [shapeList, setShapeList] = useState(initShapes.shapes);

  // const addShape = (shape) => {
  //   const existingShape = shapeList.find((x) => x.title === shape.title);
  //   if (existingShape) {
  //     const incrementedShapeList = shapeList.forEach((x) => {
  //       if (x.title === shape.title) {
  //         x.count += 1;
  //       }
  //     });
  //     setShapeList(incrementedShapeList);
  //   } else {
  //     setShapeList(setShapeList.push({ ...shape, count: 1 }));
  //   }
  // };

  return (
    <React.Fragment>
      <div className="session--grid">
        <div className="session--grid__cell">
          <div className="session--flexbox">
            <div className="session--flexbox__item">
              <PlusIcon newSize="256" />
            </div>
          </div>
        </div>
        <div className="session--grid__cell">
          <div className="session--flexbox">
            <div className="session--flexbox__item">
              <Button>Shuffle shapes</Button>
            </div>
            <div className="session--flexbox__item">
              <Button>Delete all shapes</Button>
            </div>
          </div>
        </div>
        <div className="session--grid__cell">
          <div className="session--flexbox">
            <Dropdown quantitative />
          </div>
        </div>
      </div>
      {shapeList && (
        <div className="session--shape-display">
          <div className="session--shape-display__item">
            {shapes.map((shape) => (
              <ShapeMapper>{shape}</ShapeMapper>
            ))}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    shapes: state.shapes,
  };
};

export default connect(mapStateToProps)(Session);
