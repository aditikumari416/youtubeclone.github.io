import React from 'react'
import Drashboad from '../drashboad'
import { Outlet } from 'react-router'
import Header from '../header';

function Headernew() {
  return (
    <>
    <Header/>
    <div className='outlet' >
        
        <Drashboad/>
    </div>
   

    </>
  )
}

export default Headernew;