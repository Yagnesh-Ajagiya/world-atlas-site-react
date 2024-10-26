import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'

function Header() {
    const [show, setShow] = useState(false)

    const handleButtonToggle = () => {
       setShow(!show)
    }

    const closeMenu = () => {
       setShow(false)
    }

    return (
        <div className='container'>
            <div className='header-bg'>
                <div className='grid header navbar-grid'>
                    <NavLink to="/" onClick={closeMenu}>
                        <h1 className='logo'>WorldAtlas</h1>
                    </NavLink>

                    <nav className={show ? "menu-mobile" : "menu-web"}>
                        <ul>
                            <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
                            <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
                            <li><NavLink to="/country" onClick={closeMenu}>Country</NavLink></li>
                            <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
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