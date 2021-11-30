import React from "react";

function Movie(props) {
  return (
    <li>
      {props.name}
      <button onClick={props.onUpdate}>Edit</button>
      <button onClick={props.onDelete}>X</button>
    </li>
  );
}

export default Movie;
