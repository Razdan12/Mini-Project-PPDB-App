import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import{BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./page/Home";
import Login from "./page/Form/Login";
import Register from "./page/Form/Register";
import IndexAdmin from "./component/Admin/IndexAdmin";





function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/admin" element={<IndexAdmin/>}/>
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
