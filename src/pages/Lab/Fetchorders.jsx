import React,{useState,useEffect} from 'react'
import {ReactSession} from 'react-client-session'
const Fetchorders = () => {
    const [order,setOrder] = useState([])
    const account=ReactSession.get("account")
    const id=account._id
  useEffect(() =>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      // "patient_id": "62339c0c787f4bfc40adf977",
      // "pharmacy_id": "623ad6e85f9467a2d2427dea",
      // "laboratory_id": "623b609ec51383b5d728a24f",
      // "completed": false
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch(`https://logink123.herokuapp.com/order/find?laboratory_id=${id}`, requestOptions)
      .then(response => response.json())
      .then(result => setOrder(result.foundOrder))
      // .then(res => console.log(res))
      .catch(error => console.log('error', error));
  },[])
  return (
      <>
      
    
              <div>
              <h1 className='text-3xl pb-10 pt-10'>All Orders</h1>
                <table className=" text-center">
          <thead className="border-b">
            <tr>
            <th colSpan={3} class="text-sm text-gray-900 font-medium px-4  py-4 whitespace-nowrap">
                PatientName:
              </th>
              <th class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                TestName
              </th>
             
              <th class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                price
              </th>
            </tr>
          </thead>
        </table>
                {
                  order.map((curElem) => {
                    return(
                      <div>
                             <table class="text-center">                  
                               <tr class="border-b bg-green-100 border-green-200">
                               <td class="text-sm text-gray-900 font-medium px-6  py-4 whitespace-nowrap">
              {curElem.patient_id.username} </td>
                        {curElem.test_id.map((elem) =>{
                        return(
                          <div>
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
              </div> 
      
      </>
  )
}

export default Fetchorders