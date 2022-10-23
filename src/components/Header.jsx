import { useState } from "react"
import { NavLink } from "react-router-dom"
import CartBtn from "./Buttons/CartBtn"
import Login from "./Buttons/Login"
import Signup from "./Buttons/Signup"

const Header = ({show, setShow, showSignup, setShowSignup}) => {
  

  const [checked, setChecked] = useState(false);


  console.log(checked);
  function toggle(value){
    return !value;
  }
    return (
      <div className="header-container">
       <div className="hamburger-container">
        <input type="checkbox" 
        checked={checked}
        onChange={() => setChecked(toggle)}
        className="checkbox" />
        <div className="hamburger-box">
          
          <div className="hamburger"></div>

        </div>
        <div onClick={() => setChecked(toggle)} className="menu-background"></div>
       
    <div className="header-menu-contents">
    <NavLink to="/"><h1 onClick={() => setChecked(toggle)}>APPLE MART</h1></NavLink>
      <ul className="">
        <li onClick={() => setChecked(toggle)} className="nav-item">
          <NavLink  to="/">Home</NavLink>
        </li>
        <li onClick={() => setChecked(toggle)} className="nav-item">
          <NavLink to="/products">Products</NavLink>
        </li>
        <li onClick={() => setChecked(toggle)} className="nav-item">
          <NavLink to="/about">About</NavLink>
        </li>
        <li onClick={() => setChecked(toggle)} className="nav-item">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      
   
   <div className="menu-btns">
    <Login show={show} setShow= {setShow}/>
    <Signup showSignup ={showSignup} setShowSignup= {setShowSignup}/>
    <CartBtn onclick={() => setChecked(toggle)}/>

   </div>
    </div>
    
      </div>
      <div className="hamburger-contents">
       <div className="header"> 
    <div className="header-contents">
    <NavLink to="/">APPLE MART</NavLink>
      <ul className="">
        <li  className="nav-item">
          <NavLink  to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/products">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      
   
   <div className="btns">
    <Login show={show} setShow= {setShow}/>
    <Signup showSignup ={showSignup} setShowSignup= {setShowSignup}/>
    <CartBtn/>

   </div>
    </div>
    </div>
        </div> 
  
    </div>
    )
}

export default Header
