import React from 'react'
import Detail from "../component/Detail/Detail";
import Faq from "../component/FAQ/Faq";
import Feature from "../component/Feature/Feature";
import Footer from "../component/Footer/Footer";
import Header from '../component/Header/Header'
import Contact from "../component/Contact/Contact"
import Hero from "../component/Hero/Hero";
import "./Home.css"
const Home = () => {
  return (
    <div>
        <Header/>
      <Hero />
      <Feature />
      <Detail />
      <Faq />
      <Contact/>
      <Footer />
    </div>
  )
}

export default Home