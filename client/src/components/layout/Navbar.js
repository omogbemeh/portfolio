import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [hideMenu, toggleMenu] = useState(false);
    return (
        <header>
                <nav className={`nav ${hideMenu && 'open'} `}>
                    <div onClick={e => toggleMenu(!hideMenu)}  className="menu-togglers">
                        <i className="fas fa-grip-lines fa-2x"></i>
                        <i className="fas fa-times fa-2x"></i>
                    </div>
                    <div className="name">
                        <h3><Link to='/'>Praise O</Link></h3>
                    </div>
                    <ul className="nav-list" onClick={e => {toggleMenu(!hideMenu)}}>
                        <Link to='/'><li className="nav-link">Home</li></Link>
                        <Link to='/about'><li className="nav-link">About</li></Link>
                        <Link to='/projects'><li className="nav-link">Projects</li></Link>
                        <Link to='/contact'><li className="nav-link">Contact</li></Link>
                    </ul>
                </nav>
        </header>
    )
}

export default Navbar
