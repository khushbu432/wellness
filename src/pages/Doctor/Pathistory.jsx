import React, { useState } from 'react'
import { ReactSession } from 'react-client-session'
import { FaHome, FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
// import Footer from '../components/layout/Footer'
import Navbar from './Navbar'


function Pathistory() {
  const temp = ReactSession.get("token")

 
  const [string, setString] = useState("https://t3.ftcdn.net/jpg/02/60/04/08/360_F_260040863_fYxB1SnrzgJ9AOkcT0hoe7IEFtsPiHAD.jpg")
  const url = '/DocHome'
  const profileurl = '/DocHome/profile'


  return (
    <>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar image={string} url={url} profileurl={profileurl} />
        <main className='container mx-auto px-3 pb-12'>
          {/*    */}
          <h1 className='text-5xl font-bold'>Previous Appointments</h1>

          <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Bimari</th>
        <th>Date</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr class="hover">
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>05-87-4512</td>
        <td><button className="btn btn-outline">Detail</button></td>
      </tr>
      {/* till here */}
      <tr class="hover">
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>05-87-4512</td>
        <td><button className="btn btn-outline">Detail</button></td>

      </tr>
      <tr class="hover">
        <th >3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>05-87-4512</td>
        <td><button className="btn btn-outline">Detail</button></td>

      </tr>
    </tbody>
  </table>
</div>
        </main>
        {/* <div><Footer /></div> */}
      </div>

    </>
  )
}

export default Pathistory