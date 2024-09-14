import './HeroStyle.css'
// eslint-disable-next-line no-unused-vars
import headbg from './../../images/header-bg.png'

// eslint-disable-next-line react/prop-types
const Hero = ({titleclass , title , img}) => {

    
return (
    <div className="hero">
        <p className={titleclass}>{title}</p>
        <img src={img} alt="" />
    </div>
)
}

export default Hero

