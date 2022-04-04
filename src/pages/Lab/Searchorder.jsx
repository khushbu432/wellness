import React,{useState,useEffect} from 'react'
import {FaSearch} from 'react-icons/fa'

function Search() {
  
const [input,setInput] =useState("")
const [result,setResult] = useState([])
const url="https://logink123.herokuapp.com/user/findByFullname"
const options = {
  method: 'POST',
  body: JSON.stringify({
      fullname: input,
      role:"doctor"
  }),
  headers: {
      'Content-Type': 'application/json'
  }
}
useEffect(() =>{
  fetch(url,options)
  .then(res => res.json())
  .then(data => setResult(data.user))
})
 return (
  <>
          <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>

    <form>
          <div className='searchbar form-control'>
          <div className='relative '>
            <input
              type='text'
              className='w-full  input input-lg text-black'
              onChange={(e) => setInput(e.target.value)}
              placeholder='Search order'
            />

            <button
              className='absolute top-0 right-0 rounded-l-none w-46 btn text-2xl btn-lg ' >
              <FaSearch />
            </button>

          </div>
          </div>
        </form>
        <br />
        <div>

        {
                  result.map((curElem) => {
                    return(
                      <div className='flex-1'>
                        <h4>{curElem.fullname}</h4>
                      </div>
                    )
                  })
        }
        </div>
        </div>
  </>
)
}


export default Search