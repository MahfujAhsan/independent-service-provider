import React from 'react';
import "./Blog.css";

const Blogs = () => {
    return (
        <div className='blogs-container'>
            <h2>Authorization VS Authentication</h2>
            <div className='author-authen-container'>
                <div>
                    <h3>Authorization</h3>
                    <p>1. Authorization in system security is the process of giving the user permission to access a specific resource or function, in otherwords, Access Control.</p>
                    <p>2. Providing individual users with administrative access to an application are good examples of authorization.</p>
                    <p>3. In secure environments, authorization must always follow authentication.</p>
                    <p>4. Through settings maintained by security teams, authorization isn't visible to users.</p>
                    <p>5. Authentication defines grants or denies permissions</p>
                </div>
                <div>
                    <h3>Authentication</h3>
                    <p>1. Authentication is The Act of Validating That Users Are Whom They Claim To Be.</p>
                    <p>2. Authentication is The First Step In Any Security Process.</p>
                    <p>3. UserName/Email & Password (Usernames and Passwords are The Most Common Authentication Factors).</p>
                    <p>4. One-time Pins (Grant Access For Only One Session).</p>
                    <p>5. Authentication Apps (Generate Security Codes Via An Outside Party That Grants Access).</p>
                </div>
            </div>
            <div className='firebase-container'>
                <h2>Why FireBase?</h2>
                <p>1. Firebase is simple, lightweight, friendly, and industrial backend development tool for building dynamic web application.</p>
                <p>2. Firebase can instancely turn web application into a serverless app in no time.</p>
                <p>3. Firebase just eliminates the need to write backend code from scratch.</p>
                <p>4. As a Google Cloud service, it also gives you access to other Google products and features.</p>
                <p>5. Firebase removes the need to worry about the technicalities of cloud server configuration.</p>
            </div>
            <div className='compare-container'>
                <h2>1. FireBase Compare to Other Authentication System</h2>
                <p>2. Firebase are Faster <small>Compare To</small> Any Other Technologies.</p>
                <p>3. Firebase is also cheaper <small>Compare To</small> Any Other Technologies.</p>
                <p>4. Firebase setup backend more easily <small>Compare To</small> Any Other Technologies.</p>
                <p>5. Firebase Customizing the authentication flow using blocking functions that more flexible <small>Compare To</small> Any Other Technologies.</p>
                <p>6. Firebase Authenticate users with external identities that also make UX more smoothy <small>Compare To</small> Any Other Technologies.</p>
            </div>
        </div>
    );
};

export default Blogs;