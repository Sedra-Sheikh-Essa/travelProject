import React from 'react'
import './Section_1PackageStyle.css'

const Section_1Package = (props) => {
  return (
    <div className='Section_1Package'>
        {props.children}
    </div>
  )
}

export default Section_1Package