import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { Link } from 'react-scroll'

const Header = () => {
  const mobile = window.innerWidth <= 768
  const [menuOpened,setMenuOpened] = useState(false)


  return (
    <div className='header'>
        <img className='logo' src={Logo} alt="" />
        
        {(!menuOpened && mobile) ? (
          <div
            style={{
              backgroundColor:'var(--appColor)',
              padding:'0.5rem',
              borderRadius:'6px'
            }}
            onClick={()=>setMenuOpened(true)}
          >
            <img 
              style={{
                width:'1.5rem',
                height:'1.5rem'
              }}
              src={Bars} alt="" />
          </div>
        ):(
          <ul className='header-menu'>
            <li onClick={()=>setMenuOpened(false)}>
              <Link
                to="home"
                activeClass='active'
                span="true"
                smooth={true}
                onClick={()=>setMenuOpened(false)}
              >Home</Link>
            </li>
            <li>
              <Link
                to="programs"
                span="true"
                smooth={true}
                onClick={()=>setMenuOpened(false)}
              >Programs</Link>
            </li>
            <li>
              <Link
                to="reasons"
                span="true"
                smooth={true}
                onClick={()=>setMenuOpened(false)}
              >Why us</Link>
            </li>
            <li>
              <Link
                to="plans"
                span="true"
                smooth={true}
                onClick={()=>setMenuOpened(false)}
              >Plans</Link>
            </li>
            <li>
              <Link
                to="testimonials"
                span="true"
                smooth={true}
                onClick={()=>setMenuOpened(false)}
              >Testimonials</Link>
            </li>
        </ul>
        )}
    </div>
  )
}

export default Header