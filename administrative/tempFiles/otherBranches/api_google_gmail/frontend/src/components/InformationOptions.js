// Use this component to toggle on which information gets displayed.
// For example, in the Boards Component we can see Owners, ID, Etc.
// import React from "react";
import React from "react";
import CheckBoxes from "./CheckBoxes";

export default function InformationOptions(props) {
  //   console.log(props.boardProperties); // an array of the properties
  //   console.log(props.handleClick);

  return (
    <div style={{ backgroundColor: "lightblue" }}>
      <h4>Information Options for the {props.title}</h4>
      <p>Select the options you want to see in each card.</p>
      <div>
        <p>check box for this column info too:</p>
        <p>Title of first column. Number of Cards in that column.</p>
      </div>
      <CheckBoxes
        updateProperty={props.handleClick}
        options={props.boardProperties}
      ></CheckBoxes>
    </div>
  );
}
