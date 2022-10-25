import React from "react";
import "./App.css"
import Detail from "./component/Detail/Detail";
import Faq from "./component/FAQ/Faq";
import Feature from "./component/Feature/Feature";
import Footer from "./component/Footer/Footer";
import Header from './component/Header/Header'
import Hero from "./component/Hero/Hero";



function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Feature/>
      <Detail/>
      <Faq/>
      <Footer/>
     

    </div>
  );
}

export default App;
