// src/apis/productAPI.js

// import { api } from "./configs/axiosConfigs"
import axios from "axios";

// NOTE: variables:
const AllBoards =
  `https://api.trello.com/1/members/me/boards?key=` +
  process.env.REACT_APP_TRELLO_KEY +
  `&token=` +
  process.env.REACT_APP_TRELLO_TOKEN;

// NOTE: not used yet.
// const aCard = "59eb3c354ef89f2258c24900";
// const ACard =
//   `https://api.trello.com/1/boards/` +
//   aCard +
//   `/cards/5afdd834d41d8f34ce942f5b?key=` +
//   process.env.REACT_APP_KEY +
//   `&token=` +
//   process.env.REACT_APP_TOKEN;
// console.log("ACard: ", ACard);

export const TrelloAPI = {
  getAllBoards: async () => await axios.get(AllBoards),

  // TODO: create method (or function) for an api call return to all of the cards in a specific specific board.
  getAllCardsInABoard: async () =>
    console.log("Returning all cards in a board."),

  // TODO: create method (or function) for an api call return to all of the columns in a specific column of the board.
  getAllColumnsInABoard: async () =>
    console.log("Returning all columns in a board."),

  // TODO: create method (or function) for an api call return a specific card of a specific board.
  getABoard: async () => console.log("Returning a specific board."),

  // TODO: create method (or function) for an api call return all completed cards.
  getAllCompletedCardsInABoard: async () =>
    console.log("Returning all completed cards in a board."),

  // TODO: create method (or function) for an api call return all cards that are not completed by their due date of a specific board.
  getAllCardsNotCompletedInABoard: async () =>
    console.log(
      "Returning all cards that are not completed by their due date of a specific board.",
    ),
};
