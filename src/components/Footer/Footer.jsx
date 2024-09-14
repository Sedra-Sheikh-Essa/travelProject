import React from 'react'
import './FooterStyle.css'
import bgFooter from './../../images/footer-bg.png'

const Footer = ({logo , par , linkedin , messenger , twitter , twoo , title1 , p1 , p2 , p3 , p4 , title2 , p5 , p6 , p7 , p8 , end}) => {
return (
    <div className='Footer' /* style={{backgroundImage:`url(${bgFooter})`}} */>
        <div className="condiv">
            <div className='div1'>
                <p className="travel">
                <img src={logo} alt="" />
                </p>
                <p className='parFooter'>{par}</p>
                <div className="sotialMedia">
                    <img src={linkedin} alt="" /><img src={messenger} alt="" /><img src={twitter} alt="" /><img src={twoo} alt="" />
                </div>
            </div>
            <div className='column1'>
                <p className='title'>{title1}</p>
                <p className='pfooter'>{p1}</p>
                <p className='pfooter'>{p2}</p>
                <p className='pfooter'>{p3}</p>
                <p className='pfooter'>{p4}</p>
            </div>
            <div className='column2'>
                <p className='title'>{title2}</p>
                <p className='pfooter'>{p5}</p>
                <p className='pfooter'>{p6}</p>
                <p className='pfooter'>{p7}</p>
                <p className='pfooter'>{p8}</p>
            </div>
        </div>
        <p className="end">{end}</p>
    </div>
)
}

export default Footer