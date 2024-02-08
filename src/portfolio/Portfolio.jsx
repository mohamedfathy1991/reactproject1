import React, { useEffect } from 'react'
import './portfolio.css'

export default function Portfolio() {
      function showImage(){
           let image= document.querySelectorAll('.image-wrapper')
           image.forEach((item)=>{
            item.addEventListener('click',()=>{
                  (item.querySelector('.imagebacground-layer').classList.toggle('d-none'))
            

            })
           })
      }

      useEffect(()=>{
            showImage()

      },[])

  return (
    <div>
      <div>
      <h1 className="text-center fw-bolder text-dark-emphasis  ">
        PORTFOLIO COMPONENT
      </h1>
      <div className="star-wrapper text-center">
        <i className="fa-solid fa-star star"></i>
      </div>

      <div className="container py-5">
            <div className="row g-5">
                  <div className="col-md-4 col-sm-6">
                        <div  className="image-wrapper ">
                              <img className="w-100" src={require('../assests/port1.png')} alt="dsadsa" />
                              <div className="layout-layer  d-flex justify-content-center align-items-center text-white">
                              <i className="fa-solid fa-plus fa-4x fw-bold"></i>
                              </div>
                              <div className='imagebacground-layer  position-fixed d-none z-3'>
                              <img className="w-50" src={require('../assests/port1.png')} alt="dsadsa" />


                              </div>
                              

                        </div>

                  </div>
                  <div className="col-md-4 col-sm-6">
                        <div className="image-wrapper">
                              <img className="w-100" src={require('../assests/port2.png')} alt="dsadsa" />
                              <div className="layout-layer  d-flex justify-content-center align-items-center text-white">
                              <i className="fa-solid fa-plus fa-4x fw-bold"></i>
                              </div>
                              <div className='imagebacground-layer  position-fixed d-none z-3'>
                              <img className="w-50" src={require('../assests/port2.png')} alt="dsadsa" />


                              </div>

                        </div>

                  </div>
                  <div className="col-md-4 col-sm-6">
                        <div className="image-wrapper">
                              <img className="w-100" src={require('../assests/port3.png')} alt="dsadsa" />
                              <div className="layout-layer  d-flex justify-content-center align-items-center text-white">
                              <i className="fa-solid fa-plus fa-4x fw-bold"></i>
                              </div>
                              <div className='imagebacground-layer  position-fixed d-none z-3'>
                              <img className="w-50" src={require('../assests/port3.png')} alt="dsadsa" />


                              </div>

                        </div>

                  </div>
                  <div className="col-md-4 col-sm-6">
                        <div className="image-wrapper">
                              <img className="w-100" src={require('../assests/port2.png')} alt="dsadsa" />
                              <div className="layout-layer  d-flex justify-content-center align-items-center text-white">
                              <i className="fa-solid fa-plus fa-4x fw-bold"></i>
                              </div>
                              <div className='imagebacground-layer  position-fixed d-none z-3'>
                              <img className="w-50" src={require('../assests/port2.png')} alt="dsadsa" />


                              </div>

                        </div>

                  </div>
                  <div className="col-md-4 col-sm-6">
                        <div className="image-wrapper">
                              <img className="w-100" src={require('../assests/port3.png')} alt="dsadsa" />
                              <div className="layout-layer  d-flex justify-content-center align-items-center text-white">
                              <i className="fa-solid fa-plus fa-4x fw-bold"></i>
                              </div>
                              <div className='imagebacground-layer  position-fixed d-none z-3'>
                              <img className="w-50" src={require('../assests/port3.png')} alt="dsadsa" />


                              </div>

                        </div>

                  </div>
                  <div className="col-md-4 col-sm-6">
                        <div className="image-wrapper">
                              <img className="w-100" src={require('../assests/port1.png')} alt="dsadsa" />
                              <div className="layout-layer  d-flex justify-content-center align-items-center text-white">
                              <i className="fa-solid fa-plus fa-4x fw-bold"></i>
                              </div>
                              <div className='imagebacground-layer  position-fixed d-none z-3'>
                              <img className="w-50" src={require('../assests/port1.png')} alt="dsadsa" />


                              </div>

                        </div>

                  </div>
                  
            </div>
      </div>
      
    </div>
    </div>
  )
}
