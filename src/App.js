
import './App.css';
import Navbar from './components/Navbar';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';
import UpdateContact from './components/UpdateContact';
import './frontend.css'
import {Routes,Route} from 'react-router-dom'
import HomePage from './components/HomePage'; 
import './contact.css'
function App() {
  return (
    <div className="App">
   <Navbar/> 

   <Routes>
    <Route path={"/"} element={<HomePage/>} />
    <Route path={"/list"} element={<ContactList/>} />
    <Route path={"/add"} element={<AddContact/>} />
    <Route path={"/update/:id"} element={<UpdateContact/>} /> 
   </Routes>
   
    </div>
  );
}

export default App;
 