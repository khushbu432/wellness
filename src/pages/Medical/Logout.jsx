import React from 'react'
import { ReactSession } from 'react-client-session'
import { useNavigate } from 'react-router-dom';

function Logout() {
    ReactSession.unset("account")
  return (
    <>
        
    </>
  )
}

export default Logout