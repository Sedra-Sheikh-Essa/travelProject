import React from 'react'
import './Section_1AboutStyle.css'

const Section_1About = ({cName , p1 , p2 , p3 , img , btn , percent1 , titlepercent1 , percent2 , titlepercent2 }) => {
  return (
    <div className={cName}>
        <div className="div1">
            <p className='p1'>{p1}</p>
            <p className='p2'>{p2}</p>
            <p className='p3'>{p3}</p>
            <button className='get'>{btn}</button>
            <div className='condivpercent'>
              <div className='divpercent'>
                <p className='percent'>{percent1}</p>
                <p className='titlepercent'>{titlepercent1}</p>
              </div>
              <div className='divpercent'>
              <p className='percent'>{percent2}</p>
                <p className='titlepercent'>{titlepercent2}</p>
              </div>

            </div>
        </div>
        <img src={img} alt="" className='imgSec1' />
    </div>
  )
}

export default Section_1About