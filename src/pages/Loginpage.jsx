import React from "react";
import { useState } from "react";
import {ReactSession} from 'react-client-session'
import { useNavigate } from 'react-router-dom';
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
          ReactSession.set("token", res.token)
          ReactSession.set("account",res.account)
          
          if (role === "doctor") {
            navigate('../DocHome', { replace: true });
          }
          else if (role === "patient"){
            navigate('../PatientHome', { replace: true });
          }
          else if (role === "pharmacy"){
            navigate('../Medical/Medhome', { replace: true });
          }
          else if (role === "laboratory"){
            navigate('../Lab/Labhome', { replace: true });
          }
          else {
            alert("Select your Role")
          }

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
    
        <select class="select bg-gray-200 select-ghost w-full "  onChange={(e) => setRole(e.target.value)}>
  <option disabled selected>Role</option>
  <option value='doctor'>Doctor</option>
  <option value='patient'>Patient</option>
  <option value='pharmacy'>pharmacy</option>
  <option value='laboratory'>Laboratory</option>

</select>

          <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text">Remember me</span>
              {/* <Checkbox /> */}
            </label>
          </div>

          {/* <ButtonGroup variant="contained" aria-label="outlined primary button group"> */}
      <button className="btn btn-secondary" onClick={handlesubmit}>SIGN IN</button>
       
    {/* </ButtonGroup> */}
    OR  
      <button  className="btn btn-secondary" onClick={handlesignup}>SIGN UP</button>
        </div>       
      </div>
    </div>   
    </>
  );
}

export default Loginpage;