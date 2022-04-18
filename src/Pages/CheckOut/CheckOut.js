import React from 'react';
import "./CheckOut.css"

const CheckOut = () => {
    return (
        <div className='checkout-container'>
            <div className='checkout-form-container'>
                <h1>Getting Your Order</h1>
                <div className='shipping-info'>
                    <h2>Shipping Information</h2>
                    <input type="text" placeholder='First Name' name="name" id="" />
                    <input type="text" placeholder='Last Name' name="name" id="" />
                    <input type="text" placeholder='Address Line 1' name="" id="" />
                    <input type="text" placeholder='Address Line 2(optional)' name="" id="" />
                    <div className='city-zip'>
                        <input type="text" placeholder='City' name="name" id="" />
                        <input type="text" placeholder='Zip Code' name="name" id="" />
                    </div>
                    <h2>Contact Info.</h2>
                    <hr></hr>
                    <div className='contact-info'>
                        <input type="email" placeholder='Email Address' name="" id="" />
                        <input type="tel" placeholder='Phone Number' name="" id="" />
                    </div>
                    <button>Payment Information</button>
                </div>

            </div>
        </div>
    );
};

export default CheckOut;