import React, { useEffect } from 'react'
// import Footer from '../components/Footer'
import Navbar from './Navbar'
import { ReactSession } from 'react-client-session'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Patprofile() {
    const temp = ReactSession.get("token")

    const role = "patient"
    const [username, setUsername] = useState("")
    const [mobile, setMobile] = useState("")
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [dob, setDob] = useState("")
    const [city, setCity] = useState("")
    const [id, setId] = useState("")
    const [result, setResult] = useState("")


    const navigate = useNavigate()



    useEffect(() => {
        fetch("https://logink123.herokuapp.com/user/loggedin", {
            method: "POST",
            body: JSON.stringify({
                role: role
            }),
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Bearer '.concat(temp)
            },
        }).then((report) => report.json())
            .then((report) => {

                console.log('report', JSON.stringify(report, null, 2))
                setUsername(report.account[0]["username"]);
                setId(report.account[0]["_id"]);
                setCity(report.account[0]["city"]);
                // get date

                setMobile(report.account[0]["mobile"]);
                setEmail(report.account[0]["email"]);
                setFullname(report.account[0]["fullname"]);
                setDob(new Date(report.account[0]["birthdate"]).toISOString().split('T')[0])
                
                fetch(`https://logink123.herokuapp.com/appoinment/find?completed=true&patient_id=${report.account[0]["_id"]}`, {
                    method: "POST",
                    body: JSON.stringify({
                        role: role
                    }),
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: 'Bearer '.concat(temp)
                    },
                }).then((report) => report.json())
                    .then((report) => {
                        console.log('report', JSON.stringify(report, null, 2))
                setResult(report.data)
                    })

            })


            // 



          
    }, [])


    const [string, setString] = useState("https://api.lorem.space/image/face?hash=8877")
    const url = '/PatientHome'
    const profileurl = '/PatientHome/Profile'

    const editing = () => {
        navigate('/registrationpat', { replace: true });

    }


    return (
        <>
            <div className='flex flex-col justify-between h-screen'>
                <Navbar image={string} url={url} profileurl={profileurl} />
                <main className='container mx-auto px-3 pb-12'>

                    <>
                        <div className='w-full mx-auto lg:w-10/12' >

                            <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
                                <div className='custom-card-image mb-6 md:mb-0'>
                                    <div className='rounded-lg shadow-xl card image-full'>
                                        <figure>
                                            <img src="https://www.verywellhealth.com/thmb/Krbuqh1a8jbCcqJw73CRpoZCFLY=/2123x1415/filters:no_upscale():max_bytes(150000):strip_icc()/171631860-56aae7f53df78cf772b4a4cb.jpg" alt='Profiile Pic' />
                                        </figure>
                                        <div className='card-body justify-end'>
                                            <h2 className='card-title mb-0'>{fullname}</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-2">
                                    <div className="mb-6">
                                        <h1 className="text-3xl card-title">
                                            {fullname}
                                            <div className="ml-2 mr-1 badge badge-success">
                                                {role}
                                            </div>
                                            <button className="btn btn-xs" onClick={editing}>Edit</button>

                                        </h1>
                                        <div className="mt-4 text-3xl text-left block card-actions">
                                            <h1> Phone : {mobile}</h1>  <hr />
                                            <h1>Mail Id : {email}</h1> <hr />
                                            <h1>DOB : {dob}</h1> <hr />
                                            <h1>City : {city}</h1> <hr />

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Here tyhe list of Previous appointments */}
                            <div class="overflow-x-auto w-full">
                                <table class="table w-full">
                                    <thead>
                                        <tr>

                                            <th>Doctor Name</th>
                                            <th>Date</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    {result.length > 0 && (
                                        <>
                                            {result.map((curElem) => {
                                                return (
                                                    < >
                                                             <tbody>
                                        <tr>

                                            <td>
                                                <div class="flex items-center space-x-3">
                                                    <div class="avatar">
                                                        <div class="mask mask-squircle w-12 h-12">
                                                            <img src="https://api.lorem.space/image/face?hash=8877" alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div class="font-bold"></div>
                                                        {curElem.doctor_id.fullname}
                                                        <div class="text-sm opacity-50">Username-{curElem.doctor_id.username}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {new Date(curElem.time).toISOString().split('T')[0]}
                                                <br />
                                                <span class="badge badge-ghost badge-sm">RS. {curElem.doctor_id.fees}</span>
                                            </td>
                                            <th>
                                                <button className="btn btn-xs">details</button>
                                            </th>
                                        </tr>



                                    </tbody>
                                                    </>
                                                )
                                            })
                                            }
                                        </>
                                    )}
                                   
                                    <tfoot>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </tfoot>

                                </table>
                            </div>

                            {/* Till here */}
                        </div>
                    </>
                </main>

                {/* <div><Footer /></div> */}

            </div>
        </>
    )
}

export default Patprofile