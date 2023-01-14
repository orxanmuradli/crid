import React from 'react'
import {Routes, Route} from "react-router-dom";
import Sidebar from './components/sidebar';
import AddProducts from './pages/AddProduct';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
function App() {
  return (
    <>
       

       <div className='wrapper-container'>
       <Sidebar/>

       <div className='wrapper'>    
       
       <Routes>
        <Route path="/"element={<Dashboard/>}/>
        <Route path="/products"element={<Products/>}/>
        <Route path="/products/add"element={<AddProducts/>}/>
       </Routes>

       </div>
       </div>

    </>
  )
}

export default App