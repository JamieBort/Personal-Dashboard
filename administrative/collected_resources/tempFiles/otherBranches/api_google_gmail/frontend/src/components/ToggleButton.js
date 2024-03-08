import React, { useState } from "react";

const ToggleButton = (props) => {
  //Using Inline Function and the The Logical Not (!) to toggle state
  const [toggle, setToggle] = useState(false);
  // console.log("ToggleButton props:", props);
  // console.log("ToggleButton props.isLoading:", props.isLoading);

  return (
    <>
      <button
        onClick={() => setToggle(!toggle)}
        className="btn btn-primary mb-5"
      >
        {props.label}
      </button>
      {toggle && <div>{props.component}</div>}
    </>
  );
};
export default ToggleButton;
