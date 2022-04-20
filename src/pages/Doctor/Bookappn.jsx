import React, { useState } from 'react'
import { ReactSession } from 'react-client-session'
import { FaHome, FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
// import Footer from '../components/Footer'
import Navbar from './Navbar'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from 'react-router-dom';


function Bookappn() {
  const navigate = useNavigate()
    const temp = ReactSession.get("token")
  const role = "patient"
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [mobile, setMobile] = useState("")
  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [dob, setDob] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")


  const handlesubmit = (e) => {
   
    fetch("", {
      method: "POST",
      body: JSON.stringify({
          username:username,
          password:password,
          address: {
              city: city,
              state: state,
          },
          mobile: mobile,
          email: email,
          fullname: fullname,
          role: role,
          
      }),
      headers: {
          "Content-Type": "application/json",
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

    const [string, setString] = useState("https://t3.ftcdn.net/jpg/02/60/04/08/360_F_260040863_fYxB1SnrzgJ9AOkcT0hoe7IEFtsPiHAD.jpg")
    const url = '/DocHome'
    const profileurl = '/DocHome/profile'


    return (
        <>
            <div className='flex flex-col justify-between h-screen'>
                <Navbar image={string} url={url} profileurl={profileurl} />
                <main className='container mx-auto px-3 pb-12'>
                    {/*    */}
            {/* From here */}
            <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Book Appointment</h1>
      <p class="py-6"></p>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" class="input input-bordered"/>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" class="input input-bordered"/>
          
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" class="input input-bordered"/>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" class="input input-bordered"/>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" class="input input-bordered"/>
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
            {/* Till here */}
                </main>
                {/* <div><Footer /></div> */}
            </div>

        </>
    )
}

export default Bookappn