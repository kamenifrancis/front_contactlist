import React, { useEffect } from 'react'
import ContactElement from './ContactElement' 
import { useDispatch,useSelector } from 'react-redux'
import { lectureContactAll } from '../api/ContactApi' 
import {setContact} from '../store/ConctactSlice'

const ContactList=()=>{ 
  const Contacts = useSelector(state=>state.contact) 
  const dispatch = useDispatch()
  console.log('contact issu de redux', ContactList )

  const getAll=async()=>{
    const data = await lectureContactAll() 
   console.log('data', data.contact)
   dispatch(setContact( data.contact))
  } 
  useEffect(()=>{
    getAll()
  },[] )
  return (
    <div> {  
      Contacts.map( (e)=>  <ContactElement contacts = {e}/>)   
  } 
    </div> 
    
  )
}


export default ContactList

