import React,{useState,useEffect} from 'react'
import { ReactSession } from 'react-client-session'
import { Link } from 'react-router-dom'

const Completeorder = () => {
    const [order,setOrder] = useState([]) 
    const account=ReactSession.get("account")
    const id=account._id
    const complete = () => {

    } 
  useEffect(() =>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = ""
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch(`https://logink123.herokuapp.com/order/find?laboratory_id=${id}`, requestOptions)
      .then(response => response.json())
      .then(result => setOrder(result.foundOrder))
      .catch(error => console.log('error', error));
  })
  return (
      <>
      
    
              
                <h1 className='text-3xl pb-10 pt-10'>All Pending Orders</h1>
                <table className=" text-center">
          <thead className="border-b">
            <tr>
            <th class="text-sm text-gray-900 font-medium px-14 py-4 whitespace-nowrap">
                Action
              </th>
            <th colSpan={3} class="text-sm text-gray-900 font-medium px-4  py-4 whitespace-nowrap">
                PatientName:
              </th>
             
              <th class="text-sm text-gray-900 font-medium px-8 py-4 whitespace-nowrap">
                TestName
              </th>
              <th class="text-sm text-gray-900 font-medium px-8 py-4 whitespace-nowrap">
                price
              </th>
             </tr>
          </thead>
        </table>
                {
                  order.map((curElem) => {
                    return(
                      <div className='flex'>
                             <table class="text-center">                  
                               <tr class="border-b bg-green-100 border-green-200">
                               <td class="text-sm text-gray-900 font-mediumpy-4 whitespace-nowrap">
               <Link to='./Reports'>            
                  <button className='btn btn-primary' onClick={ReactSession.set("report",curElem._id)} >Generate Report</button>
             </Link>        
             </td> 
             <td class="text-sm text-gray-900 font-medium px-6  py-4 whitespace-nowrap">
              {curElem.patient_id.username} </td>
                        {curElem.test_id.map((elem) =>{
                        return(
                          <div className='flex-1'>
        <td class="text-sm text-gray-900 font-medium  px-8  py-4 whitespace-nowrap">
              {elem.testname} </td>
              <td class="text-sm text-gray-900 font-medium px-12 py-4 whitespace-nowrap">
              {elem.price} </td>
               
                       </div>
                      
                          
                        )
                        })
                      }   
                  </tr>
                  </table>
                  
                      </div>
                    )
                  })
                }
      
      </>
  )
}

export default Completeorder