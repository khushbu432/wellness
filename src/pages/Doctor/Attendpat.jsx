import React, { useEffect, useState } from 'react'
import { ReactSession } from 'react-client-session'
import { useNavigate } from 'react-router-dom';

function Attendpat() {
  const appointmentid = ReactSession.get("attendpat")
  const [result, setResult] = useState("")
  const [fullname, setFullname] = useState("")
  const [diagnosis, setDiagnosis] = useState("")
  const [number, setNumber] = useState("")
  const [dob, setDob] = useState("")
  const [mail, setMail] = useState("")
  const [temp, setTemp] = useState(1)
  const [temptest, setTemptest] = useState(1)
  const navigate = useNavigate()

  useEffect(async() => {
    fetch(`https://logink123.herokuapp.com/appoinment/find?_id=${appointmentid}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((report) => report.json())
      .then((report) => {
        console.log('report', JSON.stringify(report, null, 2))
        setResult(report.data[0]);
        setFullname(result.patient_id.fullname)
        setNumber(result.patient_id.mobile)
        setMail(result.patient_id.email)
        setDob(new Date(result.patient_id.birthdate).toISOString().split('T')[0])

      })
  }, [])



  // 
  const inputArr = [
    {
      type: "text",
      id: 1,
      value: ""
    }
  ];

  const [arr, setArr] = useState(inputArr);

  const addInput = () => {
    setArr(s => {
      return [
        ...s,
        {
          type: "text",
          value: ""
        }
      ];
    });
    setTemp(temp + 1)
// console.log(arr);

  };

  const handleChange = e => {
    e.preventDefault();

    const index = e.target.id;
    setArr(s => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;

      return newArr;
    });
  };
//

const inputArrtest = [
  {
    type: "text",
    id: 1,
    value: ""
  }
];

const [arrtest, setArrtest] = useState(inputArrtest);

const addInputtest = () => {
  setArrtest(t => {
    return [
      ...t,
      {
        type: "text",
        value: ""
      }
    ];
  });
  setTemptest(temptest + 1)
// console.log(arrtest);

};
const handleTest = e => {
  e.preventDefault();

  const index = e.target.id;
  setArrtest(s => {
    const newArr = s.slice();
    newArr[index].value = e.target.value;

    return newArr;
  });
};
//
const newarr = arr.map((value,index,array)=>{
  // console.log(arr[index].value)
  return arr[index].value;
})

const newarrtest = arrtest.map((value,index,array)=>{
  // console.log(arrtest[index].value)
  return arrtest[index].value;
})

const handleComplete = () => {
  console.log(diagnosis);
console.log(newarrtest);
console.log(newarr);


fetch("https://logink123.herokuapp.com/appoinment/prescription", {
  method: "POST",
  body: JSON.stringify({
    "_id":appointmentid,
    "drug":newarr,
    "test":newarrtest
    
  }),
    headers: {
    "Content-Type": "application/json",
  },
}).then((report) => report.json())
  .then((report) => {
    console.log('report', JSON.stringify(report, null, 2))
    if(report.succes == true)
    {
      alert("done")
    }
    else{
      alert("error")
    }
  })

  // 

  fetch("https://logink123.herokuapp.com/appoinment/completed", {
  method: "POST",
  body: JSON.stringify({
    "_id":appointmentid,
    "completed":true   
  }),
    headers: {
    "Content-Type": "application/json",
  },
}).then((report) => report.json())
  .then((report) => {
    console.log('report', JSON.stringify(report, null, 2))
    if(report.succes == true)
    {
      alert("done")
    }
    else{
      alert("error")
    }
  })
    navigate('/DocHome', { replace: true });


}

  return (
    <div>
      <div class="min-h-screen bg-base-200 mx-auto">
        <div class="flex">
          <div class="grid flex-grow card rounded-box place-items-center">
            <div class="card w-96 bg-base-100 shadow-xl ">

              <div class="card-body items-center text-center max-h-screen">
                <div className="col-span-2">

                  <div className="mb-6">
                    <h1 className="text-3xl card-title">
                      {fullname}
                    </h1>
                    <div className="mt-4 text-xl text-left block card-actions">
                      <h1> Phone : {number}</h1>  <hr />
                      <h1>Mail Id: {mail}</h1> <hr />
                      <h1>DOB : {dob}</h1> <hr />

                    </div>
                  </div>
                </div>
                <div className='overflow-auto '>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Diagnosis</span>
                    </label>
                    <textarea type="text" placeholder="Diagnosis" class="input input-bordered" value={diagnosis} onChange={(e) => setDiagnosis(e.target.value)} />
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text"><u>Description : </u></span>
                    </label>
                    <label class="label">
                      <span class="label-text">Medicine  </span>
                    </label>
                    {/*  */}
                    <div>
                      
                      {arr.map((item, i) => {
                        return (
                          <input
                            onChange={handleChange}
                            value={item.value}
                            id={i}
                            type="text"
                            size="40"
                            placeholder='Medicines'
                            class="input input-bordered"
                          />
                        );
                      })}
                      {temp != 5 && (
                        <div>
                          <button className='btn btn-outline btn-primary' onClick={addInput}>+</button>
                        </div>
                      )}
                    </div>
                  </div>

                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Tests</span>
                    </label>
                     {/*  */}
                     <div>
                     
                      {arrtest.map((item, i) => {
                        return (
                          <input
                            onChange={handleTest}
                            value={item.value}
                            id={i}
                            type="text"
                            size="40"
                            placeholder='Tests'
                            class="input input-bordered"
                          />
                        );
                      })}
                       {temptest != 5 && (
                        <div>
                          <button className='btn btn-outline btn-primary' onClick={addInputtest}>+</button>
                        </div>
                      )}
                    </div>

                  </div>
                  <div class="form-control mt-6">
                    <button class="btn btn-primary" onClick={handleComplete}>Completed</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="divider divider-horizontal"></div>
          <div class="grid flex-grow card bg-base-300 rounded-box place-items-center">

            <div class="card w-full bg-base-100 shadow-xl max-h-screen">
              <h1 class="card-title btn btn-primary">Patient History</h1>

              <div class="overflow-auto ">
                <table class="table w-full border-2 ">
                  <thead >
                    <tr  >
                      <th></th>
                      <th>Bimari</th>
                      <th>Prescription</th>
                      <th>Favorite Color</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="hover">
                      <th>1</th>
                      <td>Cy Ganderton</td>
                      <td>Quality Control Specialist</td>
                      <td>Blue</td>
                    </tr>
                    <tr class="hover">
                      <th>2</th>
                      <td>Hart Hagerty</td>
                      <td>Desktop Support Technician</td>
                      <td>Purple</td>
                    </tr>
                    <tr class="hover">
                      <th>3</th>
                      <td>Brice Swyre</td>
                      <td>Tax Accountant</td>
                      <td>Red</td>
                    </tr>
                    <tr class="hover">
                      <th>1</th>
                      <td>Cy Ganderton</td>
                      <td>Quality Control Specialist</td>
                      <td>Blue</td>
                    </tr>
                    <tr class="hover">
                      <th>2</th>
                      <td>Hart Hagerty</td>
                      <td>Desktop Support Technician</td>
                      <td>Purple</td>
                    </tr>
                    <tr class="hover">
                      <th>3</th>
                      <td>Brice Swyre</td>
                      <td>Tax Accountant</td>
                      <td>Red</td>
                    </tr>
                    <tr class="hover">
                      <th>1</th>
                      <td>Cy Ganderton</td>
                      <td>Quality Control Specialist</td>
                      <td>Blue</td>
                    </tr>
                    <tr class="hover">
                      <th>2</th>
                      <td>Hart Hagerty</td>
                      <td>Desktop Support Technician</td>
                      <td>Purple</td>
                    </tr>
                    <tr class="hover">
                      <th>3</th>
                      <td>Brice Swyre</td>
                      <td>Tax Accountant</td>
                      <td>Red</td>
                    </tr>
                    <tr class="hover">
                      <th>1</th>
                      <td>Cy Ganderton</td>
                      <td>Quality Control Specialist</td>
                      <td>Blue</td>
                    </tr>
                    <tr class="hover">
                      <th>2</th>
                      <td>Hart Hagerty</td>
                      <td>Desktop Support Technician</td>
                      <td>Purple</td>
                    </tr>
                    <tr class="hover">
                      <th>3</th>
                      <td>Brice Swyre</td>
                      <td>Tax Accountant</td>
                      <td>Red</td>
                    </tr>
                    <tr class="hover">
                      <th>1</th>
                      <td>Cy Ganderton</td>
                      <td>Quality Control Specialist</td>
                      <td>Blue</td>
                    </tr>
                    <tr class="hover">
                      <th>2</th>
                      <td>Hart Hagerty</td>
                      <td>Desktop Support Technician</td>
                      <td>Purple</td>
                    </tr>
                    <tr class="hover">
                      <th>3</th>
                      <td>Brice Swyre</td>
                      <td>Tax Accountant</td>
                      <td>Red</td>
                    </tr>
                    <tr class="hover">
                      <th>1</th>
                      <td>Cy Ganderton</td>
                      <td>Quality Control Specialist</td>
                      <td>Blue</td>
                    </tr>
                    <tr class="hover">
                      <th>2</th>
                      <td>Hart Hagerty</td>
                      <td>Desktop Support Technician</td>
                      <td>Purple</td>
                    </tr>
                    <tr class="hover">
                      <th>3</th>
                      <td>Brice Swyre</td>
                      <td>Tax Accountant</td>
                      <td>Red</td>
                    </tr>


                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Attendpat