import React, { useState } from 'react'
import {FaBars} from "react-icons/fa"
import {AiFillYoutube} from "react-icons/ai"
import {FaSearch} from "react-icons/fa"
import{AiFillAudio} from "react-icons/ai"
import{BsCameraVideo} from "react-icons/bs"
import{BsBell} from "react-icons/bs"
import  "./header.css"
import { useAuth0 } from "@auth0/auth0-react";
import Searchresult from './searchresult'
import $ from "jquery";



function Header() {
    const { loginWithRedirect,isAuthenticated,logout,user } = useAuth0();
    const [img ,setimg]= useState("");
    const inputevent =(event)=>{
        const data= event.target.value;
        console.log(data);
        setimg(data);
    }
  return (
    
    <>
   <section>

    <div className='container-fluid mt-4'>
        <div className='row'>
            
            <div className='col-lg-3 col-md-4 col 12'>
               <div className='left-col'>
               <a href='#' className='bars'><FaBars/></a>
                <a href='#' className='youtb'><AiFillYoutube className='y-icon'/>YouTube<sup className="in">IN</sup></a>
                
               </div>

            </div>
            <div className='col-lg-6 col-md-4 col 12'>

                <span className='search-bar '><input type='text' className='search' placeholder='Search....'
                value={img}
                onChange={inputevent}/>
            
                <button className='search-fas'><FaSearch/></button>
                </span>
                <button className='audio'><AiFillAudio/></button>
            </div>
            <div className='col-lg-3 col-md-4 col 12'>
                <div className='right-col'>
                    
                    
                    <a ><BsCameraVideo/></a>
                    <a ><BsBell className='bell'/><sup className='sup'>9+</sup></a>
                    
                    {/* $(document).ready(function(){
                        $("a").fadeToggle(function(){
                            $(".bell").toggle();

                        })
                    }) */}
                    
                   {/* {
                     isAuthenticated && (
                        <div className='usermail'>
                          <h6>{user.name}</h6>
                        </div>
                      )
                   } */}
                    {
                        isAuthenticated? <button className='btn btn-primary' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                        Log Out
                        </button>:
                   
                    <button className='btn btn-secondary' onClick={() => loginWithRedirect()}>Log In</button>
                    
                     }
                    <img src='image/images.jpg' alt='img' />

                </div>

            </div>

        </div>

    </div>
   </section>
    </>
  )
}

export default Header;