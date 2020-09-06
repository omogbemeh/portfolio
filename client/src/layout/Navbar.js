import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [hideMenu, toggleMenu] = useState(false);
    return (
        <header>
                <nav className={`nav ${hideMenu && 'open'} `}>
                    <div onClick={e => toggleMenu(!hideMenu)}  className="menu-togglers">
                        <i class="fas fa-grip-lines fa-2x"></i>
                        <i className="fas fa-times fa-2x"></i>
                    </div>
                    <div className="name">
                        <h3><Link to='/'>Praise O</Link></h3>
                    </div>
                    <ul className="nav-list" onClick={e => {toggleMenu(!hideMenu)}}>
                        <li className="nav-link"><Link to='/'>Home</Link></li>
                        <li className="nav-link"><Link to='/about'>About</Link></li>
                        <li className="nav-link"><a href='#'>Projects</a></li>
                        <li className="nav-link"><a href='#'>Contact</a></li>
                    </ul>
                </nav>
        </header>
    )
}

export default Navbar
