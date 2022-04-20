import React from 'react'
import Search from './Searchorder'
import Completeorder from './Completeorder';
import Navbar from './Navbar'

function remove() {
  let temp=document.getElementsByClassName("remove");
  for(let i=0;i<temp.length;i++)
  {
     temp[i].onclick=function(){
         let del=temp[i];
         del.style.display="none";
     }
  }
}

function Medhome() {
  return (
    <>
    <Navbar />
    <div className='h-screen'>
    <div className="flex">
   
     <div className='flex-1 ml-10  pt-7'>
       <Search />
     </div>
     <div className="flex-1 ml-10  pt-7" >
        {/* <ul>
          <li className="remove text-xl">
            xyz <button className='btn btn-primary mt-10' id="currentOrder" onClick={remove}>complete</button>
          </li>
          <li className="remove text-xl">
            xyz <button className='btn btn-primary mt-10' id="currentOrder" onClick={remove}>complete</button>
          </li>
          <li className="remove text-xl">
            xyz <button className='btn btn-primary mt-10' id="currentOrder" onClick={remove}>complete</button>
          </li>
          <li className="remove text-xl">
            xyz <button className='btn btn-primary mt-10' id="currentOrder" onClick={remove}>complete</button>
          </li>
        </ul> */}
          <Completeorder />
      </div>
     </div>
  </div>
  </>
  )
} 

export default Medhome