import React from 'react'
import "./Header.css"
import Logo from './img/logo.png'
const Header = () => {
    return (
        <div className='header-container'>

            <img src={Logo} alt="logo" className='logo'/>
        </div>
    );
}

export default Header;