import React from 'react'


if (className === "topnav") {
  className += " responsive";
} else {
  className = "topnav";
}

function Howto() {
    const myFunction= ()=>{
     

    }
  return (
    <>
    <div className="topnav" id="myTopnav">
  <a href="#home" className="active">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
  <a href="#" className="icon" onClick={()=>myFunction()}>
    <i className="fa fa-bars"></i>
  </a>
</div>

<div >
  <h2>Responsive Topnav Example</h2>
  <p>Resize the browser window to see how it works.</p>
</div>
    </>
  )
}

export default Howto;