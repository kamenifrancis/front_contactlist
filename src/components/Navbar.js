import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
     
              <ul class="nav-type">
                <li><a class="active"><Link to = '/'> Home page</Link></a></li>
                <li><a class="active1"><Link to = '/list'>list contacts</Link></a></li>
                <li><a class="active2"><Link to = '/add'>add  Contacts</Link></a></li>
                <li><a href="https://w3schools.com/" target="_blank" class="active3">about us</a></li>
                <div class="line"></div>
                <li><a><i class="fa fa-search" onclick="show()">
                  </i></a></li>
              </ul>
            
     

  
  
      
    </div>
  )
}

export default Navbar
