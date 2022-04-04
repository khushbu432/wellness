import React from 'react'
import Searchorder from './Searchorder'
import Navbar from './Navbar'
import Fetchorders from './Fetchorders'

function History() {
  
  
  return (
    <>
    
   <Navbar />
    <div className='h-screen'>
    <div className="flex">
   
   <div className="flex-1 ml-10 px-5 pt-7">
        <Searchorder />
   </div> 
   <div className="flex-1 ml-10 px-5 pt-7" >
      <Fetchorders />
    </div>
   </div>   
  </div>
  </>
  )
}

export default History