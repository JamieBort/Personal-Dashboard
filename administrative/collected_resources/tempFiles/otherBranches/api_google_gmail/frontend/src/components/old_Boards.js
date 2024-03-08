import React, { useState, useEffect } from "react";
import Board from "./Board";
import ToggleButton from "./ToggleButton";
import InformationOptions from "./InformationOptions";
import { TrelloAPI } from "../apis/TrelloAPI";

export default function Boards() {
  const [boards, setBoards] = useState([]);
  const [boardProperties, setBoardProperties] = useState([]);

  const [displayedProperties, setDisplayedProperties] = useState({
    url: true,
    shortUrl: true,
    closed: true,
    subscribed: false,
  });

  // TODO: look into replacing useEffect() with componentDidMount().
  useEffect(() => {
    TrelloAPI.getAllBoards()
      .then((boards) => {
        // console.log(boards.data);
        setBoards(boards.data);
        // TODO: fix this setBoardProperties(Object.keys(response.data[0]));
        // setBoardProperties(Object.keys(response.data[0]));
      })
      .catch((error) => console.log(error));
    //   props.setIsLoading(false);
  }, []);

  const board = boards.map((board) => {
    // console.log(board);
    return (
      <div
        key={board.id}
        style={{ border: "dashed .1em salmon", margin: "0.2em" }}
      >
        <h3>{board.name}</h3>
        <p>The Description: {board.desc}</p>
        <p>Title of first column. Number of Cards in that column.</p>
        <p>Title of second column. Number of Cards in that column.</p>
        <p>Title of third column. Number of Cards in that column.</p>
        <p>Board Owner (?)</p>
        <p>Who has editing privileges (?)</p>

        {displayedProperties.url && (
          <a href={board.url} target="_blank" rel="noopener noreferrer">
            Link to Board
          </a>
        )}

        {displayedProperties.closed && (
          <p>Is the board closed? {board.closed ? "Yes" : "No"}</p>
        )}

        {displayedProperties.shortUrl && (
          <a href={board.shortUrl} target="_blank" rel="noopener noreferrer">
            Other Link to Board
          </a>
        )}

        {displayedProperties.closed && (
          <p>
            Who created this board?{" "}
            {board.idMemberCreator ? "I did." : "Someone else."}
          </p>
        )}

        {displayedProperties.subscribed && (
          <p>Subscribed? {board.subscribed ? "Yes" : "No"}</p>
        )}

        <div style={{ border: "solid .1em salmon", margin: "0.2em" }}>
          <p>section for the cards.</p>
          <p>The board id is {board.id}</p>
          <p>For each column produce:</p>
          <ul>
            <li>a button for navigating to that column.</li>
            <li>a toggle button for displaying that column below.</li>
          </ul>

          <button>
            Button for navigating to a page listing the cards in that board
          </button>

          <ToggleButton
            label={"Component for toggling list of cards in that board"}
            component={<Board board={board}></Board>}
          ></ToggleButton>
        </div>
      </div>
    );
  });

  return (
    <>
      <div style={{ border: "solid .1em salmon", margin: "0.2em" }}>
        <h2 style={{ color: "salmon" }}>Boards</h2>
        {/* TODO: work on passing the information up from the children so that the selected properties from boardProperties is displayed while the properties from boardProperties that are not selected are not displayed. To this end, I think I just need to filter the array in the ~~InformationOptions~~ CheckBoxes component. */}
        <ToggleButton
          label={"Component for toggling list of properties to display"}
          component={
            <InformationOptions
              boardProperties={boardProperties}
              title="Boards"
              handleClick={(param) => {
                // console.log(param);

                setDisplayedProperties({
                  ...displayedProperties,
                  //   subscribed: !displayedProperties.subscribed,
                  [param]: !displayedProperties[param],
                  //   [param]: false,
                });

                // console.log("displayedProperties:", displayedProperties);
              }}
            ></InformationOptions>
          }
        ></ToggleButton>

        {board}
      </div>
    </>
  );
}
