import React from 'react'

import { useQuery } from '@apollo/client'
import { GET_USER } from '../GraphQl/Queries'

import tumb from "../assets/img/thumbs/47-60.jpg"
import hero from "../assets/img/Foto-KTP-Kartun-removebg-preview.png"

import archive from "../assets/img/svg/archive.svg"
import resume from "../assets/img/svg/contacs.svg"
import portfolio from "../assets/img/svg/briefcase.svg"
import service from "../assets/img/svg/gear.svg"
import contact from "../assets/img/svg/letter.svg"

import Animasi from './Animasi'


const Hero = () => {

    const { data } = useQuery(GET_USER)

    return (
        <div>

            <div className="know_tm_hero">
                <div className="background_shape"></div>
                <div className="hero_content">
                    <div className="container">
                        <div className="content_inner">
                            <div className="main_info">
                                {data?.users.map((user) => (
                                    <div className="left">
                                        <span className="subtitle">I'm</span>
                                        <h3 className="name">{user.name}</h3>
                                        <p className="text">{user.email}</p>

                                    </div>
                                ))}
                                <div className="right">
                                    <div className="image">
                                        <img src={tumb} alt="" />
                                        <div className="main" data-img-url={hero}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="main_menu">
                                <ul>
                                    <li>
                                        <img className="svg" src={archive} alt="" />
                                        <span>About Me</span>
                                        <a className="know_tm_full_link" href="#about"></a>
                                    </li>
                                    <li>
                                        <img className="svg" src={resume} alt="" />
                                        <span>Resume</span>
                                        <a className="know_tm_full_link" href="#resume"></a>
                                    </li>
                                    <li>
                                        <img className="svg" src={portfolio} alt="" />
                                        <span>Portfolio</span>
                                        <a className="know_tm_full_link" href="#portfolio"></a>
                                    </li>
                                    <li>
                                        <img className="svg" src={service} alt="" />
                                        <span>Service</span>
                                        <a className="know_tm_full_link" href="#service"></a>
                                    </li>

                                    <li>
                                        <img className="svg" src={contact} alt="" />
                                        <span>Contact</span>
                                        <a className="know_tm_full_link" href="#contact"></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <Animasi />

            </div>




        </div>
    )




}

export default Hero