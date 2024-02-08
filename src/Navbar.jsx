import { useEffect, useState } from "react"
import { NavLink ,Link  } from "react-router-dom"


export default function Navbar() {

  


  function scrillingnav(){
    document.addEventListener('scroll',()=>{
      if(window.scrollY>5){
        document.querySelector('.navbar').classList.add('py-4')


      }else{
        document.querySelector('.navbar').classList.remove('py-4')


      }

      document.querySelector('.navbar')
    })
  }
  
   useEffect(()=>{

    scrillingnav()
    
    
    
     
    



   },[])
  
 


      
  return (
      
              <nav className="navbar navbar-expand-lg navbar-dark  px-5  text-white bg-secondary fixed-top ">
  <div className="container-fluid py-2">
    <Link className="navbar-brand fw-bolder to='' fs-2 " >Start Frame work</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-4 fw-bold ">
        <li className="nav-item mx-2">
          <NavLink className="nav-link " aria-current="page" to='about' >About</NavLink>
        </li>
        <li className="nav-item mx-2">
          <NavLink className="nav-link" to={'portfolio'} >PortFolio</NavLink>
        </li>
        <li className="nav-item mx-2">
          <NavLink to={"contact"} className="nav-link" >Contacts</NavLink>
        </li>
      
       
      </ul>

    </div>
  </div>
</nav>
      
 
      
    
  )
}
