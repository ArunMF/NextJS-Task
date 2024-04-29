'use client'
import { useSearchParams } from "next/navigation"
import './viewDet.css'
import CheckEligibility from '@/Components/CheckEligibility/CheckEligibility'
import { useEffect, useRef, useState } from "react"

function viewDetails() {
  console.log('View Details Component')
  const searchParams = useSearchParams()
  const id = searchParams.get('userId')
  const [data,setData] = useState({})
  const eligbRef = useRef()

  const fetchData = async () => {
    try {
      const response = await fetch('/data.json'); // Assuming data.json is in the public directory
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      setData(jsonData.data.find(item => item.id == id));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(()=>{
    fetchData();
  },[])

  const handleClick = () => {
    eligbRef.current.checkEligible()
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>First-Task</h1>
      <div id="detDiv">
        <h2>{data.name}</h2>
        <p><b><i>"{data.description}"</i></b></p>
        <p>
          <span style={{ marginRight: "50px" }}>Created At : <b>{data.createdAt}</b></span>
          {
            data.status == 'Online' ?
              <span style={{ color: "green" }}>Status : <b>{data.status}</b></span> :
              <span style={{ color: "red" }}>Status : <b>{data.status}</b></span>
          }
        </p>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
          <button style={{ backgroundColor: "green", width:"130px" }} onClick={handleClick}>Check Eligibility</button>
        </div>
        <CheckEligibility data={data} ref={eligbRef} />
      </div>
    </div>
  )
}

export default viewDetails