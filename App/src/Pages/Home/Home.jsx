import React, { useState } from 'react'
import './Home.css'
import Header from '../../Compoenents/Header/Header'
import Exploremenu from '../../Compoenents/Exploremenu/Exploremenu'
import Fooddisplay from '../../Compoenents/FoodDisplay/Fooddisplay'
import Appdow from '../../Compoenents/App Download/Appdow'

const Home = () => {
  const[Category,setCategory]=useState("All")

  return (
    <div>
      <Header/>
      <Exploremenu Category={Category} setCategory={setCategory}/>
      <Fooddisplay Category={Category}/>
      <Appdow/>
    </div>
  )
}

export default Home

