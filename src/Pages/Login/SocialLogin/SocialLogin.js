import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';
import "./SocialLogin.css";
import google from "../../../media/images/google.png"

const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    if(googleLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    if(googleError) {
        errorElement = <p>Error: {googleError?.message}</p>
    }
    if(googleUser) {
        navigate('/')
    }
    return (
        <div>
            <div className='or-container'>
                <div className="horizontal-line"></div>
                <p className='or'>or</p>
                <div className="horizontal-line"></div>
            </div>
            {errorElement}
            <div className='google-container'>
                <button onClick={() => signInWithGoogle()} className=''>
                    <img className='google-image' src={google} alt="" />
                    <span className='google-btn'>GooGle Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;