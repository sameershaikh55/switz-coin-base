import React, { useState, useRef } from "react";

const Select = ({ activeOption, options }) => {
  const options_container = useRef(null);
  const [active, setActive] = useState(activeOption);

  const displayBlock = () => {
    options_container.current.style.display = "block";
  };

  const displayNone = () => {
    options_container.current.style.display = "none";
  };

  return (
    <div
      onMouseOver={displayBlock}
      onMouseLeave={displayNone}
      className="w-100 module-border-wrap select"
    >
      <div className="module text-center w-100">
        <div className="d-flex align-items-center justify-content-between w-100 h-100 color4 f14 ps-3 pe-2">
          <div className="text-dark fw500 f20">{active}</div>
          <div>
            <img src="assets/arrow.svg" alt="" />
          </div>
        </div>
      </div>

      {activeOption !== "Price" && (
        <ul ref={options_container} className="options_container list-unstyled">
          {options.map((item, i) => {
            return (
              <li
                className="text-center py-1"
                onClick={() => {
                  setActive(item);
                  options_container.current.style.display = "none";
                }}
                key={i}
              >
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Select;
