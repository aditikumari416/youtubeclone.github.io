import React from 'react'
import "./youvedio.css"
import { useState } from 'react';
import {FcApproval} from "react-icons/fc"
import Series from "./vedioapi"

function Youtubevedio() {
    const [record ,setrecord]= useState(Series)
    const filterseries = (catitem)=>{
        const updaterecord = Series.filter((curelm)=>{
            return curelm.category === catitem

        })
        setrecord (updaterecord);

    }
  return (
    <section>

        <div className='container-fluid'>
        <div className='row mt-5 '>
    <div className='menu-tabs container text-capitalize'>
        <div className='menu-tab d-flex justify-content-evenly '>
            <button className='btn btn-danger' onClick={()=>setrecord(Series)} >All</button>
            <button className='btn btn-secondary' onClick={()=>filterseries("music")} >music</button>
            <button className='btn btn-secondary' onClick={()=>filterseries(" animation")}>animation</button>
            <button className='btn btn-secondary' onClick={()=>filterseries("movies")}>movies</button>
            <button className='btn btn-secondary' onClick={()=>filterseries("news")}>news</button>
            <button className='btn btn-secondary' onClick={()=>filterseries("t-series")}>T-series</button>

        </div>
    </div>
                

<div className='menuitem  mt-5 '>
        <div className='row-card'>
            {
                record.map((crelm)=>{
                    const { image, description ,links}=crelm
                    return(
                        <>
                         <div className='card-container'>
               <div className='img-container'>
                <img src={image} alt='card img' className='img-fluid'/>
               </div>
               <div className='card-detail'>
               <div className='card-descrip'> 
               <img className='body-img' src='image/images.jpg'  alt='img'/>
                        <h5>{ description}<FcApproval/></h5>
                </div>
                <div className='card-btn'>
                    <a href={links}>
                        <button className='btn'>watch now</button>
                        </a>
                </div>

               </div>
            </div>
                        </>
                    )
                })
            }
           

        </div>



    </div>



                </div>
            </div>
        

        
    </section>
  )
}

export default Youtubevedio;