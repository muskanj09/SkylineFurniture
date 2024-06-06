import React, { useState } from 'react'
import '../navbar/navbar.css'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return <>
        <nav>
            <div className='nav-menu'>
                <ul className='navList' >
                    <Link className='navLink' to='/our story'>Our Story</Link>
                    <Link className='navLink' to='/products'>Products</Link>
                    <Link className='navLink' to='/press'>Press</Link>
                    <Link className='navLink' to='/partners'>Partners</Link>
                    <Link className='navLink' to='/trade'>Trade</Link>
                </ul>
            </div>
            <div className='nav'>
                <Link to="/" className='navLink'><h3>Skyline Furniture MFG.</h3>
                    <p>Est. 1946</p> </Link>
            </div>
            <div className='nav-menu'>
                <ul className='navList'>
                <Link className='navLink' to='/login'>Login</Link>
                <Link className='navLink' to='/createAccount'>Create Account</Link>
                </ul>
            </div>
            <div className="toggle" onClick={toggleMenu}>
                <GiHamburgerMenu />
            </div>
            <ul className={`navul ${isMenuOpen ? "open" :""}`} >
                    <Link className='navLink' to='/our story'>Our Story</Link>
                    <Link className='navLink' to='/products'>Products</Link>
                    <Link className='navLink' to='/press'>Press</Link>
                    <Link className='navLink' to='/partners'>Partners</Link>
                    <Link className='navLink' to='/trade'>Trade</Link>
                </ul>
                <div className='nav-menu'>
                <ul className={`navul ${isMenuOpen ? "open" :""}`}>
                <Link className='navLink' to='/login'>Login</Link>
                <Link className='navLink' to='/createAccount'>Create Account</Link>
                </ul>
            </div>
        </nav>
        
    </>
}

export default Navbar