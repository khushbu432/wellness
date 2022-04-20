import React from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ReactSession } from 'react-client-session'


export default function Registrationdoctor() {
  const navigate = useNavigate()
  const temp = ReactSession.get("token")
  const role = "doctor"
  const [username, setUsername] = useState("")
  const [mobile, setMobile] = useState("")
  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [dob, setDob] = useState("")
  const [city, setCity] = useState("")
  const [speciality, setSpeciality] = useState("")
  const [fees, setFees] = useState("")
  const [optime, setOptime] = useState("")
  const [cltime, setCltime] = useState("")

  const handlesubmit = (e) => {

    fetch("https://logink123.herokuapp.com/user/update", {
      method: "PUT",
      body: JSON.stringify({
        city: city,
        mobile: mobile,
        email: email,
        fullname: fullname,
        role: role,
        speciality: speciality,
        fees: fees,
        opentime: ot,
        closetime: ct
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: 'Bearer '.concat(temp)
      },
    }).then((result) => result.json())
      .then((result) => {

        if (result.succes === true) {
          alert("thanks")
          navigate('/DocHome', { replace: true });

        }
        else {
          alert("some thing went wrong")
        }
      })
  }

  const ot = Date.parse(dob + "T" + optime)
  const ct = Date.parse(dob + "T" + cltime)
  const bd = Date.parse(dob)

  const handleskip = () => {
    navigate('/DocHome', { replace: true });

  }
  return (
    <>
      <div class="card bg-base-100 mt-20 shadow-xl registerdiv ">
        <div class="grid h-20 card bg-base-300 text-2xl rounded-box place-items-center">Registration Details</div>
        <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Full Name</span>
          </label>
          <input
            type="text"
            autoComplete="off"
            placeholder="Full Name"
            className="w-full pr-40 bg-gray-200 input input-xlg text-black"
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
          />
          </div>
          <div class="form-control">
          <label class="label">
            <span class="label-text">E-Mail</span>
          </label>
          <input
            type="text"
            autoComplete="off"
            placeholder="E-mail"
            className="w-full pr-40 bg-gray-200 input input-xlg text-black"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          </div>
          <div class="form-control">
          <label class="label">
            <span class="label-text">Date of Birth</span>
          </label>
          <input
            type="Date"
            autoComplete="off"
            placeholder="DOB"
            className="w-full pr-40 bg-gray-200 input input-xlg text-black"
            onChange={(e) => setDob(e.target.value)}
            value={dob}
          />
          </div>

          <div class="form-control">
          <label class="label">
            <span class="label-text">Mobile</span>
          </label>
          <input
            type="text"
            autoComplete="off"
            placeholder="Mobile"
            className="w-full pr-40 bg-gray-200 input input-xlg text-black"
            onChange={(e) => setMobile(e.target.value)}
            value={mobile}
          />
          </div>

          <div class="form-control">
          <label class="label">
            <span class="label-text">City</span>
          </label>
          <input
            type="text"
            autoComplete="off"
            placeholder="City"
            className="w-full pr-40 bg-gray-200 input input-xlg text-black"
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
          </div>
          <div class="form-control">
          <label class="label">
            <span class="label-text">Speciality</span>
          </label>

          <input
            type="text"
            autoComplete="off"
            placeholder="Speciality"
            className="w-full pr-40 bg-gray-200 input input-xlg text-black"
            onChange={(e) => setSpeciality(e.target.value)}
            value={speciality}
          />
          </div>
          <div class="form-control">
          <label class="label">
            <span class="label-text">Fees</span>
          </label>

          <input
            type="text"
            autoComplete="off"
            placeholder="Fees"
            className="w-full pr-40 bg-gray-200 input input-xlg text-black"
            onChange={(e) => setFees(e.target.value)}
            value={fees}
          />
          </div>
           <div class="form-control">
          <label class="label">
            <span class="label-text">Open Time</span>
          </label>
          <input
            type="time"
            autoComplete="off"
            placeholder="Opening time"
            className="w-full pr-40 bg-gray-200 input input-xlg text-black "
            onChange={(e) => setOptime(e.target.value)}
            value={optime}
            min="09:00" max="18:00"
          />
           </div>

           <div class="form-control">
           <label class="label">
            <span class="label-text">Close Time</span>
          </label>
          <input
            type="time"
            autoComplete="off"
            placeholder="Close time"
            className="w-full pr-40 bg-gray-200 input input-xlg text-black"
            onChange={(e) => setCltime(e.target.value)}
            value={cltime}
          />
           </div>


          <br />
          <div>
            
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button onClick={handlesubmit}>Sign UP</Button>

          </ButtonGroup>

          <Button onClick={handleskip}>Skip</Button>
          </div>


        </div>
      </div>
    </>

  )
}
