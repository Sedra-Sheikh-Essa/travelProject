import './Section_1Style.css'
import Services from './../Services/Services'
import service1 from './../../images/service-1.png'
import service2 from './../../images/service-2.png'
import service3 from './../../images/service-3.png'
import service4 from './../../images/service-4.png' 
const Section_1 = () => {
  return (
    <div className="Section_1">
    <div>
        <p className='title1'>CATEGORY</p>
        <p className='title2'>We Offer Best Services</p>
    </div>
    <div className="conServices">
        <Services img={service1} title="Guided Tours" discription="sunt qui repellat saepe quo velit aperiam id aliquam placeat." />
        <Services img={service2} title="Best Flights Options" discription="sunt qui repellat saepe quo velit aperiam id aliquam placeat." />
        <Services img={service3} title="Religious Tours" discription="sunt qui repellat saepe quo velit aperiam id aliquam placeat." />
        <Services img={service4} title="Medical insurance" discription="sunt qui repellat saepe quo velit aperiam id aliquam placeat." />
    </div>
    </div>
  )
}

export default Section_1