import React from 'react'
import Search from './Searchorder'
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
  // console.log(temp[0].parentNode);
}

function Medhome() {
  return (
    <>
    <Navbar />
    <div>
    {/* <div className="form-control mx-20" >
    <div className="input-group">
      {/* <input type="text" placeholder="Search…" class="input input-bordered" />
      <button className="btn btn-square text-xl">
        <FaSearch /> 
  </button> 
      
    </div>
    </div> */} 
    <div className="flex">
   
     <div className='flex-1 ml-10  pt-7'>
       <Search />
     </div>
     <div className="flex-1 ml-10  pt-7" >
        <ul>
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
        </ul>
      </div>
     </div>
  </div>
  </>
  )
} 

export default Medhome