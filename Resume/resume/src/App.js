import Home from "./page/Home";
import Login from "./component/Form/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Login />} />
          
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
