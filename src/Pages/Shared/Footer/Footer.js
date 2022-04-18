import React from 'react';
import "./Footer.css";
import footerImg from "../../../media/images/footer-img.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SocialMediaIconsReact } from 'social-media-icons-react';

const Footer = () => {
    const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52871.86609905526!2d-118.43455343710363!3d34.08254393284674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1650247589035!5m2!1sen!2sbd";
    return (
        <footer className='footer-parent'>
            <div className='footer-container'>
                <div>
                    <h2>JADE MILLS | COLDWELL</h2>
                    <h2>BANKER RESIDENTIAL BROKERAGE</h2>
                    <p>Beverly Hills Real Estate Agent
                        CA DRE# 00526877</p>
                </div>
                <div>
                    <h2>LOCATION</h2>
                    <iframe src={mapUrl} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div>
                    <h2>CONTACT US</h2>
                    <p>+88017XXXXXXXX</p>
                    <p>301 N Canon Dr Suite R-05, Beverly Hills, CA 90210, USA</p>
                </div>
            </div>
            <div className='footer-image'>
                <img src={footerImg} alt="" />
            </div>
            <div className='social-icons'>
                <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,166,233,1)" url="https://some-website.com/my-social-media-url" size="48"></SocialMediaIconsReact>
                <SocialMediaIconsReact borderColor="#fff" icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="#000" url="https://some-website.com/my-social-media-url" size="48"></SocialMediaIconsReact>
                <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="#0077B5" url="https://some-website.com/my-social-media-url" size="48"></SocialMediaIconsReact>
                <SocialMediaIconsReact borderColor="#fff" icon="instagram" iconColor="rgba(255,255,255,1)" backgroundColor="#000)" url="https://some-website.com/my-social-media-url" size="48"></SocialMediaIconsReact>
            </div>
        </footer>
    );
};

export default Footer;