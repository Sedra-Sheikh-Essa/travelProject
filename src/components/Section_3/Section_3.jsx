import './Section_3Style.css'
const Section_3 = (props) => {
  return (
    <div className='Section_3'>
      <div>
        <p className='title1'>TRENDY</p>
        <p className='title2'>Our Trending Tour Packages</p>
      </div>
      <div className="conCardSec3">
      {props.children}
      </div>
    </div>
  )
}

export default Section_3