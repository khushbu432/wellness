import React from 'react'
import { ReactSession } from 'react-client-session'
import {FaMedrt,FaHome,FaHistory,FaDatabase,FaPlus,FaUser} from 'react-icons/fa'
import {a} from 'react-router-dom'
// import {BiMenu} from 'react-icons/bi'
import PropTypes from 'prop-types'

function Navbar({ title}) {
  const logout = () => {
    ReactSession.remove("token")

  }

  return (
   <>
    <div class="navbar bg-neutral text-neutral-content">
        <div class="flex-none">


          <div class="dropdown">
            <label tabindex="0" for="my-drawer" class="btn drawer-button"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label>
            <ul tabindex="0" class="dropdown-content font-bold text-blue-600 menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a href='/Lab/Labhome'><FaHome />Dashboard</a></li>
              <li><a href='/Lab/Labhistory'><FaHistory />History</a></li>
               <li><a href='/Lab/Labinventory'><FaDatabase />Inventory</a></li>
              <li><a href='/Lab/LabAddNew'><FaPlus />Add New Order</a></li> 
            </ul>
          </div>

        </div>
        <div class="flex-1 ">
          <a  class="btn btn-ghost normal-case text-xl"> <FaMedrt />Wellness</a>
         
        </div>

        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                <FaUser />
          </label>
          <ul tabIndex="0" class="menu font-bold text-blue-600 menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a href='/Lab/Labprofile'>Profile</a></li>
            <li><a href='/Lab/Labupdateprofile'>Update Profile</a></li>
            <li><a href='/' onClick={logout}>Logout</a></li>
          </ul>
        </div>
      </div>

  </>  )
}

Navbar.defaultProps= {
    title: 'Wellness',
}
Navbar.propTypes = {
    title:PropTypes.string,
}

export default Navbar