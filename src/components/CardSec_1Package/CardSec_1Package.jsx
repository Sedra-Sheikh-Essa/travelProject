import React from 'react'
import './CardSec_1PackageStyle.css'

const CardSec_1Package = ({img , date1 , people , title , paragragh , price , star , num}) => {
  return (
    <div className='CardSec_1Package'>
        <div className="card">
            <img src={img} alt="" />
            <div className='condate'>
                <p>{date1}</p>
                <p>{ people}</p>
            </div>
            <p className='title'>{title}</p>
            <p className='paragragh'>{paragragh}</p>
            <div className='constar'>
                <p>{price}</p>
                <img src={star} alt="" className='star' />
                <p>{num}</p>
            </div>
        </div>
    </div>
  )
}

export default CardSec_1Package