import React from 'react'
// import Button from '@mui/material/Button';
// import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ReactSession } from 'react-client-session'



export default function Registrationpatient() {
  const navigate = useNavigate()
  const temp = ReactSession.get("token")
  const role = "patient"
  const [username, setUsername] = useState("")
  const [mobile, setMobile] = useState("")
  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [dob, setDob] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const handlesubmit = (e) => {
   
    fetch("https://logink123.herokuapp.com/user/update", {
      method: "PUT",
      body: JSON.stringify({
          address: {
              city: city,
              state: state,
          },
          birthdate: dob,
          mobile: mobile,
          email: email,
          fullname: fullname,
          role: role
      }),
      headers: {
          "Content-Type": "application/json",
          Authorization: 'Bearer '.concat(temp)
      },
  }).then((result) => result.json())
      .then((result) => {

          if (result.succes === true) {
              alert("thanks")
  navigate('/PatientHome', { replace: true });

          }
          else {
              alert("some thing went wrong")
          }
      })
}

  

const handleskip = () => {
  navigate('/PatientHome', { replace: true });

}
  return (
    <>
    

      <div class="card bg-base-100 mt-20 shadow-xl registerdiv ">
      <div class="grid h-20 card bg-base-300 text-2xl rounded-box place-items-center">Registration Details</div>
        <div class="card-body items-center text-center">

          <input
            type="text"
            autoComplete="off"
            placeholder="Full Name"
            className="w-full pr-40 bg-gray-200 input input-xlg text-black"
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}

          />

          <input
            type="text"
            autoComplete="off"
            placeholder="E-mail"
            className="w-full pr-40 bg-gray-200 input input-xlg text-black"
            onChange={(e) => setEmail(e.target.value)}
            value={email}

          />
           <input
            type="Date"
            autoComplete="off"
            placeholder="DOB"
            className="w-full pr-40 bg-gray-200 input input-xlg text-black"
            onChange={(e) => setDob(e.target.value)}
            value={dob}

          />
           <input
            type="text"
            autoComplete="off"
            placeholder="Mobile"
            className="w-full pr-40 bg-gray-200 input input-xlg text-black"
            onChange={(e) => setMobile(e.target.value)}
            value={mobile}
          />
           <input
            type="text"
            autoComplete="off"
            placeholder="City"
            className="w-full pr-40 bg-gray-200 input input-xlg text-black"
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
           <input
            type="text"
            autoComplete="off"
            placeholder="State"
            className="w-full pr-40 bg-gray-200 input input-xlg text-black"
            onChange={(e) => setState(e.target.value)}
            value={state}
          />


          <br />

          {/* <ButtonGroup variant="contained" aria-label="outlined primary button group"> */}
            <button className='btn btn-primary' onClick={handlesubmit}>Sign UP</button>

          {/* </ButtonGroup> */}

          <button className='btn  btn-primary' onClick={handleskip}>Skip</button>

        </div>
      </div>
    </>

  )
}
