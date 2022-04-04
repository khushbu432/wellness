import React,{useState} from 'react'
import { ReactSession } from 'react-client-session'
function MedNewOrder() {
  const [drugs,setDrugs]=useState("");
  const [quantity,setQuantity]=useState("");
    const patient=ReactSession.get("patient")
  return (
      <>
         <form className='border bg-blue-400 ml-auto mr-auto  w-1/2 text-center text-2xl pt-10 pb-20 pl-10 pr-10'>
    <table className="">
        <th className='mb-10 text-3xl text-bold pt-10 pb-10' colSpan={6}>Add Order</th>
        <tr className='pb-10' >
          <td className="text-left" colSpan={3}>Drugs  :</td>
          <td colSpan={3}>
          <input className='border px-4' type="text" name="Drugname" id="Drugname" autoComplete='off'
                value={drugs}
                onChange={(e) => setDrugs(e.target.value)} required />
          </td>
        </tr>
          <tr className='pt-5 pb-5' >
          <td className="text-left" colSpan={3}>Quantity: </td>
          <input className='border px-4' type="text" name="Company" id="Company" autoComplete='off'
                value={quantity}
                onChange={(p) => setQuantity(p.target.value)} required/>
        </tr>
  
    </table>
      </form>
      </>
  )
}

export default MedNewOrder