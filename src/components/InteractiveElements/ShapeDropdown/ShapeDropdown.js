import React, { useState } from "react";
import { DownArrow } from "../../DownArrrow/DownArrow";
import QuantityController from "../../QuantityController/QuantityController";
import "./ShapeDropdown.scss";
import { ShapeMapper } from "../../ShapeMapper/ShapeMapper";
import { initShapes } from "../../config";

const ShapeDropdown = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

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
          {initShapes.shapes.map((shape) => {
            return (
              <li className="dropdown--list__item">
                <QuantityController shapeType={shape.title}>
                  <ShapeMapper>{shape}</ShapeMapper>
                </QuantityController>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ShapeDropdown;
