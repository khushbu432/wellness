import React from 'react'
import { a } from 'react-router-dom'
import { useState } from 'react'
import { ReactSession } from 'react-client-session'
import { useNavigate } from 'react-router-dom';



function Navbar() {
  const navigate = useNavigate()

  const logout = () => {
    ReactSession.remove("token")

  }
  const redirecttocart = () =>{
    navigate('/PatientHome/cart', { replace: true });

  }

  return (
    <>
    <div class="navbar bg-neutral text-neutral-content">
      <div class="flex-none">

      <div class="dropdown">
  <label tabindex="0" for="my-drawer" class="btn drawer-button"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label>
  <ul tabindex="0" class="dropdown-content font-bold text-blue-600 menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a href='/PatientHome/Profile'>Profile</a></li>
    <li><a href='/PatientHome/PrevOrder'>Orders</a></li>
    <li><a href='/PatientHome/Cart'>Cart</a></li>
    
  </ul>
</div>
      </div>
      <div class="flex-1 justify-center">
        <a  class="btn btn-ghost normal-case text-xl">Wellness</a>
      </div>

      
{/*   CART */}
<div class="flex-none">
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span class="badge badge-sm indicator-item">8</span>
        </div>
      </label>
      <div tabindex="0" class="mt-3 font-bold text-blue-600 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div class="card-body">
          <span class="font-bold text-lg">8 Items</span>
          <span class="text-info text-blue-700">Subtotal: $999</span>
          <div class="card-actions">
            <button onClick={redirecttocart} class="btn btn-block">View cart</button>
          </div>
        </div>
      </div>
      </div>
      </div>


{/*  */}
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img/>
          </div>
        </label>
        <ul tabIndex="0" class="menu font-bold text-blue-600 menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Profile</a></li>
          <li><a href='/' onClick={logout}>Logout</a></li>
        </ul>
      </div>
    </div>
</>
  )
}

export default Navbar