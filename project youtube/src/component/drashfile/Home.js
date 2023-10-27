import React from 'react'
import { useState } from 'react'

function Home() {
const [color, setcolor]= useState('olive');

  return (
   <>
   
   <div className='color-change' style={{backgroundColor:color}}>
    <button className='btn1' onClick={() => setcolor('red')}>red</button>
    <button className='btn1' style={{backgroundColor: 'green'}} onClick={() => setcolor('green')}>green</button>
   
    <button className='btn1' style={{backgroundColor: 'blue'}} onClick={() => setcolor('blue')}>blue</button>
   
    <button className='btn1' style={{backgroundColor: 'yellow'}} onClick={() => setcolor('yellow')}>green</button>
   
    
   
    
   </div>
   
   </>
  )
}

export default Home