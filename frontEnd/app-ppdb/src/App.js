import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import{BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./page/Home";
import Form from "./page/Form/Form";




function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Form/>}/>
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
