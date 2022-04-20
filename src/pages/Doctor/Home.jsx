import React, { useEffect, useState } from 'react'
import { ReactSession } from 'react-client-session'
import { FaHome, FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
// import Footer from '../components/Footer'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';

function Home() {
  const temp = ReactSession.get("token")
  const docid = ReactSession.get("patid")
  const [result, setResult] = useState("")
  const navigate = useNavigate()

useEffect(()=>{
  fetch(`https://logink123.herokuapp.com/appoinment/find?doctor_id=${docid}&completed=false`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((report) => report.json())
    .then((report) => {
      console.log('report', JSON.stringify(report, null, 2))
      setResult(report.data)
    })
},[])

  const [string, setString] = useState("https://t3.ftcdn.net/jpg/02/60/04/08/360_F_260040863_fYxB1SnrzgJ9AOkcT0hoe7IEFtsPiHAD.jpg")
  const url = '/DocHome'
  const profileurl = '/DocHome/profile'

  const attendpat = (e) => {
    ReactSession.set("attendpat", e.target.value)
    console.log(e.target.value)
    navigate('/DocHome/attendpat', { replace: true });
  }
  return (
    <>

      <div className='flex flex-col justify-between h-screen'>
        <Navbar image={string} url={url} profileurl={profileurl} />
        <main className='container mx-auto px-3 pb-12'>
          <h1 className='text-5xl font-bold'>Todays Appointments</h1>
          <hr />

          {result.length > 0 && (
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
              {result.map((curElem) => {
                return (
                  < >
                    {/*   From here */}
                      <div className="flex-row items-center space-x-4 card-body">
                        {/* Content */}
                        <div class="card w-96 bg-base-100 shadow-xl">
                          <div class="card-body">
                            <h2 class="card-title">Paatient Username :  {curElem.patient_id.username}</h2>
                            <p>Bimari in short form</p>
                            <div class="card-actions justify-end">
                              <button class="btn btn-primary" value={curElem._id} onClick={attendpat}>Attend</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    {/* till here 1 */}
                  </>
                )
              })}
            </div>
          )}
          {result.length == 0 && (
            <div>
              <h1  className='text-5xl font-bold'>No Appointments Today</h1>
            </div>
          )}

        </main>
        {/* <div><Footer /></div> */}
      </div>

    </>
  )
}

export default Home