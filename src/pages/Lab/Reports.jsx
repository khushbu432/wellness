import React,{useState,useEffect} from 'react'
import {ReactSession} from 'react-client-session'
import Navbar from './Navbar'

function Reports() {
  const [appointment,setAppointment]=useState("")
  const [field1,setField1]=useState("");
  const [field2,setField2]=useState("");
  const [field3,setField3]=useState("");
// const temp = ReactSession.get("token")
const account=ReactSession.get("account")
const id=account._id
  const add = (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "_id":appointment ,
  "laboratory_id": id,
  "field1": field1,
  "field2": field2,
  "field3": field3
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://logink123.herokuapp.com/appoinment/report", requestOptions)
  .then(response => response.json())
  .then(result => {
    if(result.succes === true){
      alert("Report Generated Successfully")
      console.log(result)
    }
  })
  .catch(error => console.log('error', error));
}
useEffect(()=> {
  const orderid=ReactSession.get("report")
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
  .then(result => setAppointment(result.foundOrder[0].appoinment_id[0]))
  .catch(error => console.log('error', error));
}) 
  return (
    <>
        <Navbar />
        <div className='h-screen'>
      <div class="card w-120 bg-base-100 mt-20 shadow-xl registerdiv ">
        <figure class="px-10 pt-10 pb-10">
            <div class="text-3xl">
              Reports
            </div>
        </figure>
        <div class="card-body text-center">
          <div className='text-left ml-3'>
            Field 1:
          </div>
          <input
            type="text"
            autoComplete="off"
            onChange={(e) => setField1(e.target.value)}
            id="field1"
            placeholder="Field1"
            className="w-full pr-40 bg-gray-200 input input-xlg text-black"
            value={field1}
          />
           <div className='text-left ml-3'>
            Field 2:
          </div>
          <input
            type="text"
            autoComplete="off"
            onChange={(e) => setField2(e.target.value)}
            id="field2"
            placeholder="Field2"
            className="w-full pr-40 bg-gray-200 input input-xlg text-black"
            value={field2}
          />
           <div className='text-left ml-3'>
            Field 3:
          </div>
          <input
            type="text"
            autoComplete="off"
            onChange={(e) => setField3(e.target.value)}
            id="field3"
            placeholder="Field3"
            className="w-full pr-40 bg-gray-200 input input-xlg text-black"
            value={field3}
          />
          <br />
         
        <div className='items-center'>
        <button className="btn btn-primary" onClick={add}>ADD</button>
        </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Reports