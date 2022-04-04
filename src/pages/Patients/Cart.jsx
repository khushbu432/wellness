import React from 'react'
import Navbar from './Navbar'
import { ReactSession } from 'react-client-session'
import { useState } from 'react'
// import Footer from '../components/layout/Footer'



export default function Cart() {
    const temp = ReactSession.get("token")

    const [string, setString] = useState("https://api.lorem.space/image/face?hash=8877")
    const url = '/PatientHome'
    const profileurl = '/PatientHome/Profile'
    return (
        <>

            <div className='flex flex-col justify-between bg-slate-200 h-screen'>
                <Navbar image={string} url={url} profileurl={profileurl} />
                <h1 className='text-5xl font-bold text-left pl-5'>Shopping Cart</h1>
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
                                                {/* only for medicine */}
                                                <select class="select select-bordered w-full max-w-xs">
                                                    <option selected>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>

                                                </select>
                                            </td>
                                            <td>
                                                
                                            <div class="font-bold">$1156.00</div>
                                            </td>
                                            <th>
                                                <button class="btn btn-ghost btn-outline ">remove</button>
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
                                            <button class="btn btn-outline ">Place Order</button>
                                            </th>
                                        </tr>
                                    </tfoot>

                                </table>
                            </div>


                        </div>
                        <div class="grid h-full flex-grow card bg-base-300 rounded-box place-items-center">
                            <div class="card w-96 bg-base-100 shadow-xl">
                                <div class="card-body">
                                    <h2 class="card-title">Total Price : USD 568</h2>
                                    <h2 class="card-title">Discount : USD 658</h2>
                                    <hr />
                                    <div class="card-actions justify-center">
                                        <img src='https://arenenailspa.com/wp-content/uploads/2020/09/Essential-Minimal-Payment-Icons-removebg-preview-1.png'>
                                        </img>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    




                </main>
                {/* <div><Footer /></div> */}
            </div>
        </>
    )
}
