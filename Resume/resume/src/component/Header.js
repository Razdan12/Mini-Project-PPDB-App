import React from 'react'
import {Link} from 'react-router-dom'

import logo from "../assets/img/logo/light.png"
import fb from "../assets/img/svg/social/facebook.svg"
import tw from "../assets/img/svg/social/twitter.svg"
import yt from "../assets/img/svg/social/youtube-2.svg"
import ig from "../assets/img/svg/social/instagram.svg"

const Header = () => {
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
                            <div className="know_tm_button">
                                <Link to="../assets/img/cv/1.jpg" download="">Download CV</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header