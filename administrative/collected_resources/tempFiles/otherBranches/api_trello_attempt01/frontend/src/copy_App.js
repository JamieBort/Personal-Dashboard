import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>hi</h1>
        </header>
      </div>
    </>
  );
}

apiCall = () => {
  axios
    .get(AllBoards)
    .then((response) => {
      console.log(response);
      // console.log(response.data[0].name);
      // console.log(response.data[0].email);
      // // create an array of details only with relevant data
      const newDetails = response.data.map((c) => {
        return {
          id: c.id,
          name: c.name,
          email: c.email,
          phone: c.phone,
        };
      });
      // // create a new "State" object without mutating the original State object.
      const newState = Object.assign({}, this.state, { details: newDetails });
      // // store the new state object in the component's state
      this.setState(newState);
    })
    .catch((error) => console.log(error));
};

export default App;
