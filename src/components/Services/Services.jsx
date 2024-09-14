import './ServicesStyle.css'
// eslint-disable-next-line react/prop-types
const Services = ({img , title , discription}) => {
  return (
    <div className="Services">
        <img src={img} alt="" />
        <p className="title">{title}</p>
        <p className="discription">{discription}</p>
    </div>
  )
}

export default Services