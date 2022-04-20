import React from 'react';
import { useEffect } from 'react'
import { ReactSession } from 'react-client-session'
// import Footer from '../components/Footer'
import { useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { FaCartPlus, FaPlusCircle } from 'react-icons/fa'

function PatHome() {
  const temp = ReactSession.get("token")
  const patid = ReactSession.get("patid")
  const [result, setResult] = useState("")
  const navigate = useNavigate()
  const [string, setString] = useState("https://api.lorem.space/image/face?hash=8877")
  const url = '/PatientHome'
  const profileurl = '/PatientHome/Profile'
  const [role, setRole] = useState("doctor")
  const [user, setUser] = useState("")
  const [text, setText] = useState("")
  const [usernam, setUsernam] = useState("")

  
  const searchtext = () => {
    fetch("https://logink123.herokuapp.com/user/findByFullname", {
      method: "POST",
      body: JSON.stringify({
        fullname: text,
        role: role
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((report) => report.json())
      .then((report) => {
        // console.log('report', JSON.stringify(report, null, 2))
        setResult(report.user)
        if (report.user.length === 0) {
          // Checking username
          fetch("https://logink123.herokuapp.com/user/findByUsername", {
            method: "POST",
            body: JSON.stringify({
              username: text,
              role: role
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }).then((report) => report.json())
            .then((report) => {
              // console.log('report', JSON.stringify(report, null, 2))
              setResult(report.user)
              if (report.user.length === 0) {
                fetch("https://logink123.herokuapp.com/user/findByCity", {
                  method: "POST",
                  body: JSON.stringify({
                    "city": text,
                    "role": role
                  }),
                  headers: {
                    "Content-Type": "application/json",
                  },
                }).then((report) => report.json())
                  .then((report) => {
                    // console.log('report', JSON.stringify(report, null, 2))
                    setResult(report.user)
                    if (report.user.length === 0) {
                      // check city
                      fetch("https://logink123.herokuapp.com/user/findSpeciality", {
                        method: "POST",
                        body: JSON.stringify({
                          "speciality": text,
                          "role": role
                        }),
                        headers: {
                          "Content-Type": "application/json",
                        },
                      }).then((report) => report.json())
                        .then((report) => {
                          console.log('report', JSON.stringify(report, null, 2))
                          setResult(report.user)
                          if (report.user.length === 0) {
                            alert("No data available")
                          }
                        })
                    }
                  })
              }
            })
          // till here
        }
      })


  }



  const handleorder = (e) => {
    fetch(`https://logink123.herokuapp.com/appoinment/find?patient_id=${patid}&completed=false`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((report) => report.json())
      .then((report) => {
        console.log('report', JSON.stringify(report, null, 2))
      if( report.data == "")
      { console.log(e.target.value)
        ReactSession.set("userp", e.target.value)
    navigate('/PatientHome/corder', { replace: true });
      } 
      else
      {
        alert("You have already placed a order")
      } 
      }) 
  }

  const viewstore = (e) => {
    ReactSession.set("pharmaid", e.target.value)
    ReactSession.set("userrole", role)

    navigate('/PatientHome/Viewstore', { replace: true });
  }

  return (


    <>

      <div className='flex flex-col justify-between h-screen'>
        <Navbar image={string} url={url} profileurl={profileurl} />
        <main className='container mx-auto px-3 pb-12'>
          {/* <Search/>*/}
          <div className='grid grid-cols-1 xl:grid-cols-1 lg:grid-cols-1  md:grid-cols-1 mb-8 gap-8'>
            <div class="w-3/6 m-auto" >
              <div class="form-control ">
                <div class="input-group ">
                  <select class="select select-bordered" onClick={searchtext} onChange={(e) => setRole(e.target.value)} >
                    <option value='doctor' selected>Doctor</option>
                    <option value='pharmacy'>Pharmacy</option>
                    <option value='laboratory'>Laboratory</option>
                  </select>
                  <input type="text" placeholder="Search…" onChange={(e) => setText(e.target.value)} class="input w-full rounded-l input-bordered" value={text} />
                  <button class="btn btn-square" onClick={searchtext}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  </button>
                </div>
              </div>
            </div>
            <hr />  {/* partition */}
            {role == "doctor" && (
              <div>
                {result.length > 0 && (
                  <div>
                    {role}
                    <div class="overflow-auto w-full">
                      <table class="table w-3/6 mx-auto">
                        <thead>
                          <tr>
                            <th>
                              <label>
                              </label>
                            </th>
                            <th>Name</th>
                            <th>Speciality</th>
                            <th>Fees</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            result.map((curElem) => {
                              return (
                                <>
                                  <tr>
                                    <th>
                                      <div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                          <img src="https://api.lorem.space/image/face?hash=8877" alt="Profile" />
                                        </div>
                                      </div>
                                    </th>
                                    <td>
                                      <div class="flex items-center space-x-3">
                                        <div>
                                          <div class="font-bold">{curElem.fullname}</div>
                                          <div class="text-sm opacity-50">Username : {curElem.username}</div>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      {curElem.speciality}
                                      <br />
                                    </td>
                                    <td>
                                      <button class="btn btn-ghost btn-xs">Fees : {curElem.fees}</button>
                                    </td>
                                    <th>
                                      <div>
                                        <button class="btn btn-ghost font-bold btn-outline" value={curElem.username} onClick={handleorder} ><FaPlusCircle />Book appointment</button>
                                      </div>
                                    </th>
                                  </tr>
                                  <hr />
                                </>
                              )
                            })
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            )}

            {role != "doctor" && (
              <div>
                {result.length > 0 && (
                  <div>
                    {role}
                    <div class="overflow-x-auto w-full">
                      <table class="table w-3/6 mx-auto">
                        <thead>
                          <tr>
                            <th>
                              <label>
                              </label>
                            </th>
                            <th>Name</th>
                            <th>123</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            result.map((curElem) => {
                              return (
                                <>
                                  <tr>
                                    <th>
                                      <div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                          <img src="https://api.lorem.space/image/face?hash=8877" alt="Profile" />
                                        </div>
                                      </div>
                                    </th>
                                    <td>
                                      <div class="flex items-center space-x-3">
                                        <div>
                                          <div class="font-bold">{curElem.fullname}</div>
                                          <div class="text-sm opacity-50">Username : {curElem.username}</div>
                                          {/* {curElem._id} */}
                                        </div>
                                      </div>
                                    </td>
                                    <th>
                                      <div>
                                        <button class="btn btn-ghost font-bold btn-outline" onClick={viewstore} value={curElem._id}><FaCartPlus /> Veiw Store </button><br />
                                      </div>
                                    </th>
                                  </tr>
                                  <hr />
                                </>
                              )
                            })
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </main>
        {/* <div><Footer /></div> */}
      </div>
    </>
  )
}

export default PatHome