import React, { useState } from 'react'
import { data } from 'react-router-dom'

const App = () => {
 const [data,setData]=useState({fname:'',lname:''})

const saveForm=(e)=>
{
   alert('form submitted')
   e.preventDefault();
   console.log(data)
   setData({fname:'',lname:''})
}


const dataHandler=(e)=>
{
//  console.log(e.target.value);
 const{name,value} =e.target;
 setData({...data,[name]:value})
 
}
  return (
    <>
  <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-4">

        <form onSubmit={saveForm}>

          {/* <!-- First Name --> */}
          <div className="mb-3">
            <label htmlFor="fname" className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              id="fname"
              name="fname"
              value={data.fname}
              onChange={dataHandler}
            />
          </div>

          {/* <!-- Last Name --> */}
          <div className="mb-3">
            <label htmlFor="lname" className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lname"
              name="lname"
              value={data.lname}
              onChange={dataHandler}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>

        </form>

      </div>
    </div>
  </div>



    
    </>
  )
}

export default App