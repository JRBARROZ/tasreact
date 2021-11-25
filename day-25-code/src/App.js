import logo from "./logo.svg";
import "./App.css";
import React from "react";
function App() {
  const [joke, setJoke] = React.useState("");
  const [name, setName] = React.useState("");
  function handleSubmit(e){
    e.preventDefault()
    fetch("http://localhost:4000/tvShows",{
      method:"POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({name:name})
    })
  }
  // const movies = [
  //   {
  //     name: "Star Wars",
  //   },
  //   {
  //     name: "John Wick",
  //   },
  //   {
  //     name: "Harry Potter",
  //   },
  // ];
  //JSON.stringify()
  // console.log(movies)
  // const objectMovie = JSON.stringify(movies)
  // console.log(objectMovie)
  // const newMovies = JSON.parse(objectMovie)
  // console.log(newMovies)
  React.useEffect(function(){
    fetch("http://localhost:4000/tvShows").then(function(response){
      return response.json()
    }).then(function(json){
     setJoke(json.value)
    })
  }, [])
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={function(event){
          setName(event.target.value)
        }}/>
        {/* {name} */}
        <button>Enviar</button>
      </form>
      {/* <h1>{joke}</h1> */}
    </div>
  );
}

export default App;
