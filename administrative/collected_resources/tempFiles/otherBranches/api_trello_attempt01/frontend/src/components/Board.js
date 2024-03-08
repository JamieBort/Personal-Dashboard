// import React from "react";
// import React, { useEffect } from "react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

// The api call to the list of cards will be done here.

export default function Board(props) {
  const BoardId = props.board.id;
  const Name = props.board.name;
  // console.log(aBoard);
  // console.log(props.board);
  // console.log("the board id is: ", props.board.id);

  const [cards, setCards] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    apiCall();
  }, []);

  const ABoard =
    `https://api.trello.com/1/boards/` +
    BoardId +
    `/cards?key=` +
    process.env.REACT_APP_KEY +
    `&token=` +
    process.env.REACT_APP_TOKEN;

  const apiCall = () => {
    axios
      .get(ABoard)
      .then((response) => {
        // console.log("apiCall response in Board", response);
        // console.log("response.data in the " + Name + " board:", response.data);
        // console.log(
        //   "response.data[0] in the " + Name + " board:",
        //   response.data[0],
        // );
        // console.log(
        //   "response.data[0].id in the " + Name + " board:",
        //   response.data[0].id,
        // );

        // TODO: send to cards only the data that I need.
        setCards(response.data);
        // setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };
  // while (!isLoading) console.log("cards", cards);

  const card = cards.map((card) => {
    // console.log(card);
    return (
      <div key={card.id} style={{ margin: ".2em", border: "solid black .3em" }}>
        <h5>{card.name}</h5>
        <p>ID: {card.id}</p>
        <p>Name of column: {card.labels}</p>
        <p>Description: {card.desc}</p>
        <a href={card.url}>Link to Card</a>
        <p>Is the due date complete? {card.dueComplete ? "Yes" : "No"}</p>
        <p>When is it due? {card.due ? card.due : "There isn't one."}</p>
        <p>Date of last activity: {card.dateLastActivity}</p>
        <button>
          Button for navigating to a page listing the cards in that column.
        </button>
        <button>Button to that card</button>
      </div>
    );
  });

  return (
    <div>
      <h4>These are the Cards from the "{Name}" board.</h4>
      <Card card={card}></Card>
    </div>
  );
}
