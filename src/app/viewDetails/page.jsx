'use client'
import { useSearchParams } from "next/navigation"
import '../viewDetails/viewDet.css'

async function viewDetails() {

  const searchParams = useSearchParams()
  const id = searchParams.get('userId')

  return (
    <div style={{ padding: '20px' }}>
      <h1>First-Task</h1>
      <div id="detDiv">
        <h2>{searchParams.get('username')}</h2>
        <p><b><i>"{searchParams.get('userDesc')}"</i></b></p>
        <p>
          <span>Created At : <b>{searchParams.get('userDate')}</b></span>
          {
            searchParams.get('userStatus') == 'Online' ?
            <span style={{color:"green"}}>Status : <b>{searchParams.get('userStatus')}</b></span> :
            <span style={{color:"red"}}>Status : <b>{searchParams.get('userStatus')}</b></span>
          }
        </p>
      </div>

    </div>
  )
}

export default viewDetails