import React, { useState } from "react";
import { DownArrow } from "../../DownArrrow/DownArrow";
import QuantityController from "../../QuantityController/QuantityController";
import "./Dropdown.scss";
import { ShapeMapper } from "../../ShapeMapper/ShapeMapper";
import { initShapes } from "../../config";

const Dropdown = ({ quantitative, children }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  // TODO: Remove quantitive condtional rendering
  return (
    <div className="dropdown--wrapper">
      <div
        className="dropdown--header"
        role="button"
        onClick={() => toggle(!open)}
      >
        <h1>Available shapes</h1>
        <DownArrow />
      </div>
      {open && (
        <ul className="dropdown--list">
          {quantitative ? (
            initShapes.shapes.map((shape) => {
              // One component here that takes a shape and has a plus and minus
              return (
                <li className="dropdown--list__item">
                  <QuantityController shapeType={shape.title}>
                    <ShapeMapper>{shape}</ShapeMapper>
                  </QuantityController>
                </li>
              );
            })
          ) : (
            <li className="dropdown--list__item">{children}</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
