import React ,{useContext, useRef, useState} from 'react';
import './Navbar.css'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import logo from '../Assets/logo_big.jpg'
import { ShopContext } from '../Context/ShopContext';
import nav_dropdown from '../Assets/dropdown_icon.png';


const Navbar = () =>{

    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e)=>{
        menuRef.current.classlist.toggle('nav-menu-visible');
       e.target.classList.toggle('open');
    }

    return(
        <div className='navbar'>
            <div className="nav-logo">
                <img  src={logo} alt='' />
                <p>Agrow IT Online Spices</p>
            </div>
            <img className = 'nav-dropdown' onClick ={dropdown_toggle} src ={nav_dropdown} alt='' />
            <ul ref={menuRef} className="nav-menu">
                <li  onClick={() =>{setMenu("shop")}}><Link to= '/'>Shop</Link> {menu==="shop"?<hr />:<></>}</li>
                <li  onClick={() =>{setMenu("spices")}}><Link to= '/spices'>Available Spices</Link> {menu==="spices"?<hr />:<></>}</li>
                <li  onClick={() =>{setMenu("contact")}}><Link to= '/contact'>Contact</Link> {menu==="contact"?<hr />:<></>}</li>
                <li  onClick={() =>{setMenu("about")}}><Link to= '/about'>About Us</Link> {menu==="about"?<hr />:<></>}</li>
            </ul>
            <div className="nav-login-cart">
              <Link to ='/login'><button>Login</button> </Link> 
              <Link to ='/cart'><img className = 'img_1' src ={cart_icon} alt='' /></Link>
              <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar
