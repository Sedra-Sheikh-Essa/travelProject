import React from 'react'
import './CarsSec_3Style.css'

const CardSec_3 = ({img , flag , calender , day , user , people , title , star , p , btn}) => {
return (
    <div className='cardsec3'>
        <div className='conimg'>
        <img src={img} alt="" className='bigimg' />
        <div className="conflag">
            <img src={flag} alt="" className='smallimg' />
        </div>
        </div>
        <div className="day">
            <div className='days'>
            <img src={calender} /> <p>{day}</p>
            </div>
            <div className='people'>
            <img src={user} /> <p>{people}</p>
            </div>
        </div>
        <div className="star">
            <p>{title}</p>  <div className="constar"><img src={star} /><img src={star} /><img src={star} /><img src={star} /><img src={star} /></div>
        </div>
        <p className='text'>{p}</p>
        <button className='get'>{btn}</button>
    </div>
)
}

export default CardSec_3