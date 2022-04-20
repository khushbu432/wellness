import React,{useState,useEffect} from 'react'
import {ReactSession} from 'react-client-session'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

  function Updatemedicine() {
const [result,setResult] = useState([]);
    const [company,setCompany]=useState(result.company);
    const [price,setPrice]=useState(result.price);
    const [power,setPower]=useState(result.power);
    const [quantity,setQuantity]=useState(result.quantity);
    const navigate = useNavigate()

    const id=ReactSession.get("updatedrug");
    const update = (e) => {
      e.preventDefault();
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      
      var raw = JSON.stringify({
        "_id": id,
        "company":company,
        "price":price,
        "power":power,
        "quantity": quantity
      });
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch("https://logink123.herokuapp.com/drug/update", requestOptions)
        .then(response => response.json())
        .then((res) => {
          if (res.succes === true) {
            alert("Drug updated Successfully")
            navigate('../Medical/Medinventory', { replace: true })
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
    
    fetch(`https://logink123.herokuapp.com/drug/findDrug?_id=${id}`, requestOptions)
      .then(response => response.json())
      .then(result => setResult(result.data[0]))
      .catch(error => console.log('error', error));
  })
  return (
    <>
    <Navbar />
     <div class="card w-120 bg-base-100 mt-20 shadow-xl registerdiv">
        <figure class="px-10 pt-10 pb-10">
            <div class="text-3xl">
              UPDATE MEDICINE
            </div>
        </figure>
        <div class="card-body text-center">
          <div className='text-left ml-3'>
            DrugName:
          </div>
          <input
            type="text"
            autoComplete="off"
            id="drugname"
            value={result.drugName}
            className="w-full pr-40 bg-gray-200 input input-xlg text-black"
          />
           <div className='text-left ml-3'>
            Company:
          </div>
          <input
            type="text"
            autoComplete="off"
            onChange={(e) => setCompany(e.target.value)}
            id="company"
            value={company}
            className="w-full pr-40 bg-gray-200 input input-xlg text-black"
            placeholder={result.company}
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
           <div className='text-left ml-3'>
            Power:
          </div>
          <input
            type="text"
            autoComplete="off"
            onChange={(e) => setPower(e.target.value)}
            id="power"
            value={power}
            className="w-full pr-40 bg-gray-200 input input-xlg text-black"
            placeholder={result.power}
          />
           <div className='text-left ml-3'>
            Level:
          </div>
          <input
            type="number"
            autoComplete="off"
            id="level"
            value={result.level}
            className="w-full pr-40 bg-gray-200 input input-xlg text-black"
          />
           <div className='text-left ml-3'>
            Quantity:
          </div>
          <input
            type="number"
            autoComplete="off"
            onChange={(e) => setQuantity(e.target.value)}
            id="quantity"
            value={quantity}
            className="w-full pr-40 bg-gray-200 input input-xlg text-black"
            placeholder={result.quantity}
          />


         
          <br />
         
        <div className='items-center'>
        <button className="btn btn-primary" onClick={update}>UPDATE</button>
        </div>
        </div>
      </div>
    </>
  )
}

export default Updatemedicine
