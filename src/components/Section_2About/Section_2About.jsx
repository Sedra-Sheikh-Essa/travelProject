import React from 'react'
import './Section_2AboutStyle.css'
import './../Hero/HeroStyle.css'
import img2Sec2 from './../../images/video-play.svg'

const Section_2About = (props) => {
  return (
    <div className='Section_2About'>
         {props.children}
         <img src={img2Sec2} alt="" className='img2Sec2' />
    </div>
  )
}

export default Section_2About