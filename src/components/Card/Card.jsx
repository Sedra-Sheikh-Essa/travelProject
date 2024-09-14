import './CardStyle.css'
const Card = ({img , p1 , p2 , p3}) => {
  return (
    <div className="card">
        <img src={img} alt="" />
        <div className="con">
            <p className="p1">{p1}</p>
            <p className="p2">{p2}</p>
            <div className="p3">{p3}</div>
    </div>
</div>  )
}

export default Card