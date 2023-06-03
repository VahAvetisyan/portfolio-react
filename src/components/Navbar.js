import React from 'react'
import "../styles/navbar.css"
import { useNavigate } from 'react-router-dom'



export default function Navbar() {
    const navigate = useNavigate()
const navbarItems = ['Home','About','Skills','Contact']

const onButtonClick = (url) => {
    navigate(url)
}


  return (
    <div id='navbar'>
        {navbarItems.map((el)=>(
            <button key={el} onClick={()=>{onButtonClick(el.toLowerCase())}} className='navbar-items'>{el.toUpperCase()}</button>
        ))}
    </div>
  )
}
