import React from 'react'
import { Link,NavLink,Outlet } from 'react-router-dom';
import  "./drashfile/dresh.css"
import Home from './drashfile/Home';



function Drashboad() {
  return (
    <>
<div className='grid-container'>
<div className='drashboad'>
    <ul>
        
        <li><Link to={"/home"}>home</Link></li>
        <li>
          <NavLink to='/contact'>contact</NavLink>
        </li>
        <li><Link to={"/short"}>short</Link></li>
        <li><Link to={"/subscribe"}>subscribtions</Link></li>
        
    </ul>
   
    
    </div>
    
    
</div>
<Outlet/>
    </>
  )
}

export default Drashboad;