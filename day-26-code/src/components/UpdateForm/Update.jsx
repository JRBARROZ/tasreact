import React from "react";
import { useNavigate, useParams } from "react-router";

function Update() {
  const [loading, setLoading] = React.useState(false);
  const [nameToUpdate, setNameToUpdate] = React.useState("");
  const {id} = useParams();
  const navigate = useNavigate()
  React.useEffect(() => {

  }, [])
  function handleUpdate(e) {
    e.preventDefault();
    setLoading(true);
    fetch("http://localhost:4000/tvShows/"+id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: nameToUpdate }),
    }).then((response) => {
      if (response.ok) {
        navigate("/")
        setLoading(false);
      }
    });
  }
  return (
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
      {loading ? (
        <button disabled>Carregando ....</button>
      ) : (
        <button>Enviar</button>
      )}
    </form>
  );
}

export default Update;
