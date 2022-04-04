import React,{useState} from 'react'
import { ReactSession } from 'react-client-session'
import {useEffect} from 'react'
import Navbar from './Navbar'


function Update() {
    const [name,setName]=useState("");
    // const [dateofbirth,setDateofbirth]=useState("");
    const [email,setEmail]=useState("");
    const [mobile,setMobile]=useState("");
    const [city,setCity]=useState("");
    const [state,setState]=useState("");
    const [role,setRole]=useState("");
    const temp = ReactSession.get("token")

    
    const updateProfile = (e) => {
        e.preventDefault();
        const url="https://logink123.herokuapp.com/user/update"
        const options = {
          method: 'PUT',
          body: JSON.stringify({
              fullname: name,
            //   email:email,
            //   mobile:mobile,
            //   address:{
            //       city:city,
            //       state:state
            //   },
              role:"pharmacy"
             
          }),
          headers: {
              'Content-Type': 'application/json',
              Authorization: "Bearer " + 'Bearer '.concat(temp), 
          },
          
      }
    
      const fetchprofile= async() => {
      const response= await fetch(url,options)
       const data=await response.json()
       console.log(data)  
      }
      fetchprofile();
      console.log(temp)

    }
  return  (
    <>
    <Navbar />
    <div className=" h/1.5-screen flex justify-center mt-0 pt-0 text-center">
      <div class="card bg-base-100  items-center flex justify-center h-screen text-center w-1/2 registerdiv">
        <figure class="px-10">
          <h1>UPDATE PROFILE</h1>

        </figure>



        <div class="card-body items-center text-center  shadow-xl">
          <table>
            <tr>
              <td>FullName:</td>
              <td>
              <input
            type="text"
            autoComplete="off"
            // onChange={(e) => setPassword(e.target.value)}
            id="fullname"
            placeholder="fullname"
            className="w-full pr-40 bg-gray-200 input input-xlg text-black"
          />
              </td>
            </tr>
            <tr>
              <td>Mobile No:</td>
              <td>
              <input
            type="number"
            autoComplete="off"
            // onChange={(e) => setPassword(e.target.value)}
            id="Mobile"
            placeholder="Mobile"
            className="w-full pr-40 bg-gray-200 input input-xlg text-black"
          />
              </td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>
              <input
            type="text"
            autoComplete="off"
            // onChange={(e) => setPassword(e.target.value)}
            id="email"
            placeholder="Email"
            className="w-full pr-40 bg-gray-200 input input-xlg text-black"
          />
          
              </td>
            </tr>
            <tr>
              <td>Address:</td>
              <td>
              <input
            type="text"
            autoComplete="off"
            // onChange={(e) => setPassword(e.target.value)}
            id="Address"
            placeholder="Address"
            className="w-full pr-40 bg-gray-200 input input-xlg text-black"
          />
              </td>
            </tr>
            <tr>
              <td>Open Time:</td>
              <td>
              <input
            type="Date"
            autoComplete="off"
            // onChange={(e) => setPassword(e.target.value)}
            id="OpenTime"
            placeholder="OPen Time"
            className="w-full pr-40 bg-gray-200 input input-xlg text-black"
          />
          
              </td>
            </tr>
            <tr>
              <td>Open Time:</td>
              <td>
              <input
            type="Date"
            autoComplete="off"
            // onChange={(e) => setPassword(e.target.value)}
            id="OpenTime"
            placeholder="Open Time"
            className="w-full pr-40 bg-gray-200 input input-xlg text-black"
          />
              </td>
            </tr>
          </table>
          <button className="btn btn-secondary" >Update</button>
        </div>
      </div>
      </div>
    </>
  )
}

export default Update