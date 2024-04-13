import React from 'react'
import './DataRow.css'
function DataRow(props) {
  
  // console.log('DATAROW COMPONENT');
  const { itemdata } = props;
  return (
    <div id='mainDiv'>
      <div className='detDiv' style={{ width: "10%"}}><p><b>{itemdata.id}</b></p></div>
      <div className='detDiv' style={{ width: "20%", border: "1px solid black" }}><p><b>{itemdata.name}</b></p></div>
      <div className='detDiv' style={{ width: "10%" }}><p><b>{itemdata.age}</b></p></div>
      <div className='detDiv' style={{ width: "40%", border: "1px solid black" }}><p>{itemdata.description}</p></div>
      <div className='detDiv' style={{ width: "20%" }}>
        <b>
          {
            itemdata.status == 'Online' ? <p style={{ color: "green" }}>{itemdata.status}</p> : <p style={{ color: "red" }}>{itemdata.status}</p>
          }
          <p>{itemdata.createdAt}</p>
        </b>
      </div>
    </div>
  )
}

export default DataRow