import React from "react";

function AddForm() {
  const [name, setName] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    fetch("http://localhost:4000/tvShows", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name }),
    }).then((response) => {
      if (response.ok) {
        setLoading(false);
      }
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={function (event) {
          setName(event.target.value);
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

export default AddForm;
