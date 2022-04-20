import React,{useState,useEffect} from 'react'
import {ReactSession} from 'react-client-session'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

  function UpdateTest() {
    const [result,setResult]=useState([]);
    const [price,setPrice]=useState();
  const navigate = useNavigate()
  const id=ReactSession.get("updateTest")
    const update = (e) => {
      e.preventDefault();
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      
      var raw = JSON.stringify({
        "_id": id,
        "price": price
      });
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch("https://logink123.herokuapp.com/test/update", requestOptions)
        .then(response => response.json())
        .then((res) => {
          if (res.success === true) {
            alert("Test Added Successfully")
            navigate('../Lab/Labinventory', { replace: true });

          }
        })
        .catch(error => console.log('error', error));
  }
  useEffect(() => {
    var raw = "";

    var requestOptions = {
      method: 'POST',
      body: raw,
      redirect: 'follow'
    };
    
    fetch(`https://logink123.herokuapp.com/test/find?_id=${id}`, requestOptions)
      .then(response => response.json())
      .then(result => setResult(result.testFound[0]))
      .catch(error => console.log('error', error));
  })
  return (
    <>
    <Navbar />
    <div className='h-screen'>
      <div class="card w-120 bg-base-100 mt-20 shadow-xl registerdiv ">
        <figure class="px-10 pt-10 pb-10">
            <div class="text-3xl">
              UPDATE TEST
            </div>
        </figure>
        <div class="card-body text-center">
          <div className='text-left ml-3'>
            TestName:
          </div>
          <input
            type="text"
            autoComplete="off"
            id="testname"
            value={result.testname}
            className="w-full pr-40 bg-gray-200 input input-xlg text-black"
          />
           <div className='text-left ml-3'>
            Price:
          </div>
          <input
            type="number"
            autoComplete="off"
            onChange={(e) => setPrice(e.target.value)}
            id="price"
            value={price}
            className="w-full pr-40 bg-gray-200 input input-xlg text-black"
            placeholder={result.price}
          />
        
          <br />
         
        <div className='items-center'>
        <button className="btn btn-primary" onClick={update}>UPDATE</button>
        </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default UpdateTest