import React,{useState} from 'react'
import {ReactSession} from 'react-client-session'
import { useNavigate } from 'react-router-dom';

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
      <form className='border bg-blue-400 ml-auto mr-auto  w-1/2 text-center text-2xl pt-10 pb-20 pl-10 pr-10'>
    <table className="ml-20">
        <th className='mb-10 text-3xl text-bold pt-10 pb-10' colSpan={6}>Add Medicine</th>
        <tr className='pb-10' >
          <td className="text-left" colSpan={3}>Test :</td>
          <td colSpan={3}>
          <input className='border px-4' type="text" name="test" id="test" autoComplete='off'
                value={test}
                onChange={(e) => setTest(e.target.value)} required />
          </td>
        </tr>
        <tr className='pt-5 pb-5' >
        <td className="text-left" colSpan={3}>Price : </td>
        <td colSpan={3}>
          <input className='border px-4' type="number" name="Price" id="Price" autoComplete='off'
                value={price}
                onChange={(p) => setPrice(p.target.value)} required/>
          </td>
        </tr>
        <tr className="pt-0">
          <td colSpan={6} className='pt-10 pb-10'>
        <button  className="btn" onClick={add}>Add</button>
        </td>
        </tr>
    </table>
      </form>
    </>
  )
}

export default AddTest