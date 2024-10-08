import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState({ completed: false, id: 1111, title: "beans", userId: 2222 });

  function myFetch() {
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setResults(json);
      });
    setCount((count % 7) + 1);
    setLoading(false);
  }

  function myFetchBackEnd() {
    fetch(`https://personal-dashboard-backend-ypoh.onrender.com/again`)
      .then((response) => response.json())
      .then((json) => console.log(json))
      .then(function (json) {
        return json;
      })
      .catch((error) => console.log(error));

    // setCount((count % 7) + 1);
    setLoading(false);
  }

  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     .then(response => response.json())
  //     .then(json => {console.log(json);return json})
  //     .then(json =>setResults(json))

  // },[loading])

  // const tempResults = {tempCompleted: false,tempId: 4444,tempTitle: "what? again?",tempUserId:666666}

  // const {tempCompleted,tempId,tempTitle,tempUserId}=tempResults;

  const { completed, id, title, userId } = results;

  return (
    <>
      <h1>API calls</h1>
      <div className="card">
        <button onClick={() => myFetchBackEnd()}>Fetch Back End</button>
        <button onClick={() => myFetch()}>Fetch</button>
        {loading ? (
          <p>Loading....</p>
        ) : (
          <div>
            <h2>Fetch</h2>
            <ul>
              <li>completed: {completed}</li>
              <li>id: {id}</li>
              <li>title: {title}</li>
              <li>userId: {userId}</li>
            </ul>
          </div>
        )}

        {/* {loading ?<p>Loading....</p>: <div><h2>Manual</h2><ul><li>tempCompleted: {tempCompleted}</li><li>tempId: {tempId}</li><li>tempTitle: {tempTitle}</li><li>tempUserId: {tempUserId}</li></ul></div>}
        <button onClick={() => {
          if(loading)setLoading(false)
          else setLoading(true)
        }}>
          Toggle
        </button> */}
      </div>
    </>
  );
}

export default App;
