import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit exercitationem quia recusandae aperiam, neque perspiciatis veniam repudiandae dolorem facere omnis, voluptatem id culpa nulla architecto, itaque iste saepe sed beatae!</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />

                    </div>

                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>

                </div>
                <div className="footer-content-right">
                    <h2>Get in Touch</h2>
                    <ul>
                        <li>+1-236-564-7854</li>
                        <li>contact@tomato.com</li>
                    </ul>

                </div>

            </div>
            <hr />
            <p className="footer-copyright">
                copyrights are reserved by Tomato

            </p>


        </div>
    )
}

export default Footer
