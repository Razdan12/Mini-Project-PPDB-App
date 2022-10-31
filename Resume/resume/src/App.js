import React from "react";
import Home from "./page/Home";
import Login from "./component/Form/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomeAdmin from "./admin/HomeAdmin";
import AboutAdmin from "./admin/page/AboutAdmin";
import ProfileAdmin from "./admin/page/ProfileAdmin";
import PortfolioAdmin from "./admin/page/PortfolioAdmin";
import ServiceAdmin from "./admin/page/ServiceAdmin";



function App() {

  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<HomeAdmin />} />
          <Route path="/about" element={<AboutAdmin />} />
          <Route path="/profile" element={<ProfileAdmin />} />
          <Route path="/portfolio" element={<PortfolioAdmin />} />
          <Route path="/service" element={<ServiceAdmin />} />
          
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
