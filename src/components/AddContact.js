import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addContact } from '../api/ContactApi'
const Addcontact=()=>{
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [age,setAge] = useState('')
  const navigator = useNavigate()
  const handelAdd = async(values)=>{
   try{
    await addContact(values)
    navigator('/list')
   }catch(err){console.log(err)}
  }
  return (
    <div>
    <div id="after_submit"></div>
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
    
    <a><button type="button" onClick={()=>handelAdd({name,age,email})}  >add new contact</button></a>
</form>
    </div>
  )
}

export default Addcontact
