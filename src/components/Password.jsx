import React, { useState } from "react";

const Password = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="pass_inp_container position-relative">
      <input
        type={`${(isShow && "text") || "password"}`}
        name="Email  ( Same as provided for FD )"
        id="Email  ( Same as provided for FD )"
        className="inp_control"
        value="test@gmail.com"
      />

      <img
        onClick={() => setIsShow(!isShow)}
        className="eye pointer"
        src="assets/eye.svg"
        alt=""
      />
    </div>
  );
};

export default Password;
