import React from 'react'
import { NavLink } from 'react-router-dom'


function sidebar() {
  return (
    <div className='sidebar'>

     <div className='logo'>

     <img src='http://envato.rathemes.com/infinity/assets/images/index/infinity-logo.png' alt=''  />
     
     </div>
     <div className='list'>

      <ul>
        <li>
            <NavLink to={"/"}>Dashboard</NavLink>
        </li>
        <li>
            <NavLink to={"/products"}>Products</NavLink>
        </li>
        <li>
            <NavLink to={"/products/add"}>Add Product</NavLink>
        </li>
      
        </ul>
  

        




     </div>

    </div>
  )
}

export default sidebar