import React, { useState } from 'react';

const Navbar = props => {
    const [hideMenu, toggleMenu] = useState(false);
    return (
        <header>
                <nav className={`nav ${hideMenu && 'open'} `}>
                    <div onClick={e => toggleMenu(!hideMenu)}  className="menu-togglers">
                        <i class="fas fa-grip-lines fa-2x"></i>
                        <i className="fas fa-times fa-2x"></i>
                    </div>
                    <div className="name">
                        <h3>Praise O</h3>
                    </div>
                    <ul className="nav-list">
                        <li className="nav-link"><a href='#'>Home</a></li>
                        <li className="nav-link"><a href='#'>About</a></li>
                        <li className="nav-link"><a href='#'>Projects</a></li>
                        <li className="nav-link"><a href='#'>Contact</a></li>
                    </ul>
                </nav>
        </header>
    )
}

export default Navbar
