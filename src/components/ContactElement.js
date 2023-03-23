import React from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteContact } from '../api/ContactApi'
const ContactElement=({contacts})=> { 
  const navigate = useNavigate()
  const handeldelet = async(id)=>{
    await deleteContact(id) 
    navigate('/list') 
  }
const handelUpdat=()=>{
  navigate( `/update/${contacts._id}`)
  
}
console.log('contacts', contacts)
  return (
    <div>
      <div class="card">
  
  <div class="container">
 
  <div class="row">
    <label>Age:{contacts.age}</label>
   <span></span>
    
  </div>
  <div class="row">
    <label>Email:{contacts.email}</label>
    <span></span>
   
  </div>
  <div class="row">
    <label>Adress:{contacts.adress}</label>
    <span></span>
   
    </div> 
    <a href='#'><button  onClick={()=>handelUpdat()}>update</button></a>
    <a href='#'><button onClick={()=>handeldelet(contacts._id)}>delete</button></a>
    
   
  </div>
</div>
    </div>
  )
}

export default ContactElement
