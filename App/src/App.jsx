

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Compoenents/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Placeorder from './Pages/Placeorder/Placeorder'
import Footer from './Compoenents/Footer/Footer'
import { useState } from 'react'
import LoginPopPup from './Compoenents/LoginPopPup/LoginPopPup'

function App() {

  const[showLogin,setshowLogin]=useState(false)


  return (
    <>
    {
      showLogin?<LoginPopPup setshowLogin={setshowLogin}/>:<></>
    }
      <div className='app'>
        <Navbar setshowLogin={setshowLogin} />
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/Cart' element={<Cart></Cart>} />
          <Route path='/Placeorder' element={<Placeorder></Placeorder>} />
        </Routes>

      </div>
      <Footer />
    </>

  )
}

export default App
