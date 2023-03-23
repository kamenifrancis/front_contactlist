import React, { useEffect } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import { updateContact,lectureContactUnique } from '../api/ContactApi'
import { useState } from 'react'

function UpdateContact() { 
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [age,setAge] = useState('')
  const navigator = useNavigate()
const {id}=useParams()



  const update=async(values,idg)=>{
    await updateContact(values,idg)
    navigator('/list') 


   
  
  }
  
  return (
    <div>
      <form >

  <div >
    <label  >email</label><br />
    <input  type="text"  placeholder='emaail' value={email} onChange={(e)=>setEmail(e.target.value)  } size="30" /><br />
    <span></span>
  </div>
  <div>
    <label  >name</label><br />
  <input  type="text" placeholder='Name' value={name}  onChange={(e)=>setName(e.target.value)  } size="30" /><br />
    <span ></span>
  </div> 
  <div>
    <label >age</label><br />
  <input  type="text" placeholder='age' value={age} onChange={(e)=>setAge(e.target.value)  } size="30" /><br />
    <span ></span>
  </div>
    
    <a><button type="button" onClick={()=>update(id,{name,age,email})}  >add new contact</button></a>
</form>
    </div>
  )
}

export default UpdateContact
