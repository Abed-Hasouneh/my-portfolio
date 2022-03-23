import React from 'react'
import logo from '../logo2.svg'

const Header = () => {
  return (
    <div className='header'>
      <div className='nav'>
        <img src={logo} className='logo' alt='logo'/>
      
        <ul>
          <li>Technologies</li>
          <li>Projects</li>
          <li>Contact Me</li>
        </ul>
      </div>   
    </div>
  )
}

export default Header