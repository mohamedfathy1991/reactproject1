import React from "react";
import './contacts.css'

export default function Contacts() {

  function showLabel(){
   let inputname= document.querySelector('#name')
   let inputage= document.querySelector('#age')
   let inputemail= document.querySelector('#email')
   let inputpassword= document.querySelector('#password')
   if(inputname.value!==''){
    document.querySelector('#namelabel').classList.add('bottom-100')

   }else{
    document.querySelector('#namelabel').classList.remove('bottom-100')

   }
   if(inputage.value!==''){
    document.querySelector('#agelabel').classList.add('bottom-100')

   }else{
    document.querySelector('#agelabel').classList.remove('bottom-100')

   }
   if(inputpassword.value!==''){
    document.querySelector('#passwordlabel').classList.add('bottom-100')

   }else{
    document.querySelector('#passwordlabel').classList.remove('bottom-100')

   }
   if(inputemail.value!==''){
    document.querySelector('#emaillabel').classList.add('bottom-100')

   }else{
    document.querySelector('#emaillabel').classList.remove('bottom-100')

   }

  }

  
  return (
    <div className="contact py-5">
      <div className="pt-5">
        <h1 className="text-center fw-bolder pt-5  ">CONATCT SECTION</h1>
      </div>

      <div class="contact-star-wrapper text-center py-2 position-relative">
        <i class="fa-solid fa-star star"></i>
      </div>
      <div className="container py-5">
        <div className="form pt-4">
          <div className=" form-group  w-50 m-auto  position-relative    mb-5 p-2">
            <p  id="namelabel" className=" position-absolute bottom-0   " >  name is:</p >
          <input onKeyUp={()=>{
            showLabel()
          }} id="name" type="text" placeholder="enter name"className="form-control   position-relative z-3 "  />


          </div>
          <div className=" form-group  w-50 m-auto  position-relative  mb-5   p-2">
            <p  id="agelabel" className=" position-absolute bottom-0   " > Age is:</p >
          <input onKeyUp={()=>{
            showLabel()
          }} id="age" type="text" placeholder="enter age"className="form-control   position-relative z-3 "  />


          </div>
          <div className=" form-group  w-50 m-auto  position-relative  mb-5   p-2">
            <p  id="emaillabel" className=" position-absolute bottom-0   " >  email is:</p >
          <input onKeyUp={()=>{
            showLabel()
          }} id="email" type="text" placeholder="enter age"className="form-control   position-relative z-3 "  />


          </div>
          <div className=" form-group  w-50 m-auto  position-relative  mb-5   p-2">
            <p  id="passwordlabel" className=" position-absolute bottom-0   " >  password is:</p >
          <input onKeyUp={()=>{
            showLabel()
          }} id="password" type="password" placeholder="enter password"className="form-control   position-relative z-3 "  />


          </div>
          <div className="m-auto">
          <button className="btn btn-info d-block m-auto">send message</button>

          </div>
        </div>



      </div>
    </div>
  );
}
