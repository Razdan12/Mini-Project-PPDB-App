import React, { useState } from "react";
import { BsPencilSquare, BsFillEyeSlashFill } from "react-icons/bs";

export default function Visibility({ children }) {

  // React state to manage visibility
  const [show, setShow] = useState();

  // function to toggle the boolean value
  function toggleShow() {
    setShow(!show);
  }
  var buttonText = show ? <BsFillEyeSlashFill /> : <BsPencilSquare />;

  return (
    <div className="component-container">
      {show && children}
      <button onClick={toggleShow} type="button" class="btn btn-warning ml-2">{buttonText}</button>
    </div>
  );
}