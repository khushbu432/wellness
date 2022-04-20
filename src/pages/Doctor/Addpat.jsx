import React, { useState } from 'react'
import { ReactSession } from 'react-client-session'
import { FaHome, FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
// import Footer from '../components/Footer'
import Navbar from './Navbar'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from 'react-router-dom';


function Addpat() {
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

        fetch("https://logink123.herokuapp.com/user/register", {
            method: "POST",
            body: JSON.stringify({
                username: username,
                password: password,
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
                    <div class="hero min-h-screen bg-base-200">
                        <div class="hero-content flex-col lg:flex-row-reverse">
                            <div class="text-center lg:text-left">
                                <h1 class="text-5xl font-bold">Add Patient</h1>

                            </div>
                            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <div class="card-body">
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Username</span>
                                        </label>
                                        <input type="text" autoComplete="off" placeholder="Username" class="input input-bordered" onChange={(e) => setUsername(e.target.value)}
                                            value={username} />
                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Password</span>
                                        </label>
                                        <input type="password" autoComplete="off" placeholder="Password" class="input input-bordered" onChange={(e) => setPassword(e.target.value)}
                                            value={password} />
                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Fullname</span>
                                        </label>
                                        <input type="text" autoComplete="off" placeholder="Fullname" class="input input-bordered" onChange={(e) => setFullname(e.target.value)}
                                            value={fullname} />
                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">E-Mail</span>
                                        </label>
                                        <input type="text" autoComplete="off" placeholder="E-Mail" class="input input-bordered" onChange={(e) => setEmail(e.target.value)}
                                            value={email} />
                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Date of Birth</span>
                                        </label>
                                        <input type="Date" autoComplete="off" placeholder="DOB" class="input input-bordered" onChange={(e) => setDob(e.target.value)}
                                            value={dob} />
                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Mobile</span>
                                        </label>
                                        <input type="number" autoComplete="off" placeholder="Mobile" class="input input-bordered" onChange={(e) => setMobile(e.target.value)}
                                            value={mobile} />
                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">City</span>
                                        </label>
                                        <input type="text" autoComplete="off" placeholder="City" class="input input-bordered" onChange={(e) => setCity(e.target.value)}
                                            value={city} />
                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">State</span>
                                        </label>
                                        <input type="text" autoComplete="off" placeholder="State" class="input input-bordered" onChange={(e) => setState(e.target.value)}
                                            value={state} />
                                    </div>
                                    <div class="form-control mt-6">
                                        <button class="btn btn-primary" onClick={handlesubmit}>Add PAtient</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                {/* <div><Footer /></div> */}
            </div>

        </>
    )
}

export default Addpat