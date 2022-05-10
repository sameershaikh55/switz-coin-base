import React, { useState } from "react";

const Checkbox = () => {
  const [active, setActive] = useState(false);

  return (
    <div
      onClick={() => setActive(!active)}
      className="position-relative pointer"
    >
      {(!active && <img src="assets/uncheck.svg" alt="" />) || (
        <img src="assets/check.svg" alt="" />
      )}
    </div>
  );
};

export default Checkbox;
