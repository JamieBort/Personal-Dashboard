// Use this component to toggle checkbox on and off/display not display....
// import React from "react";
import React, { useState } from "react";

export default function CheckBox(props) {
  //   console.log(props);
  //   console.log(props.property); // lists each property
  const [isChecked, setIsChecked] = useState(false);
  //   console.log(isChecked);

  //   const displayedProperties = [props.property];
  //   console.log("displayedProperties:", displayedProperties);

  //   handlefunction
  // If toggle is checked, change style to strikethrough.
  const handleChange = (event) => {
    // console.log("event.currentTarget:", event.currentTarget);
    // console.log("event.currentTarget.name:", event.currentTarget.name);
    // console.log("event:", event);
    // console.log("event:", event);

    // props.handleEvent(event.currentTarget.checked); // sends back true or false.
    // props.handleEvent("Send back the ones that are displayed."); // sends back the ones that are displayed
    // console.log(event);
    setIsChecked(event.currentTarget.checked);
    // props.handleEvent(event.currentTarget.name); // sends back the ones that are displayed   // Not needed right now.
    // props.handleEvent({
    //   status: isChecked,
    //   myProperty: "limits",
    // });

    props.updateProperty(event.currentTarget.name);
  };

  return (
    <div style={{ display: "inline" }}>
      <label
        style={{
          textDecoration: isChecked === false ? "line-through" : "none",
          color: isChecked === false ? "red" : "green",
        }}
      >
        {props.property}
      </label>
      <input
        name={props.property}
        type="checkbox"
        // onChange={(event) => setIsChecked(event.currentTarget.checked)}
        // onChange={props.handleEvent}
        onChange={handleChange} // maybe change this back
        // onChange={props.updateProperty}
        // style={{ display: isChecked === false ? "none" : "inline" }}
        checked={isChecked}
      ></input>
    </div>
  );
}
