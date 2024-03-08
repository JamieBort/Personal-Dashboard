// never completed
// not yet used

import React, { useState } from "react";

const ToggleFunctionButton = (props) => {
  //   //Using Inline Function and the The Logical Not (!) to toggle state
  //   const [toggle, setToggle] = useState(false);
  //   //   console.log("ToggleButton props:", props);

  return (
    <>
      <button
        onClick={() => props.handleClick()}
        // className="btn btn-primary mb-5"
      >
        {props.label}
      </button>
      {/* {toggle && <div>{props.component}</div>} */}
    </>
  );
};
export default ToggleFunctionButton;
