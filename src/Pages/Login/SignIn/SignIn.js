import React, { useRef } from 'react';
import "./SignIn.css";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SignIn = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let errorElement;

    let from = location.state?.from?.pathname || "/";

    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate(from, { replace: true });
    };

    if (error) {
        errorElement = <p>Error: {error?.message}</p>
    }

    const handleSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    };
    
    return (
        <div className='login-container'>
            <form onSubmit={handleSubmit} className='form-container'>
                <h2 className="form-title">Please Login</h2>
                <div className='input-field-container'>
                    <input ref={emailRef} type="email" placeholder='Type Your Email' name="" id="" required />
                    <input ref={passwordRef} placeholder='Type Your Password' type="password" name="" id="" required />
                </div>
                <input className='login-btn' type="submit" value="Login" />
                <div className='register-text'>
                    <span>Don't Have an Account?</span><Link to="/signup" className='navigate-register-text'>Please Register</Link>
                    <small>{errorElement}</small>
                </div>
            </form>
        </div>
    );
};

export default SignIn;