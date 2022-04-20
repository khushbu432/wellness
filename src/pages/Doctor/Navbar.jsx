import React from 'react'
import { Link } from 'react-router-dom'
import {FaMedrt} from 'react-icons/fa'
import { useState } from 'react'
import { ReactSession } from 'react-client-session'


function Navbar({ image, url, profileurl }) {
  const logout = () => {
    ReactSession.remove("token")

  }

  //   const handleprofile = () => {
  //       setProfile=true
  //   }
  return (
    <>
      <div class="navbar bg-neutral text-neutral-content">
        <div class="flex-none">


          <div class="dropdown">
            <label tabindex="0" for="my-drawer" class="btn drawer-button"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label>
            <ul tabindex="0" class="dropdown-content font-bold text-blue-600 menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to='/DocHome'>Todays Appoinment</Link></li>
              <li><Link to='/DocHome/Patienthistory'>Patients History</Link></li>
               <li><Link to='/DocHome/Addpatient'>Add Patient</Link></li>
              <li><Link to='/DocHome/BookAppointment'>Book Appointment</Link></li> 
              <li><Link to='/DocHome/profile'>Profile</Link></li>

            </ul>
          </div>

        </div>
        <div class="flex-1 ">
          <Link to={url} class="btn btn-ghost normal-case text-xl"><FaMedrt />Wellness</Link>
          <div class="w-3/6 m-auto" >
          <div class="form-control ">
            <div class="input-group ">
              <input type="text" placeholder="Search…"  class="input w-full rounded-l input-bordered"  />
              <button class="btn btn-square btn-outline">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
            </div>
          </div>
          </div>
        </div>

        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img src={image} />
            </div>
          </label>
          <ul tabIndex="0" class="menu font-bold text-blue-600 menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to={profileurl}>Profile</Link></li>
            <li><Link to='/' onClick={logout}>Logout</Link></li>
          </ul>
        </div>
      </div>

    </>
  )
}

export default Navbar