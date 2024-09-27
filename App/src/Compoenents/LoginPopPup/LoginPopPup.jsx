import React, { useState } from 'react'
import './LoginPopPup.css'
import { assets } from '../../assets/assets'

const LoginPopPup = ({ setshowLogin }) => {
    const [currentstate, setcurrentstate] = useState("Sign Up")
    return (
        <div className='login-poppup'>
            <form action="" className="Login-popup-container">
                <div className='login-poppup-title'>
                    <h2>{currentstate}</h2>
                    <img onClick={() => { setshowLogin(false) }} src={assets.cross_icon} alt="" srcset="" />
                </div>

                <div className="login-poppup-inputs">
                    {currentstate === "Login" ? <></> : <input type="text" placeholder='Your Name' required />}

                    <input type="email" placeholder='Your Email' required />
                    <input type="password" placeholder='Password' required />
                </div>
                <button> {currentstate === 'Sign Up' ? "create Account" : "Login"}</button>
                <div className="login-poppup-condition">
                    <input type="checkbox" required />
                    <p>I agree to the terms and condition</p>
                </div>
                {currentstate === "Login"
                    ? <p>create a new account?<span onClick={()=>{setcurrentstate("Sign Up")}}>Click here</span></p>
                    : <p>Already have an account?<span onClick={()=>{setcurrentstate("Login")}}>Login here</span></p>

                }

            </form>

        </div>
    )
}

export default LoginPopPup
