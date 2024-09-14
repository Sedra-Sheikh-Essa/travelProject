import './NavBarStyle.css'
import listimg1 from './../../images/Icon1.svg'
import listimg2 from './../../images/listimg2.svg'
import logo from './../../images/logo.png'
import { NavLink } from 'react-router-dom'
import { useState} from 'react'


const NavBar = ({menu , logo , btn}) => {
    const [list , setlist] = useState(false)
/*     const menuFunction=() =>{
        setlist((prevlist) => !prevlist)
                console.log(list);
    } */
    return (
    <nav>   
            <img src={logo} alt="" />
            <img className='icon' src={list ? listimg2 : listimg1} onClick={()=>{setlist((prevlist) => !prevlist)}} />
{/*             <div onClick={menuFunction}>
            <i className={list ? 'fas fa-times' : 'fas fa-bars'}/>
            </div> */}
            <ul className={list ? "styleList2 styleList1" : "styleList2"}>
            <div className='conli'>
                {
            menu.map((elements , index) => {
                return(
                <li key={index}>
                    <NavLink to={elements.path} className={({isActive}) =>isActive? "active" :""}>
                        {elements.title}
                    </NavLink>
                </li>)
            })
        }
            </div>
            <button className='get'>{btn}</button>  
            </ul>
    </nav>
)
}

export default NavBar