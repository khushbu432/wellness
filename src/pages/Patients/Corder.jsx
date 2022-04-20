import React from 'react'
import Navbar from './Navbar'
import { useEffect } from 'react'
import { ReactSession } from 'react-client-session'
import { useState } from 'react'
// import Footer from '../components/Footer'
import Slot from './Slot'
import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';



export default function Corder() {
    const navigate = useNavigate()
    const temp = ReactSession.get("token")
    const user = ReactSession.get("userp")
    const patid = ReactSession.get("patid")

    console.log(patid)
    const [fullname, setFullname] = useState("")
    const [id, setId] = useState("")
    const [fees, setFees] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")

    const bookappointment = () => {
        fetch("https://logink123.herokuapp.com/appoinment/insert", {
            method: "POST",
            body: JSON.stringify({
                doctor_id: id,
                patient_id: patid,
                time: timestamp,
                completed: false,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((report) => report.json())
            .then((report) => {
                console.log('report', JSON.stringify(report, null, 2))
                if (report.success === true) {
                    alert("Your appointment successfully placed of" + time)
                    navigate('/PatientHome', { replace: true });
                    ReactSession.remove("userp")
                }
                else {
                    alert("Not booked")
                }
            })
    }
    useEffect(() => {
        fetch("https://logink123.herokuapp.com/user/findByUsername", {
            method: "POST",
            body: JSON.stringify({
                username: user,
                role: "doctor"
            }),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((report) => report.json())
            .then((report) => {
                console.log('report', JSON.stringify(report, null, 2))
                setFees(report.user[0]["fees"]);
                setFullname(report.user[0]["fullname"]);
                setId(report.user[0]["_id"])
            })
    }, [])
    const timenew = (date + "T" + time)
    const timestamp = Date.parse(timenew)
    const [string, setString] = useState("https://api.lorem.space/image/face?hash=8877")
    const url = '/PatientHome'
    const profileurl = '/PatientHome/Profile'

    const handleremove = () => {
        ReactSession.remove("userp")
        navigate('/PatientHome/corder', { replace: true });

    }
    return (
        <>

            <div className='flex flex-col justify-between bg-slate-200 h-screen'>
                <Navbar image={string} url={url} profileurl={profileurl} />
                {user && (
                    <main className='container mx-auto px-3 pb-12'>
                        <h1 className='text-5xl font-bold text-left pl-5'>Place Your Order</h1>
                        <div class="flex w-full">
                            <div class="grid flex-grow card bg-base-300 rounded-box place-items-center">
                                <div class="overflow-x-auto w-full">
                                    <table class="table w-full">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <label>
                                                        dr:   {fullname}
                                                    </label>
                                                </th>
                                                <th>Name/Product</th>
                                                <th>Quantity</th>
                                                <th>Price</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>
                                                    {/* Avtar */}
                                                    <div class="avatar">
                                                        <div class="w-24 rounded">
                                                            <img src="https://api.lorem.space/image/face?hash=92048" />
                                                        </div>
                                                    </div>
                                                </th>
                                                <td>
                                                    <div class="flex items-center space-x-3">

                                                        <div>
                                                            <div class="font-bold">DR. {fullname}</div>
                                                            <div class="text-sm opacity-50">User name : {user}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {/* only for medicine */}
                                                    <select class="select select-bordered w-full max-w-xs" disabled="true" >
                                                        <option selected>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>

                                                    </select>
                                                </td>
                                                <td>

                                                    <div class="font-bold">${fees}.00</div>
                                                </td>
                                                <th>
                                                    <button class="btn btn-ghost btn-outline " onClick={handleremove}>remove</button>
                                                </th>
                                            </tr><div class="font-bold">Select Date

                                            </div>
                                            <tr >
                                                <td colSpan='2'>
                                                    {/* <Calendar/>
                                              https://www.npmjs.com/package/react-calendar */}

                                                    <input type="date" placeholder="Date" class="input input-bordered w-full" onChange={(e) => setDate(e.target.value)} value={date} />
                                                </td>
                                                <td>
                                                    Date : {date + "T" + time}
                                                    <br />
                                                    Epoch :  {timestamp}
                                                </td>

                                            </tr>
                                            <div class="font-bold">Select Time Slot

                                            </div>
                                            <tr >
                                                <td colSpan='3'>
                                                    {/* Slot */}
                                                    <Slot timing={time => setTime(time)} />
                                                    <h1>{time}123</h1>
                                                </td>

                                            </tr>
                                            <div class="font-bold"> .

                                            </div>
                                        </tbody>

                                        <tfoot>
                                            <tr>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th> </th>
                                                <th>
                                                    <button class="btn btn-outline" onClick={bookappointment}>Book appointment</button>
                                                </th>
                                            </tr>
                                        </tfoot>

                                    </table>
                                </div>


                            </div>
                            <div class="grid h-full flex-grow card bg-base-300 rounded-box place-items-center">
                                <div class="card w-96 bg-base-100 shadow-xl">
                                    <div class="card-body">
                                        <h2 class="card-title">Total Price : INR {fees}</h2>
                                        <h2 class="card-title">Discount : USD 0</h2>
                                        <hr />
                                        <div class="card-actions justify-center">
                                            <img src='https://arenenailspa.com/wp-content/uploads/2020/09/Essential-Minimal-Payment-Icons-removebg-preview-1.png'>
                                            </img>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </main>

                )}
                {!user && (
                    <div>
                        <h1 className='text-5xl font-bold text-left pl-5'>Your Order is Empty !!</h1>

        
                        <button className='btn btn-outline' onClick={()=>{navigate('/PatientHome', { replace: true });}}>Select your Order</button>

                    </div>
                )}
                {/* <div><Footer /></div> */}
            </div>
        </>
    )
}
