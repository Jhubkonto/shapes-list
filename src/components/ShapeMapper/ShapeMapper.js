import React, { useState } from "react";
import { Circle } from "../Shapes/CircleShape/Circle";
import { Square } from "../Shapes/SquareShape/Square";
import { Triangle } from "../Shapes/TriangleShape/Triangle";

export const ShapeMapper = ({ children }) => {
  const [shapes, setShapes] = useState([]);

  const renderShape = () => {
    switch (children.title) {
      case "Square": {
        return <Square />;
      }
      case "Triangle": {
        return <Triangle />;
      }
      case "Circle": {
        return <Circle />;
      }
      default: {
        return;
      }
    }
  };
  return (
    // TODO: Implement for loop
    <div>
      {renderShape()}
      {children.count}
    </div>
  );
};
