import React from 'react'
import Navbar from './Navbar'
import { ReactSession } from 'react-client-session'
import { useState } from 'react'
// import Footer from '../components/Footer'



export default function PrevOrder() {
    const temp = ReactSession.get("token")

    const [string, setString] = useState("https://api.lorem.space/image/face?hash=8877")
    const url = '/PatientHome'
    const profileurl = '/PatientHome/Profile'
    return (
        <>

            <div className='flex flex-col justify-between bg-slate-200 h-screen'>
                <Navbar image={string} url={url} profileurl={profileurl} />
                <h1 className='text-5xl font-bold text-left pl-5'>Previous Orders</h1>
                <main className='container mx-auto px-3 pb-12'>
                    <div class="flex w-full">
                        <div class="grid flex-grow card bg-base-300 rounded-box place-items-center">
                            <div class="overflow-x-auto w-full">
                                <table class="table w-full">
                                    <thead>
                                        <tr>
                                            <th>
                                                <label>
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
                                                        <div class="font-bold">Hart Hagerty</div>
                                                        <div class="text-sm opacity-50">United States</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                
                                            <div class="font-bold">1</div>

                                            </td>
                                            <td>
                                                
                                            <div class="font-bold">$1156.00</div>
                                            </td>
                                            <th>
                                                <button class="btn btn-ghost btn-outline ">Details</button>
                                            </th>
                                        </tr>

                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th> </th>
                                            <th>
                                            </th>
                                        </tr>
                                    </tfoot>

                                </table>
                            </div>


                        </div>
                      </div>
                </main>
                {/* <div><Footer /></div> */}
            </div>
        </>
    )
}
