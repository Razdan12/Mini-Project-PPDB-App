import React from "react";
// import { useQuery } from '@apollo/client'
import "../assets/css/style.css"

import About from "../component/About";
import Resume from "../component/Resume";
import Portfolio from "../component/Portfolio";
import Service from "../component/Service";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Hero from "../component/Hero";

// import {GET_USER } from "../GraphQl/Queries"
// import Loading from "../component/Loading";


const Home = () => {
    // const {loading} = useQuery(GET_USER)

    // if (loading) {
    //     return(<Loading/>)
        
    // }
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
