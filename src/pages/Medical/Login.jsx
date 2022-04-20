import React from "react";
import { useState } from "react";
import {ReactSession} from 'react-client-session'
import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";
// import Button from '@mui/material/Button';
// import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from "react-router-dom";
// import Checkbox from '@mui/material/Checkbox';

function Loginpage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [checking, setChecking] = useState("");

  const navigate = useNavigate()

  const handlechecking = () => {
    setChecking(!checking)
  }
  const handlesubmit = (e) => {
    const LOGIN = "https://logink123.herokuapp.com/user/login";
    // const LOGIN = process.env.LOGIN_API;


    e.preventDefault();

    const options = {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
        role:role,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(LOGIN, options)
      .then((res) => res.json())
      .then((res) => {
        if (res.success === true) {
          alert("Login Success full")
          ReactSession.set("newaccount",res.account)

        }
        else {
          alert("Username or Password is incorrect")
        }
      });

  };

const setdoc = () => {
  setRole("doctor")
}
const setpat = () => {
  setRole("patient")
}
const handlesignup =()=>{
  navigate('./register', { replace: true });

}


  return (
    <>
    

    <div >
    <div class="card w-120 mt-20 bg-base-100 shadow-xl registerdiv">
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
          <div class="form-control">
            <label class="label cursor-pointer">
            </label>
          </div>

      <button className="btn btn-secondary" onClick={handlesubmit}>SIGN IN</button>
       
    OR  
      <button  className="btn btn-secondary" onClick={handlesignup}>SIGN UP</button>
        </div>       
      </div>
    </div>   
    </>
  );
}

export default Loginpage;