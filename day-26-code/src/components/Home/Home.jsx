import React from "react";
import { useNavigate } from "react-router";
import Movie from "../Movie/Movie"
function Home() {
  const [data, setData] = React.useState([]);
  const navigate = useNavigate()
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
  function handleDelete(id) {
    fetch("http://localhost:4000/tvShows/" + id, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        fetchMovies()
        console.log("Deletado");
      }
    });
  }
  React.useEffect(function () {
    fetchMovies();
    return () =>{
      setData("")
    }
  }, []);
  return (
    <ul>
      {data.map(function (item) {
        return (
          <Movie
            name={item.name}
            id={item.id}
            onDelete={function () {
              return handleDelete(item.id);
            }}
            onUpdate={function () {
              navigate("edit/"+item.id)
            }}
          />
        );
      })}
    </ul>
  );
}

export default Home;
