import React from 'react'
import { Link } from 'react-router-dom'

import { useQuery } from '@apollo/client'
import { GET_USER } from '../GraphQl/Queries'

import logo from "../assets/img/logo/light.png"
import fb from "../assets/img/svg/social/facebook.svg"
import tw from "../assets/img/svg/social/twitter.svg"
import yt from "../assets/img/svg/social/youtube-2.svg"
import ig from "../assets/img/svg/social/instagram.svg"
import { Button } from 'bootstrap'

const Header = () => {
    const { data, error } = useQuery(GET_USER)

    return (
        <div>

            <div className="know_tm_topbar">
                <div className="container">
                    <div className="topbar_inner">
                        <div className="logo">
                            <Link to="/"><img src={logo} alt="" /></Link>
                        </div>
                        <div className="right">
                            <div className="social">
                                <ul>
                                    <li><Link to="/"><img className="svg" src={fb} alt="" /></Link></li>
                                    <li><Link to="/"><img className="svg" src={tw} alt="" /></Link></li>
                                    <li><Link to="/"><img className="svg" src={yt} alt="" /></Link></li>
                                    <li><Link to="/"><img className="svg" src={ig} alt="" /></Link></li>
                                </ul>
                            </div>
                            {data?.about.map((about) => (
                                <div className="know_tm_button">
                                    <a href={about.link_cv} download={about.link_cv}>Download CV</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header