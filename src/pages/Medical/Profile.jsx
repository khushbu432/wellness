import React,{useState,useEffect} from 'react'
import { ReactSession } from 'react-client-session'
import Navbar from './Navbar'


function Profile() {
    const [input,setInput] =useState("")
    const [result,setResult] = useState([])
    const account=ReactSession.get("account")
    // // const url="https://logink123.herokuapp.com/user/findByFullname"
    // // const options = {
    // //   method: 'POST',
    // //   body: JSON.stringify({
    // //       fullname: input,
    // //       role:"doctor"
    // //   }),
    // //   headers: {
    // //       'Content-Type': 'application/json'
    // //   }
    // // }
    // // useEffect(() =>{
    // //   fetch(url,options)
    // //   .then(res => res.json())
    // //   .then(data => setResult(data.user))
    // // })
    // console.log(account.username)
    return (
        <>
        <Navbar />
    <div className='items-center justisy-center ml-80 w-1/2 bg-gray-200 '>
       <div> <h1 className="text-5xl ml-60 mb-20 pt-20">Profile</h1> </div>
        <div className="ml-60">
  <table class="table ">
      <tr>
          <td>Name :</td>
          <td>{account.fullname}</td>
      </tr>
      <tr>
          <td>Fullname:</td>
          <td>{account.fullname}</td>
      </tr>
      <tr>
          <td>Mobile No:</td>
          <td>{account.mobile}</td>
      </tr>
      <tr>
          <td>Email:</td>
          <td>{account.email}</td>
      </tr> 
  </table>
</div>
    </div>
    </>
  )
}

export default Profile