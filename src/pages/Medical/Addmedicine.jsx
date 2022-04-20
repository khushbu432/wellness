import React,{useState} from 'react'
import {ReactSession} from 'react-client-session'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'

  function Addmedicine() {
    const [drugname,setDrugname]=useState("");
    const [company,setCompany]=useState("");
    const [price,setPrice]=useState();
    const [power,setPower]=useState("");
    const [level,setLevel]=useState("");
    const [quantity,setQuantity]=useState();
  const navigate = useNavigate()
  const temp = ReactSession.get("token")
  const account=ReactSession.get("account")
  const addedby=account._id
    const add = (e) => {
      e.preventDefault();
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer" +'Bearer '.concat(temp));
      myHeaders.append("Content-Type", "application/json");
      
      var raw = JSON.stringify({
        "addedBy": addedby,
        "drugName": drugname,
        "company": company,
        "price": price,
        "power": power,
        "level": level,
        "quantity":quantity
      });
      console.log(raw)
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch("https://logink123.herokuapp.com/drug/insert", requestOptions)
        .then(response => response.json())
        .then((res) => {
          if (res.success === true) {
            alert("Drug Added Successfully")
            navigate('../Medical/Medinventory', { replace: true })
          }
        })
        .catch(error => console.log('error', error));
  }
  return (
    <>
    <Navbar />
      <div class="card w-120 bg-base-100 mt-20 shadow-xl registerdiv">
        <figure class="px-10 pt-10 pb-10">
            <div class="text-3xl">
              ADD MEDICINE
            </div>
        </figure>
        <div class="card-body text-center">
          <div className='text-left ml-3'>
            DrugName:
          </div>
          <input
            type="text"
            autoComplete="off"
            onChange={(e) => setDrugname(e.target.value)}
            id="drugname"
            placeholder="DrugName"
            className="w-full pr-40 bg-gray-200 input input-xlg text-black"
            value={drugname}
          />
           <div className='text-left ml-3'>
            Company:
          </div>
          <input
            type="text"
            autoComplete="off"
            onChange={(e) => setCompany(e.target.value)}
            id="company"
            placeholder="Company"
            className="w-full pr-40 bg-gray-200 input input-xlg text-black"
            value={company}
          />
           <div className='text-left ml-3'>
            Price:
          </div>
          <input
            type="number"
            autoComplete="off"
            onChange={(e) => setPrice(e.target.value)}
            id="price"
            placeholder="Price"
            className="w-full pr-40 bg-gray-200 input input-xlg text-black"
            value={price}
          />
           <div className='text-left ml-3'>
            Power:
          </div>
          <input
            type="text"
            autoComplete="off"
            onChange={(e) => setPower(e.target.value)}
            id="power"
            placeholder="Power"
            className="w-full pr-40 bg-gray-200 input input-xlg text-black"
            value={power}
          />
           <div className='text-left ml-3'>
            Level:
          </div>
          <input
            type="number"
            autoComplete="off"
            onChange={(e) => setLevel(e.target.value)}
            id="level"
            placeholder="Level"
            className="w-full pr-40 bg-gray-200 input input-xlg text-black"
            value={level}
          />
           <div className='text-left ml-3'>
            Quantity:
          </div>
          <input
            type="number"
            autoComplete="off"
            onChange={(e) => setQuantity(e.target.value)}
            id="quantity"
            placeholder="Quantity"
            className="w-full pr-40 bg-gray-200 input input-xlg text-black"
            value={quantity}
          />


         
          <br />
         
        <div className='items-center'>
        <button className="btn btn-primary" onClick={add}>ADD</button>
        </div>
        </div>
      </div>
    </>
  )
}

export default Addmedicine