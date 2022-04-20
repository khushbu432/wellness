import React from 'react'
import Searchorder from './Searchorder'
import Navbar from './Navbar'
import Fetchorders from './Fetchorders'

function Labhistory() {
  
  
  return (
    <>
    
   <Navbar />
    <div className='h-screen'>
    <div className="flex">
   
   <div className="flex-1 ml-10 px-5 pt-7">
        <Searchorder />
   </div> 
   <div className="flex-1 ml-10 px-5 pt-7" >
      <ul>
        <li >
        <Fetchorders /> 
        </li>
      </ul>
    </div>
   </div>   
  </div>
  </>
  )
}

export default Labhistory