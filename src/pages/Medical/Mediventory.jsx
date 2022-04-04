import React from 'react'
import {FaSearch} from 'react-icons/fa'
import Fetchorder from './Fetchorders'
import Navbar from './Navbar'
import Search from './Searchmedicine'

function Inventory() {
  return (
    <>
    <Navbar />
    <div className="flex">
    <div className='flex-1 ml-20 px-5 pt-7'>
      <Search />
   </div> 

   {/* <div className="flex-1 ml-20  px-5 pt-7" >
      <ul>
        <li><h4>All orders</h4></li>
        <li>
          <Fetchorder />
        </li>
        
      </ul>
    </div> */}

    <div className="flex-1 ml-20 px-5 pt-7">
       <a href='./Medinventory/Addmedicine'>
     <button className="btn btn-primary">Add Medicine</button>
     </a>
     </div>
   </div> 
   
    
  </>
  )
}

export default Inventory