import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./SignUp.css";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';

const SignUp = () => {
    const [createUserWithEmailAndPassword, loading] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating] = useUpdateProfile(auth);
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    };

    if(loading || updating) {
        return <LoadingSpinner></LoadingSpinner>
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        alert('Updated profile');
        navigate('/');
    }
    return (
        <div className='signup-container'>
            <form onSubmit={handleRegister} className='signup-form-container'>
                <h2 className='form-title'>Please Register</h2>
                <div className='signup-input-field-container'>
                    <input type="text" placeholder='Type Your Name' name="name" id="" />
                    <div className='address-phone'>
                        <input type="text" placeholder='Your Address' name="" id="" />
                        <input type="tel" placeholder='Your Phone' name="" id="" required />
                    </div>
                    <input type="email" placeholder='Type Your Email' name="email" id="" required />
                    <input placeholder='Type Your Password' type="password" name="password" id="" required />
                    <input placeholder='Confirm Your Password' type="password" name="" id="" required />
                </div>
                <input className='signup-btn' type="submit" value="Register" />
                <div className='login-text'>
                    <span>Already Have an Account?</span><Link onClick={navigateLogin} to="/login" className='navigate-register-text'>Please Login</Link>
                </div>
            </form>
        </div>
    );
};

export default SignUp;