import React from 'react';
import './App.css';
function App() {
  const [count, setCount] = React.useState(0)
  const [message, setMessage] = React.useState("")
  function handleClickSum(){
    setCount(count + 1)
  }
  function handleClickSub(){
    setCount(count - 1)
  }
  function handleDoubleClick(){
    setCount(count * 2)
  }
  React.useEffect(() => {
    setMessage("Mensagem")
  }, [count])
  return (
    <div className="App">
      <h1>{count}</h1>
      <p>{message}</p>
      <br />
      <button onClick={handleClickSub}>{"<"}</button>
      <button onClick={handleClickSum} onDoubleClick={handleDoubleClick}>{">"}</button>
    </div>
  );
}

export default App;
