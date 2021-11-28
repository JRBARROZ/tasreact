import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import AddForm from "./components/AddForm/AddForm";
import UpdateForm from "./components/UpdateForm/Update"
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="add" element={<AddForm />} />
          <Route path="edit/:id" element={<UpdateForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
