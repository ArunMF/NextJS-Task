'use client'
import { useSearchParams } from "next/navigation"
import './viewDet.css'
import CheckEligibility from '@/Components/CheckEligibility/CheckEligibility'
import { useRef } from "react"

function viewDetails() {
  console.log('View Details Component')
  const searchParams = useSearchParams()
  const userdata = {
    userId : searchParams.get('userId'),
    name : searchParams.get('username'),
    age : searchParams.get('userAge'),
    description : searchParams.get('userDesc'),
    createdDate : searchParams.get('userDate'),
    status : searchParams.get('userStatus')
  }
  const id = searchParams.get('userId')
  const eligbRef = useRef()

  const handleClick = ()=>{
    eligbRef.current.checkEligible()
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>First-Task</h1>
      <div id="detDiv">
        <h2>{userdata.name}</h2>
        <p><b><i>"{userdata.description}"</i></b></p>
        <p>
          <span style={{ marginRight: "50px" }}>Created At : <b>{userdata.createdDate}</b></span>
          {
            userdata.status == 'Online' ?
              <span style={{ color: "green" }}>Status : <b>{userdata.status}</b></span> :
              <span style={{ color: "red" }}>Status : <b>{userdata.status}</b></span>
          }
        </p>
        <div style={{display:"flex", justifyContent:"center", marginTop:"30px"}}>
          <button style={{ backgroundColor: "green" }} onClick={handleClick}>Check Eligibility</button>
        </div>
        <CheckEligibility data={userdata} ref={eligbRef} />
      </div>
    </div>
  )
}

export default viewDetails