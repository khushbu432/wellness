import React from 'react'
import Navbar from './Navbar'
import { useEffect } from 'react'
import { ReactSession } from 'react-client-session'
import { useState } from 'react'
// import Footer from '../components/Footer'
import { FaCartPlus } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';



export default function Viewstore() {
  const navigate = useNavigate()
  const temp = ReactSession.get("token")
  const pharmaid = ReactSession.get("pharmaid")
  const role = ReactSession.get("userrole")
  // console.log(role);
  const [rolestatus, setRolestatus] = useState("")

  const [result, setResult] = useState("")
  const [fname, setFname] = useState("")
  const [smed, setsmed] = useState("")
  const [option, setOption] = useState("")
  const [cardinput, setCardinput] = useState("")


  useEffect(() => {
    if (role == "laboratory") {
      fetch(`https://logink123.herokuapp.com/test/find?addedBy=${pharmaid}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((report) => report.json())
        .then((report) => {
          console.log('report', JSON.stringify(report, null, 2))
          setResult(report.testFound)
          // setFname(report.data[0]["addedBy"].fullname)

        })
    }
    else if (role == "pharmacy") 
    {
      fetch(`https://logink123.herokuapp.com/drug/findDrug?addedBy=${pharmaid}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((report) => report.json())
      .then((report) => {
        console.log('report', JSON.stringify(report, null, 2))
        setResult(report.data)
        setFname(report.data[0]["addedBy"].fullname)

      })
    }

  }, [smed])

  

  const [string, setString] = useState("https://api.lorem.space/image/face?hash=8877")
  const url = '/PatientHome'
  const profileurl = '/PatientHome/Profile'

  const searchmed = (e)=>{
    setsmed(e.target.value)
    fetch(`https://logink123.herokuapp.com/drug/findDrug?${option}=${smed}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((report) => report.json())
      .then((report) => {
        console.log('report', JSON.stringify(report, null, 2))
        setResult(report.data)
        setFname(report.data[0]["addedBy"].fullname)

      })

  }

  const [theArray, setTheArray] = useState([]);

  // setTheArray(oldArray => [...oldArray, newElement]);
// setTheArray([...theArray, newElement]);

const addcart = (e) => {
  setCardinput(e.target.value)
  theArray.push(e.target.value)
// setTheArray(theArray => [...theArray, e.target.value]);
          ReactSession.set("cart",theArray)

console.log(theArray);
}
  return (
    <>
      <div className='flex flex-col justify-between bg-slate-200 h-screen'>
        <Navbar image={string} url={url} profileurl={profileurl} />
        <main className='container mx-auto h-100% px-3 pb-12 overflow-auto'>
        
          {role == "pharmacy" && (
            <div>
              <div class="form-control ">
  
  <label class="input-group">
    
  <input className='block bg-white w-3/6  mt-4 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' placeholder="Search Medicines..." value={smed} onChange={searchmed} type="text" name="search"/>
  <select class="block bg-white  mt-4 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"  onChange={(o) => setOption(o.target.value)}>
              <option>drugName</option>
              <option>price</option>
              <option>level</option>
              <option>power</option>
            </select>
   
  </label>
</div>
              <div className='input-group'>
              
              <div className="float-left">
              
        
              </div>
              
              </div>
             
              {result.length > 0 && (
            <>
            <h1 className='text-5xl font-bold'>{fname} Medicals</h1>
              <hr />
                <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 '>
                  {result.map((curElem) => {
                    return (
                      < >
                        {/*   From here */}
                        <div className="flex-row items-center space-x-4 card-body">
                          {/* Content */}
                          <div class="card w-96 bg-base-100 shadow-xl">
                            <div class="card-body">
                              <h2 class="card-title">Medicine :  {curElem.drugName}</h2>
                              <p>Company: {curElem.company}</p>
                              <p>Price: {curElem.price}</p>
                              <p>Power: {curElem.power}</p>
                              <div class="card-actions justify-end">
                                <button class="btn btn-primary" onClick={addcart} value={curElem._id} ><FaCartPlus /> Add to cart</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* till here 1 */}
                      </>
                    )
                  })}
                </div>
                </>
              )}

            </div>
          )}
          {/* Lab */}
          {role == "laboratory" && (
            <div>
              <h1 className='text-5xl font-bold'>{fname} Laboratory</h1>
              <hr />

              {result.length > 0 && (
                <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 '>
                  {result.map((curElem) => {
                    return (
                      < >
                        {/*   From here */}
                        <div className="flex-row items-center space-x-4 card-body">
                          {/* Content */}
                          <div class="card w-96 bg-base-100 shadow-xl">
                            <div class="card-body">
                              <h2 class="card-title">Test :  {curElem.testname}</h2>
                              <p>Price: {curElem.price}</p>
                              <div class="card-actions justify-end">
                                <button class="btn btn-primary" value={curElem._id} ><FaCartPlus /> Add to cart</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* till here 1 */}
                      </>
                    )
                  })}
                </div>
              )}

            </div>
          )}

        </main>

        {/* <div><Footer /></div> */}
      </div>
    </>
  )
}
