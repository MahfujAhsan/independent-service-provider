import React, { useRef } from 'react';
import "./SignIn.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRegistered } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SignIn = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate(from, { replace: true });
    };

    const handleSignin = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
        navigate('/')
    };
    
    return (
        <div className='signin-container'>
            <form onSubmit={handleSignin} className='form-container'>
                <h2 className="form-title">Please Login</h2>
                <div className='input-field-container'>
                    <input type="email" placeholder='Type Your Email' name="email" id="" required />
                    <input placeholder='Type Your Password' type="password" name="password" id="" required />
                </div>
                <input className='login-btn' type="submit" value="Login" />
                <div className='register-text'>
                    <span>Don't Have an Account?</span><Link to="/signup" className='navigate-register-text'>Please <FontAwesomeIcon icon={faRegistered} />egister</Link>
                </div>
            </form>
        </div>
    );
};

export default SignIn;