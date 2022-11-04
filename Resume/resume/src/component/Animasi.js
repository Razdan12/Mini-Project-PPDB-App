import React from 'react'


import satu from "../assets/img/svg/shapes/1.svg"
import dua from "../assets/img/svg/shapes/2.svg"
import tiga from "../assets/img/svg/shapes/3.svg"
import empat from "../assets/img/svg/shapes/4.svg"
import lima from "../assets/img/svg/shapes/5.svg"
import enam from "../assets/img/svg/shapes/8.svg"
import tujuh from "../assets/img/svg/shapes/9.svg"
import delapan from "../assets/img/svg/shapes/dot-2.svg"
import sembilan from "../assets/img/svg/shapes/dot.svg"

const Animasi = () => {
    return (
        <div>

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
        </div>
    )
}

export default Animasi