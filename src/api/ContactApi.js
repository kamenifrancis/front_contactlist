import axios from 'axios' 



export const lectureContactAll= async()=>{
    const {data} = await axios.get('http://localhost:4002/contact/')
    return data

}
export const lectureContactUnique = async(id)=>{
    const {data} = await axios.get(`http://localhost:4002/contact/${id}` )

} 

export const addContact = async(values)=>{
    const addContact = await axios.post('http://localhost:4002/contact/addContact', {...values})
}

export const updateContact = async(values,id)=>{
    const updateContact = await axios.put((`http://localhost:4002/contact/${id}`,values))
}

export const deleteContact = async(id)=>{
    const delet = await axios.delete(`http://localhost:4002/contact/${id}`)
  }