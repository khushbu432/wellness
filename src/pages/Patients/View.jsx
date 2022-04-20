import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function View() {
    const [result, setResult] = useState("")
    useEffect(() => {
        fetch("https://logink123.herokuapp.com/user/findByFullname", {
            method: "POST",
            body: JSON.stringify({
                fullname: "manthandeo",
                role: "doctor"
            }),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((report) => report.json())
            .then((report) => {
                console.log('report', JSON.stringify(report, null, 2))
                setResult(report.user)
            })
    }, [])

    return (
        <>
            <div className='w-full mx-auto lg:w-10/12' >
                <div class="overflow-x-auto w-full">

                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th>Doctors</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>View all</th>
                            </tr>
                        </thead>
                    </table>
                </div>

                <div className='w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats'>
                {result.map((curElem) => {
                  return (
                    <>
                        <div className="stat">
                            1234
                        </div>
                    </>
              )
              })}

                   
                </div>
            </div>
        </>
    )
}
