import React from "react";
import "../assets/css/dark.css";
import "../assets/css/style.css"

import About from "../component/About";
import Resume from "../component/Resume";
import Portfolio from "../component/Portfolio";
import Service from "../component/Service";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Hero from "../component/Hero";



const Home = () => {
    return (
        <div>
            <body>
                

                <div className="know_tm_all_wrap" data-magic-cursor="show">
                    <Header />
                    <Hero />
                    <div className="container">
                        <div className="know_tm_mainpart">
                            <About />
                            <Resume />
                            <Portfolio />
                            <Service />
                            <Contact />
                        </div>
                    </div>
                    <Footer />

                </div>
                <div className="mouse-cursor cursor-outer"></div>
                <div className="mouse-cursor cursor-inner"></div>

            </body>
        </div>
    );
};

export default Home;
