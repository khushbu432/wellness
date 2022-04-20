import React from 'react'
import { ReactSession } from 'react-client-session'
import {FaMedrt,FaHome,FaHistory,FaDatabase,FaPlus,FaUser,FaTasks} from 'react-icons/fa'
import {a} from 'react-router-dom'
import { Link } from 'react-router-dom'
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
            <li><Link to='/Lab/Labhome'><FaHome />Dashboard</Link></li>
              <li><Link to='/Lab/Labhistory'><FaHistory />History</Link></li>
               <li><Link to='/Lab/Labinventory'><FaDatabase />Inventory</Link></li>
               {/* <li><Link to='/Lab/Labreports'><FaTasks />Reports</Link></li>
              <li><Link to='/Lab/LabAddNew'><FaPlus />Add New Order</Link></li>  */}
            </ul>
          </div>

        </div>
        <div class="flex-1 ">
          <button  class="btn btn-ghost normal-case text-xl"> <FaMedrt />Wellness</button>
         
        </div>

        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                <FaUser />
          </label>
          <ul tabIndex="0" class="menu font-bold text-blue-600 menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to='/Lab/Labprofile'>Profile</Link></li>
            <li><Link to='/Lab/Labupdateprofile'>Update Profile</Link></li>
            <li><Link to='/' onClick={logout}>Logout</Link></li>
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