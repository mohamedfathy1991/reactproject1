import React from 'react'
import { Link } from 'react-router-dom'

export default function Notfound() {
  return (
    <div className='bg-danger'>
      <div className="container ">
            <div className='d-flex justify-content-center align-items-center vh-100 '>
             <h1>404 page not found </h1>
             <h2>return to <Link to={'/'}>  home</Link></h2>
            </div>
      </div>
      
    </div>
  )
}
