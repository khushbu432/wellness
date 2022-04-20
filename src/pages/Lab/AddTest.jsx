import React,{useState} from 'react'
import {ReactSession} from 'react-client-session'
import {useNavigate} from 'react-router-dom';
import Navbar from './Navbar';

  function AddTest() {
    const [test,setTest]=useState("");
    const [price,setPrice]=useState();
  const navigate = useNavigate()
  // const temp = ReactSession.get("token")
  const account=ReactSession.get("account")
  const id=account._id
    const add = (e) => {
      e.preventDefault();
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      
      var raw = JSON.stringify({
        "addedBy": id,
        "testname": test,
        "price": price
      });
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch("https://logink123.herokuapp.com/test/insert", requestOptions)
        .then(response => response.json())
        .then((res) => {
          if (res.success === true) {
            alert("Test Added Successfully")
            navigate('../Lab/Labinventory', { replace: true });

          }
        })
        .catch(error => console.log('error', error));
  }
  return (
    <>
    <Navbar />
     <div className='h-screen'>
      <div class="card w-120 bg-base-100 mt-20 shadow-xl registerdiv ">
        <figure class="px-10 pt-10 pb-10">
            <div class="text-3xl">
              ADD TEST
            </div>
        </figure>
        <div class="card-body text-center">
          <div className='text-left ml-3'>
            TestName:
          </div>
          <input
            type="text"
            autoComplete="off"
            onChange={(e) => setTest(e.target.value)}
            id="testname"
            placeholder="Testname"
            className="w-full pr-40 bg-gray-200 input input-xlg text-black"
            value={test}
          />
           <div className='text-left ml-3'>
            Price:
          </div>
          <input
            type="text"
            autoComplete="off"
            onChange={(e) => setPrice(e.target.value)}
            id="price"
            placeholder="price"
            className="w-full pr-40 bg-gray-200 input input-xlg text-black"
            value={price}
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

export default AddTest