import React from 'react'
import {Navigate} from 'react-router-dom'

function Test() {
    const val="true";
    if(val){
        
    }
  return (
    <div>
        <button className='btn' onclick={<Navigate to='http://localhost:3000/Inventory' />}>Navigate</button>
    </div>
  )
}

export default Test