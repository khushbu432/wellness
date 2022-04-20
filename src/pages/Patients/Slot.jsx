import React,{useState} from 'react'
import {FaClock} from 'react-icons/fa'

export default function Slot(props) {
    // const [time,setTime] = useState("")
// const savetime = (e) => {
// time = e.target.value
// console.log(time);
// }
    return (
        <div>
            <div class="overflow-auto h-26 item-center w-full">
<input type="time" onChange={(e)=> props.timing(e.target.value)} value="props.timing" />
            {/* <table>
                <thead>
                    <tr>
                        <th colSpan='5'></th>
                    </tr>
                </thead>
                <tbody class="overflow-auto h-20 w-full">
                    <tr>
                        <td><button className='btn'><FaClock/></button> <br/> 08:00</td>
                        <td><button className='btn'><FaClock/></button> <br/> 08:15</td>
                        <td><button className='btn'><FaClock/></button> <br/> 08:20</td>
                        <td><button className='btn'><FaClock/></button> <br/> 08:25</td>
                        <td><button className='btn'><FaClock/></button> <br/> 08:30</td>
                        <td><button className='btn'><FaClock/></button> <br/> 12:30</td>
                        <td><button className='btn'><FaClock/></button> <br/> 12:30</td>
                        <td><button className='btn'><FaClock/></button> <br/> 12:30</td>
                    </tr>
                    <hr />
                    <tr>
                        <td><button className='btn'><FaClock/></button> <br/> 12:30</td>
                        <td><button className='btn'><FaClock/></button> <br/> 12:30</td>
                        <td><button className='btn'><FaClock/></button> <br/> 12:30</td>
                        <td><button className='btn'><FaClock/></button> <br/> 12:30</td>
                        <td><button className='btn'><FaClock/></button> <br/> 12:30</td>
                        <td><button className='btn'><FaClock/></button> <br/> 12:30</td>
                        <td><button className='btn'><FaClock/></button> <br/> 12:30</td>
                        <td><button className='btn'><FaClock/></button> <br/> 12:30</td>
                    </tr>
                    <hr />
                    <tr>
                        <td><button className='btn'><FaClock/></button> <br/> 12:30</td>
                        <td><button className='btn'><FaClock/></button> <br/> 12:30</td>
                        <td><button className='btn'><FaClock/></button> <br/> 12:30</td>
                        <td><button className='btn'><FaClock/></button> <br/> 12:30</td>
                        <td><button className='btn'><FaClock/></button> <br/> 12:30</td>
                        <td><button className='btn'><FaClock/></button> <br/> 12:30</td>
                        <td><button className='btn'><FaClock/></button> <br/> 12:30</td>
                        <td><button className='btn'><FaClock/></button> <br/> 12:30</td>
                    </tr>
                </tbody>
            </table> */}

                {/* <table >
                    <thead>
                        <tr>
                            <th>
                                Empty/Fill
                            </th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody class="overflow-auto w-full">
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" class="checkbox" onClick={(e)=> props.timing(e.target.value)} value='19:20:15'/>
                                </label>
                            </th>
                            <td>
                                <div class="flex items-center space-x-3">
                                    <div>
                                        <div class="font-bold">19:20:15</div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        
                    </tbody>
                </table> */}
            </div>
        </div>
    )
}
