import React, { useRef } from 'react';
import "./SignIn.css";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignIn = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


    if(auth.user) {
        localStorage.setItem(auth.stt)
    }

    if (loading || sending) {
        return <LoadingSpinner></LoadingSpinner>
    }


    if (error) {
        errorElement = <p>Error: {error?.message}</p>
    }

    const handleSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    };

    if (user) {
        navigate(from, { replace: true });
    };


    const navigateRegister = () => {
        navigate('/signup');
    };
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Check Your Email');
        }
        else {
            toast('Please Enter Your Email')
        }
    }

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
                    <small>{errorElement}</small>
                    <span>Don't Have an Account?</span><Link onClick={navigateRegister} to="/signup" className='navigate-register-text'>Please Register</Link>
                    <p>Forget Password? <button className='reset-btn' onClick={resetPassword}>Reset Password</button></p>
                </div>
                <ToastContainer />
                <SocialLogin></SocialLogin>
            </form>
        </div>
    );
};

export default SignIn;