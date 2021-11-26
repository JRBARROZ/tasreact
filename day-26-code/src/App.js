import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Movie from "./components/Movie";
function App() {
  const [data, setData] = React.useState([]);
  const [name, setName] = React.useState("");
  const [nameToUpdate, setNameToUpdate] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [itemId, setItemId] = React.useState(0);
  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true)
    fetch("http://localhost:4000/tvShows", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name }),
    }).then((response) => {
      if(response.ok){
        fetchMovies()
        setLoading(false)
      }
    });
  }
  function handleUpdate(e){
    e.preventDefault();
    setLoading(true)
    fetch("http://localhost:4000/tvShows/"+itemId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: nameToUpdate }),
    }).then((response) => {
      if(response.ok){
        fetchMovies()
        setLoading(false)
      }
    });
  }
  function handleDelete(id){
    fetch("http://localhost:4000/tvShows/"+id, {
      method:"DELETE"
    }).then((response) => {
      if(response.ok){
        fetchMovies()
      }
    })
  }
  function fetchMovies() {
    fetch("http://localhost:4000/tvShows")
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        setData(json);
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  function onUpdate(name, id){
    setNameToUpdate(name)
    setItemId(id)
  }
  React.useEffect(function () {
    fetchMovies();
  }, []);
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={function (event) {
            setName(event.target.value);
          }}
        />
        {/* {name} */}
        {loading ? <button disabled>Carregando ....</button> : <button>Enviar</button>}
      </form>
      <form onSubmit={handleUpdate}>
        <label>Update</label>
        <input
          type="text"
          value={nameToUpdate}
          onChange={function (event) {
            setNameToUpdate(event.target.value);
          }}
        />
        {/* {name} */}
        {loading ? <button disabled>Carregando ....</button> : <button>Enviar</button>}
      </form>
      <ul>
        {data.map(function(item){
          return <Movie name={item.name} id={item.id} onDelete={function(){
            return handleDelete(item.id)
          }} onUpdate={function(){
            return onUpdate(item.name, item.id)
          }}/>
        })}
      </ul>
    </div>
  );
}

export default App;
