// temp_api_code.js

// Copied from ~/Documents/DevFiles/personal_projects/TrelloApiPractice/main.js
// It is not in a repo. It's only on my computer.

// ------------------------------------------------------------
// ------------------------------------------------------------
// ------------------------------------------------------------

// document.body.onload = addElement;

// function addElement () {
//   // create a new div element
//   var newDiv = document.createElement("div");
//   // and give it some content
//   var newContent = document.createTextNode("Hi there and greetings!");
//   // add the text node to the newly created div
//   newDiv.appendChild(newContent);

//   // add the newly created element and its content into the DOM
//   var currentDiv = document.getElementById("div1");
//   document.body.insertBefore(newDiv, currentDiv);
// }

// TODO: fix the api call so it is async.
// TODO: use dotenv.
// TODO: print the output to the website/page.

const fetch = require("node-fetch");
require("dotenv").config();
// console.log(process.env); // The contents of the .env file.
// console.log(process.env.api_key); // The contents of the .env file.
// console.log(process.env.api_token); // The contents of the .env file.

// var api_key = 'b2b04ca8f818a58b607c8e226d68003e';
// var api_token = 'e3e3dccf8143f51db990f253506a49a226ff6ef7dfd8439c9c96d9818016451a';
var myString = "https://api.trello.com/1/members/me/boards?key=" + api_key + "&token=" + api_token;

var api_key = process.env.api_key;
var api_token = process.env.api_token;

async function getAll() {
  let response = await fetch("https://api.trello.com/1/members/me/boards?key=" + api_key + "&token=" + api_token);
  let data = await response.json();
  return data;
}
getAll().then((data) => console.log(data[1]));

var port = 4000;
const http = require("http");
var server = http.createServer(function (request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  // response.end("Hello World!\n", getAll().then(data => console.log(data[0].name)));
  response.end(
    "Hello World!\n",
    getAll().then((data) => console.log(data)),
  );
});

console.log("Listening in on: http://localhost:", port);
server.listen(port);

// create a new div element
// var newDiv = document.createElement("div");
// var Div2 = document.createElement("div");
// and give it some content
// var newContent = document.createTextNode("Hi there and greetings!");
// Div2.innerHTML = "Test";
// add the text node to the newly created div
// newDiv.appendChild(newContent);
// newDiv.appendChild(Div2);

// add the newly created element and its content into the DOM
// var currentDiv = document.getElementById("div1");
// document.body.insertBefore(newDiv, currentDiv);

// var bodY = document.getElementsByName(body);
// // document.body.appendChild(Div2);

// async function getAll(){
//     let response = await fetch('https://api.trello.com/1/members/me/boards?key=b2b04ca8f818a58b607c8e226d68003e&token=e3e3dccf8143f51db990f253506a49a226ff6ef7dfd8439c9c96d9818016451a');
//     let data = await response.json();
//     return data;
// }
// getAll().then(data => Div2.innerHTML = data[0].name);
// getAll().then(data => console.log(data));

// Div2.innerHTML = "Test";
