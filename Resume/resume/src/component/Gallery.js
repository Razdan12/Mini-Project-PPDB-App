import React, { useState }from 'react'
import "../assets/css/portfolio.css";
import { useQuery } from "@apollo/client";
import { GET_PORTFOLIO } from "../GraphQl/Queries";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill,BsFillXCircleFill } from "react-icons/bs";

const Gallery = () => {
    const { data } = useQuery(GET_PORTFOLIO);
    const [slideNumber, setSlideNumber] = useState(0)
    const [openModal, setOpenModal] = useState(false)
  
    const handleOpenModal = (index) => {
        console.log(index)
      setSlideNumber(index)
      setOpenModal(true)
    }
  
    // Close Modal
    const handleCloseModal = () => {
      setOpenModal(false)
    }
  
    // Previous Image
    // const prevSlide = () => {
    //   slideNumber === 0 
    //   ? setSlideNumber( data.length -1 ) 
    //   : setSlideNumber( slideNumber - 1 )
    // }
  
    // Next Image  
    // const nextSlide = () => {
    //   slideNumber + 1 === data.length 
    //   ? setSlideNumber(0) 
    //   : setSlideNumber(slideNumber + 1)
    // }
  
    return (
      <div>
  
        {openModal && 
          <div className='sliderWrap'>
            <BsFillXCircleFill className='btnClose' onClick={handleCloseModal}  />
            {/* <BsFillArrowLeftCircleFill className='btnPrev'  />
            <BsFillArrowRightCircleFill className='btnNext'  /> */}
            <div className='fullScreenImage'>
              <img src={data.image} alt='' />
            </div>
          </div>
        }
  
        {/* <br />
        Current slide number:  {slideNumber}
        <br />
        Total Slides: {data.length}
        <br /><br /> */}
  
        <div className='galleryWrap'>
          {
            data?.portfolio.map((image, index) => {
              return(
                <div 
                  className='single' 
                  key={index}
                  onClick={ () => handleOpenModal(index) }
                >
                  <img src={image.image} alt='' />
                </div>
              )
            })
          }
        </div>
  
      </div>
    )
}

export default Gallery