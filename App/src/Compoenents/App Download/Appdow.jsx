import React from 'react'
import './Appdow.css'
import { assets } from '../../assets/assets'

const Appdow = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For Better Experience download <br/>Tomato App</p>
      <div className="app-download-platform">
        <img src={assets.play_store} alt="" srcset="" />
        <img src={assets.app_store} alt="" srcset="" />
      </div>
    </div>
  )
}

export default Appdow
