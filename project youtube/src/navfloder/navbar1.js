import React, { useState } from 'react'
import  "./Navbar1.css"
import { FaFacebookSquare,FaInstagramSquare,FaYoutubeSquare } from 'react-icons/fa'
import{ GiHamburgerMenu} from 'react-icons/gi'

function Navbar1() {
    const [item ,setitem]= useState(false)
  return (
   <>
   <div className='main-container'>
    <div className='logo1'>
    <h2>youtube logo</h2>
    </div>
    <div className='menu-item'>
        <ul>
            <li><a href='#'>home</a></li>
            <li><a href='#'>about</a></li>
            <li><a href='#'>contact</a></li>
            <li><a href='#'>product</a></li>
            <li><a href='#'>servics</a></li>
        </ul>

    </div>
    <div className='media'>
        <ul>
            <li><a href='#'><FaFacebookSquare className="facebook" /></a></li>
            <li><a href='#'><FaInstagramSquare className="instagram" /></a></li>
            <li><a href='#'><FaYoutubeSquare className="youtube" /></a></li>
        </ul>
        <div className='burger'>
            <a href='#'><GiHamburgerMenu onClick={()=>setitem(!item)}/></a>

        </div>

    </div>

   </div>
   
   </>
  )
}

export default Navbar1