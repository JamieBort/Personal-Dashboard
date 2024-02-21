import React from "react";
import SearchQuick from "./SearchQuick";
import ToggleButton from "./ToggleButton";
// import Boards from "./trello/Boards";

export default function General(props) {
  // console.log(Date());
  //   if (props.list) return (listItem = props.list.map((item) => <li>{item}</li>));
  //  key={() => Date()}
  const listItem = props.list.map((item, index) => <li key={index}>{item}</li>);

  return (
    <div
      style={{
        border: "solid " + props.color + " .2em",
        color: props.color,
      }}
    >
      <h1>{props.title}</h1>

      {/* <SearchQuick title="For quick searches."></SearchQuick> */}
      <SearchQuick></SearchQuick>

      {props.list ? (
        <div>
          <p>List of info I want displayed here.</p>
          <ul>{listItem}</ul>
        </div>
      ) : (
        <p>No list.</p>
      )}

      {props.label ? (
        <ToggleButton
          // NOTE: This isLoading is not being used.
          // isLoading={isLoading}
          label={props.label}
          //   component={<Boards></Boards>}
          component={props.component}
        ></ToggleButton>
      ) : null}

      <button>Button to Navigate to {props.title} page</button>
    </div>
  );
}
