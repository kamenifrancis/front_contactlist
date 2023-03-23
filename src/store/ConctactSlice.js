import { createSlice } from '@reduxjs/toolkit';
import{ v4 as uuidv4} from 'uuid' 
const ContactSlice = createSlice({
name:"contact",
initialState:[
    {
      id:uuidv4(),
     name:"francis",
      age: 22,
      email:'francis@gmail.com'
    },
    {
        id:uuidv4(),
        name:"derick",
         age: 16,
         email: 'derick@gmail.com' 
    }
],
reducers:{
    setContact: (state,action)=>{
        return action.payload
    }
}
}

) 
export const {setContact} = ContactSlice.actions
export default ContactSlice.reducer 