import React from 'react';
import {useEffect} from 'react'
import {ReactSession} from 'react-client-session'
// import Footer from '../components/layout/Footer'
import {useState} from 'react'
import Navbar from './Navbar'
// import { Link } from 'react-router-dom'


function PatHome() {
  const temp = ReactSession.get("token")
  const [result, setResult] = useState("")
  
    const [string,setString]= useState("https://api.lorem.space/image/face?hash=8877")
  const url = '/PatientHome'
  const profileurl = '/PatientHome/Profile'
  const [role, setRole] = useState("doctor")
  const [text, setText] = useState("")

  useEffect(()=>{
    
  fetch("https://logink123.herokuapp.com/user/findByFullname", {
    method: "POST",
    body: JSON.stringify({
      fullname: "manthandeo",
      role: role
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((report) => report.json())
    .then((report) =>setResult(report.user))
  })

 
  return (

    
    <>
<div className='flex flex-col justify-between h-screen'>
      <Navbar />
        <main className='container mx-auto px-3 pb-12'> 

        {/* <Search/> */}
         

<div className='grid grid-cols-1 xl:grid-cols-1 lg:grid-cols-1  md:grid-cols-1 mb-8 gap-8'>
        <div class="w-3/6 m-auto" >
          <div class="form-control ">
            <div class="input-group ">
              <select class="select select-bordered" onChange={(e) => setRole(e.target.value)}>
                <option value='doctor' selected>Doctor</option>
                <option value='pharmacy'>pharmacy</option>
                <option value='lab'>Lab</option>

              </select>
              <input type="text" placeholder="Search…" onChange={(e) => setText(e.target.value)} class="input w-full rounded-l input-bordered" value={text} />
              <button class="btn btn-square">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
            </div>
          </div>
        </div>
        <hr />  {/* partition */}
        <div>
         <div>
           </div> 
          {
            result.map((curElem) => {
              return (
                  <div className='card w-3/6 m-auto mt-5 shadow-md compact side bg-base-100'>
                    <div className="flex-row items-center space-x-4 card-body">
                      <div>
                        <div className="avatar">
                          <div className="rounded-full shadow w-14 h-14">
                            <img src="https://api.lorem.space/image/face?hash=8877" alt="profile" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <h2 className="card-title">
                          {curElem.fullname}
                        </h2>
                        <h2 className="card-title">
                          {curElem.speciality}
                        </h2>
                        <h2 className="card-title">
                          {curElem.username}
                        </h2>
                        
                      </div>
                    </div>
                  </div>
              )
            })
          }
          
        </div>
      </div>
        </main>
        </div> 
    </>
  )

}

export default PatHome