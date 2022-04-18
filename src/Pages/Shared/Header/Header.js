import React, { useState } from 'react';
import logo from "../../../media/images/logo.png";
import CustomLink from '../CustomLink/CustomLink';
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger, faSignIn, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [showLinks, setShowLinks] = useState(false);
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    };
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
                <div className='login-logout-btn'>
                    {
                        !user ?
                            <Link to="/signup">Sign Up</Link> : ""
                    }
                    {
                        user ?
                            <Link onClick={handleSignOut} to="/login"><FontAwesomeIcon className='logout-icon' icon={faSignOut} />SignOut</Link>
                            :
                            <Link to="/login"><FontAwesomeIcon className='login-icon' icon={faSignIn} />Login</Link>
                    }
                </div>
            </div>
            <button onClick={() => setShowLinks(!showLinks)}>
                <FontAwesomeIcon icon={faHamburger}></FontAwesomeIcon>
            </button>
        </nav>
    );
};

export default Header;