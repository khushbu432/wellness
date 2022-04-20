import React,{useState,useEffect} from 'react'
import {ReactSession} from 'react-client-session'

const Completeorder = () => {
    const [order,setOrder] = useState([])
    const [drugid,setDrugid]=useState([])
    const [quantitydrug,setQuantitydrug]=useState([])
    // const [quantity,setQuantity]=useState()
    // console.log(quantity)

    const account=ReactSession.get("account")
    const id=account._id
    async function fun(){
      for( var i=0;i<quantitydrug.length;i++)
      { 
      const orderid=ReactSession.get("complete")      
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = "";  
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };      
      const response=await fetch(`https://logink123.herokuapp.com/drug/findDrug?_id=${drugid[i]._id}`, requestOptions)
      const result=await response.json()
      if(result.success === true )
      { 
        ReactSession.set("newquantity",(result.data[0].quantity)-(quantitydrug[i]));
        var quantity=ReactSession.get("newquantity")
        console.log(quantity)
       const res=await fetch("https://logink123.herokuapp.com/drug/update",{ method: 'POST',
       headers: myHeaders,
       body:JSON.stringify({
         "_id":drugid[i]._id,
         "quantity":quantity
       }),})
       const data=await res.json()
       const update=await fetch("https://logink123.herokuapp.com/order/completed",{ method:'POST',
       headers:myHeaders,
       body:JSON.stringify({
         "_id":orderid,
         "completed":true
       }),
      })
      const updatedata=await update.json()
      console.log(updatedata)
      }
    }
    }
    const complete = () => {
      const orderid=ReactSession.get("complete")      
      var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = "";

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};
fetch(`https://logink123.herokuapp.com/order/find?_id=${orderid}`, requestOptions)
  .then(response => response.json())
  .then(res =>
    {
    if(res.success===true){
      setDrugid(res.foundOrder[0].drug_id);
      setQuantitydrug(res.foundOrder[0].quantity_drug);
      fun();
      
    }
  })
  .catch(error => console.log('error', error));
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
    
    fetch(`https://logink123.herokuapp.com/order/find?pharmacy_id=${id}&completed=false`, requestOptions)
      .then(response => response.json())
      .then(result => setOrder(result.foundOrder))
      // .then(res => console.log(res))
      .catch(error => console.log('error', error));
  })
  return (
      <>
      
    
              
                <h1 className='text-3xl pb-10 pt-10'>All Pending Orders</h1>
                <table className=" text-center">
          <thead className="border-b">
            <tr>
            <th class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                Action
              </th>
            <th colSpan={3} class="text-sm text-gray-900 font-medium px-4  py-4 whitespace-nowrap">
                PatientName:
              </th>
             
              <th class="text-sm text-gray-900 font-medium px-8 py-4 whitespace-nowrap">
                DrugName
              </th>
              <th class="text-sm text-gray-900 font-medium px-8 py-4 whitespace-nowrap">
                company
              </th>
              <th class="text-sm text-gray-900 font-medium px-8 py-4 whitespace-nowrap">
                price
              </th>
              <th class="text-sm text-gray-900 font-medium px-8 py-4 whitespace-nowrap">
                Quantity
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
                  <button className='btn btn-primary' onMouseEnter={ReactSession.set("complete",curElem._id)} onClick={complete}>Complete</button>
             </td> 
             <td class="text-sm text-gray-900 font-medium px-6  py-4 whitespace-nowrap">
              {curElem.patient_id.username} </td>
                        {curElem.drug_id.map((elem) =>{
                        return(
                          <div className='flex-1'>
        <td class="text-sm text-gray-900 font-medium  px-8  py-4 whitespace-nowrap">
              {elem.drugName} </td>
              <td class="text-sm text-gray-900 font-medium  px-8  py-4 whitespace-nowrap">
              {elem.company} </td>
              <td class="text-sm text-gray-900 font-medium px-12 py-4 whitespace-nowrap">
              {elem.price} </td>
               
                       </div>
                      
                          
                        )
                        })
                      }   
                  </tr>
                  </table>
                  <table className=" text-center">
                  {curElem.quantity_drug.map((eleme) =>{
                        return(
                          <>
                               <tr class="border-b bg-green-100 border-green-200">
                          
                       <td class="text-sm text-gray-900 font-medium  px-8  py-4 whitespace-nowrap">
  
                           {eleme} 
                           </td>
        
           </tr>
           </>            
                          
                        )
                        })
                      }
            </table>  
         {/*  <table className=" text-center">
           <tr class="border-b bg-green-100 border-green-200">
                
                  {order.map((action) => {

                    return(
                      <>
                            <td class="text-sm text-gray-900 font-medium px-12 py-4 whitespace-nowrap">
                  <button className='btn btn-primary' onMouseEnter={ReactSession.set("complete",action._id)} onClick={complete}>Complete</button>
             </td> 
             
                      </>
                    )
                  })
                                              
                      
                      }
              </tr>
           </table>     */}
                      </div>
                    )
                  })
                }
      
      </>
  )
}

export default Completeorder