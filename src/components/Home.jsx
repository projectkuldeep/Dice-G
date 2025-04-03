import React from 'react'
import logo from'../assets/dices 1.png'
import { NavLink } from 'react-router'

function Home() {
  return (
    <div className=' flex m-11 p-8'>
      <div> <img src={logo} /> </div>
        <div className=' align-middle gap-6  content-center' > 
          <div className=' font-extrabold text-7xl '>
            Dice Game
          </div>
         
          <div className=' flex content-end flex-row-reverse pt-4 '>
          <NavLink to="Gpage">  <button className=" px-6 py-2 bg-black text-white rounded ">Play now</button>
          </NavLink>
            </div>
        </div>
    </div>
  )
}

export default Home