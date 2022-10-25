import React from 'react'
import hero from "../../assets/img/hero-img.png"
import "./style.css"

const Hero = () => {
    return (
        <div>
            <section id="hero" className="d-flex align-items-center">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-lg-flex flex-lg-column justify-content-center align-items-stretch pt-5 pt-lg-0 order-2 order-lg-1" data-aos="fade-up">
                            <div>
                                <h1>My-PPDB Aplikasi</h1>
                                <h2>Aplikasi PPDB Online SMP Negeri 1 Purbalingga</h2>
                                <a href="#" className="download-btn"><i className="bi bi-box-arrow-in-right"></i> Login</a>
                                <a href="#" className="download-btn"><i className="bi bi-person-bounding-box"></i> Daftar</a>
                            </div>
                        </div>
                        <div className="col-lg-6 d-lg-flex flex-lg-column align-items-stretch order-1 order-lg-2 hero-img" data-aos="fade-up">
                            <img src={hero} className="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Hero