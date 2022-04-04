import React from 'react'
// import {FaSearch} from 'react-icons/fa'
// import Fetchorder from './Fetchorders'
import Navbar from './Navbar'
import Search from './SearchTest'

function Inventory() {
  return (
    <>
    <Navbar />
    <div className="flex">
    <div className='flex-1 ml-20 px-5 pt-7'>
      <Search />
   </div> 
    <div className="flex-1 ml-20 px-5 pt-7">
       <a href='./Labinventory/AddTest'>
     <button className="btn btn-primary">Add Test</button>
     </a>
     </div>
   </div> 
   
    
  </>
  )
}

export default Inventory