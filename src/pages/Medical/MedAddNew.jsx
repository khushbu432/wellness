import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { ReactSession } from 'react-client-session'
import Navbar from "./Navbar";
// import Button from '@mui/material/Button';
// import ButtonGroup from '@mui/material/ButtonGroup';

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [mobile, setMobile] = useState("")
  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [dob, setDob] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const navigate = useNavigate()
  const handlesubmit = (e) => {
    const REGISTER = "https://logink123.herokuapp.com/user/register";
    // const REGISTER = process.env.REACT_APP_REGISTER_API;


    e.preventDefault();

    const options = {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
        role: "patient",
        address: {
          city: city,
          state: state,
      },
      birthdate: dob,
      mobile: mobile,
      email: email,
      fullname: fullname,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const data = fetch(REGISTER, options)
      .then((res) => res.json())
      .then((res) => {

        // geting data from token        
        if (res.success === true) {
          alert("Registration Success full")
          ReactSession.set("Newtoken", res.token)
        }
        else {
          alert("Something is missing ")
        }
      });


  };
  const handlesignin = () => {
      const temp=ReactSession.get("Newtoken")
      const url = "https://logink123.herokuapp.com/user/update";
      const Options = {
        method: "PUT",
        body: JSON.stringify({
          role: "patient",
        }),
        headers: {
          "Content-Type": "application/json",
          "Authorization":"Bearer" +'Bearer '.concat(temp)
        },
      };
  
      fetch(url, Options)
        .then((res) => res.json())
        .then((res) => {
          if (res.succes === true) {
            alert("signned in")
        ReactSession.set("patient",res.data)
        navigate('/Medical/MedNewOrder',{ replace: true });
          }
        })
      }

  return (
    <>
      <Navbar />
      <div class="card w-120 bg-base-100 mt-20 shadow-xl registerdiv ">
        <figure class="px-10 pt-10">
          <div class="avatar">
            <div class="w-24 rounded-full ring ring-offset-base-100 ring-offset-2">
              <img src="https://media.istockphoto.com/vectors/white-lock-icon-on-blue-circle-safety-sign-security-locked-button-vector-id1139724620?k=20&m=1139724620&s=170667a&w=0&h=AEb6rnFjshGuBcNOhkedcVTlXb9oRHr57OAq8vxAfxM=" />
            </div>
          </div>
          <br />
        </figure>
        <div class="card-body items-center text-center">
          <input
            type="text"
            autoComplete="off"
            onChange={(e) => setUsername(e.target.value)}
            id="username"
            placeholder="Username"
            className="w-full pr-40 bg-gray-200 input input-xlg text-black"
            value={username}
          />

          <input
            type="password"
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            placeholder="Password"
            className="w-full pr-40 bg-gray-200 input input-xlg text-black"
            value={password}
          />
          <input
            type="text"
            autoComplete="off"
            onChange={(e) => setFullname(e.target.value)}
            id="fullname"
            placeholder="Fullname"
            className="w-full pr-40 bg-gray-200 input input-xlg text-black"
            value={fullname}
          />

           <input
            type="number"
            autoComplete="off"
            onChange={(e) => setMobile(e.target.value)}
            id="mobile"
            placeholder="Mobile"
            className="w-full pr-40 bg-gray-200 input input-xlg text-black"
            value={mobile}
          />
           <input
            type="text"
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            placeholder="Email"
            className="w-full pr-40 bg-gray-200 input input-xlg text-black"
            value={email}
          />
           <input
            type="Date"
            autoComplete="off"
            onChange={(e) => setDob(e.target.value)}
            id="Dob"
            placeholder="DOB"
            className="w-full pr-40 bg-gray-200 input input-xlg text-black"
            value={dob}
          />
           <input
            type="text"
            autoComplete="off"
            onChange={(e) => setCity(e.target.value)}
            id="city"
            placeholder="City"
            className="w-full pr-40 bg-gray-200 input input-xlg text-black"
            value={city}
          />
           <input
            type="text"
            autoComplete="off"
            onChange={(e) => setState(e.target.value)}
            id="state"
            placeholder="State"
            className="w-full pr-40 bg-gray-200 input input-xlg text-black"
            value={state}
          />
          <br />
         
            <button className="btn btn-primary" onClick={handlesubmit}>SIGN UP</button>
            <button className="btn btn-primary" onClick={handlesignin}>SIGN IN</button>
          
        </div>
      </div>
    </>
  );
}

export default Register;
