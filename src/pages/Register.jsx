import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { ReactSession } from 'react-client-session'
// import Button from '@mui/material/Button';
// import ButtonGroup from '@mui/material/ButtonGroup';

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
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
        role: role
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
          ReactSession.set("token", res.token)

          if (role === "Doctor" || role === "doctor") {
            navigate('/registrationdoc', { replace: true });

          }
          else if (role === "Patient" || role === "patient") {

            navigate('/registrationpat', { replace: true });

          }
          else if (role === "pharmacy" || role === "Pharmacy") {

            navigate('/registrationMed', { replace: true });

          } 
           else if (role === "Laboratory" || role === "laboratory") {

            navigate('/registrationLab', { replace: true });

          }
        }
        else {
          alert("Something is missing ")
        }
      });


  };
  const handlesignin = () => {
    navigate('../', { replace: true });

  }

  return (
    <>

      <div class="card w-120 bg-base-100 mt-20 shadow-xl registerdiv h-screen ">
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
          


          <select class="select bg-gray-200 select-ghost w-full " onChange={(e) => setRole(e.target.value)}>
            <option disabled selected>Role</option>
            <option value='doctor'>Doctor</option>
            <option value='patient'>Patient</option>
            <option value='pharmacy'>pharmacy</option>
            <option value='lab'>Lab</option>

          </select>

          <br />
         
          {/* <ButtonGroup variant="contained" aria-label="outlined primary button group"> */}
            <button className="btn btn-primary" onClick={handlesubmit}>SIGN UP</button>

          {/* </ButtonGroup> */}
          {/* OR
          <button onClick={handlesignin}>SIGN IN</button> */}

        </div>
      </div>
    </>
  );
}

export default Register;
