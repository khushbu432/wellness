import React,{useState} from 'react'
import {ReactSession} from 'react-client-session'

  function Updatemedicine() {
    const [drugname,setDrugname]=useState("");
    const [company,setCompany]=useState("");
    const [price,setPrice]=useState();
    const [power,setPower]=useState("");
    const [level,setLevel]=useState("");

    const id=ReactSession.get("updatedrug");

    const add = (e) => {
      e.preventDefault();
        const url="https://logink123.herokuapp.com/drug/update"
        const options={
            method:'POST',
            body:JSON.stringify({
              _id:id,
                drugName:drugname,
                company:company,
                price:price,
                power:power,
                level:level
            })
        }
    const fetchuser= async() => {
        const response= await fetch(url,options)
        console.log(options)
         const data=await response.json()
         console.log(data)  
        }
        fetchuser();

  }
  return (
    <>
      <form className='border bg-blue-400 ml-auto mr-auto  w-1/2 text-center text-2xl pt-10 pb-20 pl-10 pr-10'>
    <table className="">
        <th className='mb-10 text-3xl text-bold pt-10 pb-10' colSpan={6}>Update Medicine</th>
        <tr className='pb-10' >
          <td className="text-left" colSpan={3}>Drugname</td>
          <td colSpan={3}>
          <input className='border px-4' type="text" name="Drugname" id="Drugname" autoComplete='off'
                value={drugname}
                onChange={(e) => setDrugname(e.target.value)} required />
          </td>
        </tr>
          <tr className='pt-5 pb-5' >
          <td className="text-left" colSpan={3}>Comany </td>
          <input className='border px-4' type="text" name="Company" id="Company" autoComplete='off'
                value={company}
                onChange={(p) => setCompany(p.target.value)} required/>
        </tr>
        <tr className='pt-5 pb-5' >
        <td className="text-left" colSpan={3}>Price </td>
        <td colSpan={3}>
          <input className='border px-4' type="number" name="Price" id="Price" autoComplete='off'
                value={price}
                onChange={(p) => setPrice(p.target.value)} required/>
          </td>
        </tr>

        <tr className='pt-5 pb-5' >
        <td className="text-left"  colSpan={3}>Power </td>
        <td>
          <input className='border px-4' type="text" name="Power" id="Power" autoComplete='off'
                value={power}
                onChange={(p) => setPower(p.target.value)} required/>
          </td>
        </tr>
          <tr className='pt-5 pb-5' >
          <td className="text-left" colSpan={3}>Level </td>
          <td  colSpan={3}>
          <input className='border px-4' type="number" name="Level" id="Level" autoComplete='off'
                value={level}
                onChange={(r) => setLevel(r.target.value)} required/>
          </td>
        </tr>
        <tr className="pt-0">
          <td colSpan={6} className='pt-10 pb-10'>
        <button  className="btn" onClick={add}>Update</button>
        </td>
        </tr>
    </table>
      </form>
    </>
  )
}

export default Updatemedicine