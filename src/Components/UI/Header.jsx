import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'

function Header() {

    const [show, setShow] = useState(false)

    const handleButtonToggle = ()=>{
       return setShow(!show)
    }

  return (
  

        <div className='container'>
            <div className='header-bg'>
            <div className='grid header navbar-grid'>
            <NavLink to="/">
                <h1 className='logo'>WorldAtals</h1>
            </NavLink>

            <nav className={show ? "menu-mobile" : "menu-web"}>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/country">Country</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/home"> </NavLink></li>
                </ul>
            </nav>


            <div className="ham-menu">
                <button onClick={handleButtonToggle}>
                    <GiHamburgerMenu />
                </button>
            </div>

            </div>
            </div>
        </div>
    
    
  )
}

export default Header