import React, { useState } from 'react'

function DataLength(props) {
    console.log('Data Length Component');
    const { lengthData } = props;
  return (
    <div>
        <p>Number of Data : <b>{lengthData}</b></p>
    </div>
  )
}

export default DataLength