import React, { useState } from "react";
// import React, { useState, useEffect } from "react"; // TODO: delete this useEffect
import General from "./components/General";
import "./App.css";
import Boards from "./components/trello/Boards";
import ToggleButton from "./components/ToggleButton";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  // const [boards, setBoards] = useState([]);
  // const [cards, setCards] = useState([]);

  // TODO: load the first three trello cards into General Trello component.
  const listTrello = [
    "The Card I use most.",
    "The other card I use next most frequently.",
    "The card I use third most frequently.",
  ];

  // TODO: load the next three calendar events into General Calendar component.
  const listCalendar = [
    "My next event.",
    "The following event.",
    "The last event.",
  ];

  // TODO: load the next three emails into General Email component.
  const listEmail = [
    "Date: YYYY MM DD. Time: HH:MM",
    "Subject: The subject message.",
    "The sender.",
  ];

  return (
    <>
      <div className="App">
        <header className="App-header"></header>
        <h1>Dashboard</h1>

        <General
          title="Trello"
          label={"Toggle Boards Component"}
          component={<Boards></Boards>}
          list={listTrello}
          color="blue"
        ></General>

        <General title="Calendar" list={listCalendar} color="green"></General>

        <General title="Gmail" list={listEmail} color="red"></General>

        {/* <div
          style={{
            border: "solid salmon .2em",
            color: "salmon",
          }}
        >
          <h2>Trello API</h2>

          <p>Search field for searching for Trello cards. _____</p>

          {isLoading ? (
            <p>Please wait while it loads.</p>
          ) : (
            <p>Done loading.</p>
          )}

          <ToggleButton
            // NOTE: This isLoading is not being used.
            isLoading={isLoading}
            label={"Toggle Boards Component"}
            component={<Boards setIsLoading={setIsLoading}></Boards>}
          ></ToggleButton>
        </div>

        <div
          style={{
            border: "solid lightblue .2em",
            color: "lightblue",
          }}
        >
          <h2>calendar</h2>
          <p>The calendar component</p>
          <p>
            Have it be the same component as the Boards - modify Boards for both
            maybe.
          </p>
        </div>

        <div
          style={{
            border: "solid orange .2em",
            color: "orange",
          }}
        >
          <h2>Email</h2>
          <p>The email component</p>
          <p>
            Have it be the same component as the Boards - modify Boards for all
            three maybe.
          </p>
          <ul>
            <div
              style={{
                border: "solid orange .2em",
              }}
            >
              <li>Date: YYYY MM DD. Time: HH:MM</li>
              <li>Subject: The subject message.</li>
              <li>The sender.</li>
            </div>
            <div>
              <li>Date: YYYY MM DD. Time: HH:MM</li>
              <li>Subject: The subject message.</li>
              <li>The sender.</li>
            </div>
            <div>
              <li>Date: YYYY MM DD. Time: HH:MM</li>
              <li>Subject: The subject message.</li>
              <li>The sender.</li>
            </div>
            <div>
              <li>Date: YYYY MM DD. Time: HH:MM</li>
              <li>Subject: The subject message.</li>
              <li>The sender.</li>
            </div>
          </ul>
        </div> */}
      </div>
    </>
  );
}
