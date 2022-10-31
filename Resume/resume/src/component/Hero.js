import React from 'react'

import tumb from "../assets/img/thumbs/47-60.jpg"

import satu from "../assets/img/svg/shapes/1.svg"
import dua from "../assets/img/svg/shapes/2.svg"
import tiga from "../assets/img/svg/shapes/3.svg"
import empat from "../assets/img/svg/shapes/4.svg"
import lima from "../assets/img/svg/shapes/5.svg"
import enam from "../assets/img/svg/shapes/8.svg"
import tujuh from "../assets/img/svg/shapes/9.svg"
import delapan from "../assets/img/svg/shapes/dot-2.svg"
import sembilan from "../assets/img/svg/shapes/dot.svg"

import archive from "../assets/img/svg/archive.svg"
import resume from "../assets/img/svg/contacs.svg"
import portfolio from "../assets/img/svg/briefcase.svg"
import service from "../assets/img/svg/gear.svg"
import contact from "../assets/img/svg/letter.svg"

const Hero = () => {
    // const data = dataPribadi.map((pribadi) => {
    //     console.log(pribadi)
        return (
            <div>
                <div className="know_tm_hero">
                                <div className="background_shape"></div>
                                <div className="hero_content">
                                    <div className="container">
                                        <div className="content_inner">
                                            <div className="main_info">
                                                <div className="left">
                                                    <span className="subtitle">I'm</span>
                                                    {/* <h3 className="name">{pribadi.name}</h3>
                                                    <p className="text">{pribadi.description}</p> */}
        
                                                </div>
                                                <div className="right">
                                                    <div className="image">
                                                        <img src={tumb} alt="" />
                                                        {/* <div className="main" data-img-url={pribadi.photo}></div> */}
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
        
                                {/* <!-- Hero Shapes --> */}
                                <span className="one anim_scale"><img className="svg" src={tujuh} alt="" /></span>
                                <span className="two anim_moveLeft"><img className="svg" src={sembilan} alt="" /></span>
                                <span className="three anim_moveTop"><img className="svg" src={delapan} alt="" /></span>
                                <span className="four anim_circle"><img className="svg" src={satu} alt="" /></span>
                                <span className="five anim_circle"><img className="svg" src={enam} alt="" /></span>
                               <span className="six anim_circle"><img className="svg" src={tiga} alt="" /></span>
                                <span className="seven anim_right"><img className="svg" src={empat} alt="3" /></span>
                                <span className="eight anim_scale"><img className="svg" src={tujuh} alt="3" /></span>
                                <span className="nine anim_circle"><img className="svg" src={tiga} alt="3" /></span>
                                <span className="ten anim_moveLeft"><img className="svg" src={empat} alt="3" /></span>
                                <span className="eleven anim_scale"><img className="svg" src={tujuh} alt="3" /></span>
                                <span className="twelve anim_extra"><img className="svg" src={dua} alt="3" /></span>
                                <span className="thirteen anim_circle"><img className="svg" src={lima} alt="3" /></span>
                                <span className="fourteen anim_scale"><img className="svg" src={tujuh} alt="3" /></span>
                                <span className="fifteen anim_circle"><img className="svg" src={tiga} alt="3" /></span>
                                <span className="sixteen anim_scale"><img className="svg" src={tujuh} alt="3" /></span>
                                <span className="seventeen anim_circle"><img className="svg" src={lima} alt="3" /></span>
                                <span className="eighteen anim_scale"><img className="svg" src={tujuh} alt="3" /></span>
                                <span className="nineteen anim_scale"><img className="svg" src={tujuh} alt="3" /></span>
                                <span className="twenty anim_circle"><img className="svg" src={satu} alt="3" /></span>
                                {/* <!-- /Hero Shapes --> */}
        
                            </div>
            </div>
          )


    
 
}

export default Hero