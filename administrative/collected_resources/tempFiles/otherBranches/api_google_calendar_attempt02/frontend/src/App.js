// import React, { useState } from "react";
import React, { useState, useEffect } from "react"; // TODO: delete this useEffect
import axios from "axios"; // TODO: delete this axios
import "./App.css";
import Boards from "./components/Boards";
import ToggleButton from "./components/ToggleButton";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  // const [boards, setBoards] = useState([]);
  // const [cards, setCards] = useState([]);

  // TODO: delete this.
  // TODO: change this callback url. Maybe to http://localhost:2000/
  const CALLBACK_URL = "https://oauth.pstmn.io/v1/callback";
  const AUTH_URL = "https://accounts.google.com/o/oauth2/auth";
  const ACCESS_TOKEN_URL = "https://accounts.google.com/o/oauth2/token";
  const CLIENT_ID = process.env.REACT_APP_GOOGLE_CALENDAR_CLIENT_ID;
  const CLIENT_SECRET = process.env.REACT_APP_GOOGLE_CALENDAR_CLIENT_SECRET;
  const Temporary_Token = process.env.REACT_APP_GOOGLE_CALENDAR_Temporary_Token;
  const CALENDAR_ID = process.env.REACT_APP_CALENDAR_ID;
  const SCOPE =
    "https://www.googleapis.com/auth/calendar.calendarlist.readonly";
  const url = "https://www.googleapis.com/calendar/v3/users/me/calendarList";

  // // TODO: delete this.
  // useEffect(() => {
  //   apiCAll(url);
  // }, []);

  // // TODO: delete this.
  // const apiCAll = (param) => {
  //   console.log("param:", param);
  //   // async () => await axios.get(AllBoards)
  //   axios
  //     .get(param)
  //     .then((products) => {
  //       console.log(products.data);
  //       // setBoards(products.data);
  //       // TODO: fix this setBoardProperties(Object.keys(response.data[0]));
  //       // setBoardProperties(Object.keys(response.data[0]));
  //     })
  //     .catch((error) => console.log(error));
  // };

  return (
    <>
      <div className="App">
        <header className="App-header"></header>
        <h1>Dashboard</h1>
        <div
          style={{
            border: "solid salmon .2em",
            color: "salmon",
          }}
        >
          <h2>Trello API</h2>

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

          {/* Original */}
          {/* <ToggleButton
            label={"Toggle Boards Component"}
            component={<Boards></Boards>}
          ></ToggleButton> */}
        </div>

        <div
          style={{
            border: "solid lightblue .2em",
            color: "lightblue",
          }}
        >
          <h2>calendar</h2>
          <p>the calendar component</p>
          <p>
            Have it be the same component as the Boards - modify Boards for both
            maybe.
          </p>
        </div>
      </div>
    </>
  );
}
