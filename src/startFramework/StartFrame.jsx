import React from 'react'

export default function StartFrame() {
  return (
      <div className=" framework text-white py-5 about">
    <div className="pt-5">
     {/* <img width={500}  src='../assests/avataaars.svg' alt=''/> */}
     <div className='text-center'>
     { <img width={300} src={require('../assests/avataaars.svg').default} alt='' /> }

     </div>



    <h1 className="text-center fw-bolder pt-5  ">
    START FRAMEWORK
      </h1>
    </div>
    
    


     <div class="  about-star-wrapper text-center py-2">
        <i class="fa-solid fa-star star"></i>
      </div>
      <p className=' text-center'>Graphic Artist - Web Designer - Illustrator</p>

    
  </div>
    
      
      
    
  )
}
