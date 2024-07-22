import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import GameCard from './component/GameCard'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div>
        <Home/>
      </div>
      <div>
        <GameCard/>
      </div>
         
   </div>
  )
}

export default App
