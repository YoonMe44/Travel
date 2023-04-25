import {useState} from 'react'
import React from 'react'
import './navbar.scss'
import './navbar.css'
import { SiYourtraveldottv } from 'react-icons/si';
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

const Navbar = () => {
  const [active, setActive] = useState('navBar')
  const showNav = ()=>{
    setActive('navBar activeNavbar')
  }
  const hideNav = ()=>{
    setActive('navBar')
  }
  return (
    <section className='navBar Section'>
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1><SiYourtraveldottv className="icon"/>Travel.</h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Packages</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Shop</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">About</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Pages</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">News</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Contact</a>
            </li>
            {/* <a href="#">tt</a> */}
            <button className='btn'>
              <a href="#">BOOK NOW</a>
            </button>
          </ul>
          <div onClick={hideNav} className="closeNavbar">
            <AiFillCloseCircle className="icon"/>
          </div>
        </div>
        <div onClick={showNav} className="toogleNavbar">
          <TbGridDots className="icon"/>
        </div>
      </header>
      
    </section>
    
  )
}

export default Navbar