import React from 'react';
import logo from "../../../media/images/logo.png";
import CustomLink from '../CustomLink/CustomLink';
import "./Header.css"

const Header = () => {
    return (
        <nav className='nav-container'>
            <div className="brand-logo">
                <img src={logo} alt="" />
            </div>
            <div className="nav-links">
                <CustomLink to="/blogs">Blogs</CustomLink>
                <CustomLink to="/about">About Us</CustomLink>
            </div>
        </nav>
    );
};

export default Header;