import React,{useState,useEffect} from 'react'
import {FaSearch} from 'react-icons/fa'
import {ReactSession} from 'react-client-session'

function Searchorder() {
  
const [input,setInput] =useState("")
const [result,setResult] = useState([])
const [inputid,setInputid]=useState([])
const account =ReactSession.get("account")
const id=account._id
console.log(input,inputid)

var myHeader = new Headers();
myHeader.append("Content-Type", "application/json");

var Raw = JSON.stringify({
  "username": input,
  "role": "patient"
});

var Options = {
  method: 'POST',
  headers: myHeader,
  body: Raw,
  redirect: 'follow'
};
const search = (e) => {
  e.preventDefault()
  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = "";

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};
fetch(`https://logink123.herokuapp.com/order/find?pharmacy_id=${id}&patient_id=${inputid}`, requestOptions)
  .then(response => response.json())
  .then(result => setResult(result.foundOrder))
  .catch(error => console.log('error', error));
}

useEffect(() =>{

fetch("https://logink123.herokuapp.com/user/findByUsername",Options)
  .then(response => response.json())
  .then(result => setInputid(result.user[0]._id))
  .catch(error => console.log('error', error));
},[input])
 return (
  <>
          <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>

    <form>
          <div className='searchbar form-control'>
          <div className='relative '>
            <input
              type='text'
              className='w-full  input input-lg text-black'
              onChange={(e) => setInput(e.target.value)}
              placeholder='username...'
            />

            <button onClick={search}
              className='absolute top-0 right-0 rounded-l-none w-46 btn text-2xl btn-lg ' >
              <FaSearch />
            </button>

          </div>
          </div>
        </form>
        <br />
        <div>

        <h1 className='text-3xl pb-10 pt-10'>All Orders</h1>
                <table className=" text-center">
          <thead className="border-b">
            <tr>
            <th colSpan={3} class="text-sm text-gray-900 font-medium px-4  py-4 whitespace-nowrap">
                PatientName:
              </th>
              <th class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                TestName
              </th>
             
              <th class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                price
              </th>
              <th class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                Quantity
              </th>
            </tr>
          </thead>
        </table>
                {
                  result.map((curElem) => {
                    return(
                      <div>
                             <table class="text-center">                  
                               <tr class="border-b bg-green-100 border-green-200">
                               <td class="text-sm text-gray-900 font-medium px-6  py-4 whitespace-nowrap">
              {curElem.patient_id.username} </td>
                        {curElem.drug_id.map((elem) =>{
                        return(
                          <div>
        <td class="text-sm text-gray-900 font-medium  px-8  py-4 whitespace-nowrap">
              {elem.drugName} </td>
        <td class="text-sm text-gray-900 font-medium px-12 py-4 whitespace-nowrap">
              {elem.price} </td>
                       </div>
                          
                        )
                        })
                      }
                  </tr>
                  </table>
                      </div>
                    )
                  })
                }
        </div>
        </div>
  </>
)
}


export default Searchorder