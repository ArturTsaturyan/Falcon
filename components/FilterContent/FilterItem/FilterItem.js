import React, { useState } from "react";
import AccordionHeader from "./AccordionHeader";
import listData from "./data";

export default function FilterItem() {
  const [state, setState] = useState({
    lists: listData,
    show: false,
  });

  const handleTile = (list) => {
    let getID = !state.lists[list.id].active;
    let update = state.lists.map((item) =>
      item.id == list.id ? { ...item, active: getID } : item
    );
    setState({ lists: update, selectedList: { ...list } });
  };
  const handleChange = (selectedList) => (e) => {
    const { checked, name } = e.target;

    setState((prevState) => ({
      lists: prevState.lists.map((list) =>
        list.id === selectedList.id
          ? {
              ...list,
              innerList: list.innerList.map((fruite) =>
                fruite.title === name
                  ? {
                      ...fruite,
                      completed: checked,
                    }
                  : fruite
              ),
            }
          : list
      ),
    }));
  };

  const { lists } = state;
  return (
    <div className="w-72 h-2/4 overflow-hidden bg-[#F0F3F4] px-6 py-4 border-1 border-[#E9ECEE] hidden md:block">
      <div className="flex justify-between items-center mb-4">
        <h1 className="uppercase text-base font-medium text-[#000000]">
          Filter by
        </h1>
        <p className="text-[#7F8182] font-normal text-base mb-0">Clear all</p>
      </div>
      {lists.map((ar, index) => (
        <div className="heading" key={index}>
          <div className="w-full border-1 border-dashed m-auto"></div>
          <AccordionHeader
            active={ar.active}
            name={ar.name}
            onClick={() => handleTile(ar)}
          />

          {ar.active && (
            <React.Fragment>
              {ar.innerList.map((inner) => (
                <div key={inner.id} className="flex justify-between">
                  <div>
                    <input
                      type="checkbox"
                      onChange={handleChange(ar)}
                      checked={inner.completed}
                      name={inner.title}
                      id={inner.title}
                    />
                    <label className="ml-4 text-[#4C4F50] text-base font-normal">
                      {inner.title}
                    </label>
                  </div>
                  <div>
                    <p className="ml-4 text-[#4C4F50] text-base font-normal">
                      {inner.titleText}
                    </p>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )}
        </div>
      ))}
    </div>
  );
}
