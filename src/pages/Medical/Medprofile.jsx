import React, { useEffect } from 'react'
// import Footer from '../components/Footer'
import Navbar from './Navbar'
import { ReactSession } from 'react-client-session'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Profile() {
    const temp = ReactSession.get("token")
    const role = "pharmacy"
    const account=ReactSession.get("account")

    const [string, setString] = useState("https://t3.ftcdn.net/jpg/02/60/04/08/360_F_260040863_fYxB1SnrzgJ9AOkcT0hoe7IEFtsPiHAD.jpg")
    const url = '/Medhome'
    const profileurl = '/Medical/Medprofile'

    const handleedit = () => {
        // navigate('/registrationdoc', { replace: true });
    }
    return (
        <>
        
        
            <div className='flex flex-col justify-between h-screen'>
                <Navbar image={string} url={url} profileurl={profileurl} />
                <main className='container mx-auto px-3 pb-12'>
                    <div className='w-full mx-auto lg:w-10/12' >

                        <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
                            <div className='custom-card-image mb-6 md:mb-0'>
                                <div className='rounded-lg shadow-xl card image-full'>
                                    <figure>
                                        <img src="https://www.verywellhealth.com/thmb/Krbuqh1a8jbCcqJw73CRpoZCFLY=/2123x1415/filters:no_upscale():max_bytes(150000):strip_icc()/171631860-56aae7f53df78cf772b4a4cb.jpg" alt='Profiile Pic' />
                                    </figure>
                                    <div className='card-body justify-end'>
                                        <h2 className='card-title mb-0'>{account.fullname}</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-2">

                                <div className="mb-6">
                                    <h1 className="text-3xl card-title">
                                        {account.fullname}
                                        <div className="ml-2 mr-1 badge badge-success">
                                            {account.role}
                                        </div>
                                        {/* <button className="btn btn-xs" onClick={handleedit}>Edit</button> */}

                                    </h1>
                                    <div className="mt-4 text-3xl text-left block card-actions">
                                        <h1> Phone : {account.mobile}</h1>  <hr />
                                        <h1>Mail Id : {account.email}</h1> <hr />
                                        <h1>DOB : {account.birthdate}</h1> <hr />
                                        {/* <h1>Speciality : {speciality}</h1> <hr />
                                        <h1>Fees : {fees}</h1> <hr /> */}
                                        <h1>Open-Time : {account.opentime}</h1> <hr />
                                        <h1>Close-Time : {account.closetime}</h1> <hr />
                                        


                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Here tyhe list of Previous appointments */}

                        {/* Till here */}
                    </div>



                </main>

                {/* <div><Footer /></div> */}
            </div>
        </>
    )
}

export default Profile

