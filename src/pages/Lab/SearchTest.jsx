import React,{useState,useEffect} from 'react'
import {ReactSession} from 'react-client-session'

function SearchTest() {
    const [option,setOption]=useState("")
    const [input,setInput] =useState("")
    const [result,setResult] = useState([])
    const [deleteid,setDeleteid] = useState()
    const account=ReactSession.get("account")
    const id=account._id
    const deletetest =(e) => {
    const deleteid=ReactSession.get("deleteTest")
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var raw = JSON.stringify({
        "_id": deleteid
      });
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch("https://logink123.herokuapp.com/test/delete", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
var raw = "";
var requestOptions = {
  method: 'POST',
  body: raw,
};
useEffect(() =>{
  fetch(`https://logink123.herokuapp.com/test/find?addedBy=${id}&${option}=${input}`, requestOptions)
  .then(response => response.json())
  .then((response) => {
    if (response.success === true) {
      ReactSession.set("drug",response.testFound)
      const drug=ReactSession.get("testFound")
      setResult(response.testFound)
    }
    })
  // .then(data => setResult(data.drug))
})
  return (
    <>
    <div class="form-control">
  <div class="input-group">
      <select class="select select-bordered" onChange={(o) => setOption(o.target.value)}>
      <option disabled selected>option</option>
      <option>testname</option>
      <option>price</option>
    </select>
    <input type="text" placeholder="Search…" class="input input-bordered"
              onChange={(e) => setInput(e.target.value)}
              />
    <button class="btn btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
  <br />
  <div>
  <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-center">
          <thead class="border-b">
            <tr>
            <th colSpan={3} class="text-sm text-gray-900 font-medium px-12 py-4 whitespace-nowrap">
                Test_id
              </th>
              <th class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                TestName
              </th>
             <th class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                Price
              </th>
              <th class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                Edit
              </th><th class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                Delete
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  </div>
</div>
  {
                  result.map((curElem) => {
                    return(
                      <div>
                         <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-center">
        <tbody>                  
        <tr class="border-b bg-green-100 border-green-200">
        <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
              {curElem._id} </td>
        <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
              {curElem.testname} </td>
<td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
{curElem.price} </td>
<td class="text-sm text-gray-900 font-medium px-4 py-4 whitespace-nowrap">
   <a href="/Lab/Labinventory/UpdateTest" onMouseEnter={(e) => ReactSession.set("updateTest",curElem._id)}>
 <button className='btn btn-secondary  mt-10' >Update</button></a> </td>
 {
 ReactSession.set("drug_id",)}
 <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap"><a>
<button className='btn mt-10'              
onMouseEnter={(e) => ReactSession.set("deleteTest",curElem._id)} 
 onClick={(() =>{setDeleteid(ReactSession.get("deleteTest"))
deletetest()})}>Delete</button> </a> </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  </div>
 </div>
                    )
                  })
        }
  </div>
</div>
    </>
  )
}
export default SearchTest