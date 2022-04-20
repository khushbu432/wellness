import React from 'react'
import Searchorder from './Searchorder'
import Completeorder from './Completeorder'
import Navbar from './Navbar'

function Labhome() {
  return (
    <>
    <Navbar />
    <div className='h-screen'> 
    <div className="flex">
   
     <div className='fslex-1 ml-10  pt-7'>
       <Searchorder />
     </div>
     <div className="flex-1 ml-10 pt-7" >
       <Completeorder />
      </div>
     </div>
  </div>
  </>
  )
} 

export default Labhome