import React, { useState } from 'react'
import { ReactSession } from 'react-client-session'
import { FaHome, FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
// import Footer from '../components/layout/Footer'
import Navbar from './Navbar'
function Home() {
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
<h1 className='text-5xl font-bold'>Todays Appointments</h1>
          <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
          {/*   From here */}
            <div className='card shadow-md compact side bg-base-100'>
              <div className="flex-row items-center space-x-4 card-body">

                {/* Content */}
                <div class="card w-96 bg-base-100 shadow-xl">
                  <div class="card-body">
                    <h2 class="card-title">Name Of PAtient</h2>
                    <p>Bimari in short form</p>
                    <div class="card-actions justify-end">
                      <button class="btn btn-primary">Attend</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* till here 1 */}
            
          </div>
        </main>
        {/* <div><Footer /></div> */}
      </div>

    </>
  )
}

export default Home