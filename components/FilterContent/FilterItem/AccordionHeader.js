import React from "react";
import ToggleIcon from "./ToggleIcon";

function AccordionHeader({ active, onClick, name }) {
  return (
    <div className={active ? "tile is-active" : "tile"} onClick={onClick}>
      <div className="flex justify-between mb-8 cursor-pointer mt-6">
        <div className="left">
          <span className="text-base font-medium">{name}</span>
        </div>
        <div className="right">
          <ToggleIcon state={active ? true : false} />
        </div>
      </div>
    </div>
  );
}
export default AccordionHeader;
