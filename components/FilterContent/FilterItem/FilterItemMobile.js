import React, { useState } from "react";
import ButtonContact from "../../ButtonContact/ButtonContact";
import AccordionHeader from "./AccordionHeader";
import listData from "./data";

export default function FilterItemMobile({onClick}) {
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
    <div className="w-full h-2/4 overflow-hidden sm:px-10 sm:py-8 px-4 py-2 md:hidden block shadow-[0px_5px_15px_rgba(0,0,0,0.1)] mb-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="uppercase text-base font-medium text-[#000000]">
          Filter by
        </h1>
        <div className="flex">
          <p className="text-[#7F8182] font-normal text-base mb-0">Clear all</p>
          <div className="cursor-pointer" onClick={onClick}><img src="close.svg" className="ml-6"/></div>
        </div>
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
        <div className="pt-4 pb-3 m-auto sm:w-40 w-full flex justify-center">
          <button className="bg-gradient-to-r to-[#7F8182] from-[#000000] text-[#FFFFFF] sm:text-base text-sm p-2 rounded flex-auto">
            Применить
          </button>
      </div>
    </div>
  );
}
