import React, { useState } from 'react';
import logo from "../../../media/images/logo.png";
import CustomLink from '../CustomLink/CustomLink';
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
    const [showLinks, setShowLinks] = useState(false);
    return (
        <nav className='nav-container'>
            <div className="brand-logo">
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="nav-links" id={showLinks ? "hidden" : ""}>
                <CustomLink to="/blogs">Blogs</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </div>
            <button onClick={() => setShowLinks(!showLinks)}>
                <FontAwesomeIcon icon={faHamburger}></FontAwesomeIcon>
            </button>
        </nav>
    );
};

export default Header;