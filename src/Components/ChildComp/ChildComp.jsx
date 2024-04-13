import React, { memo } from 'react'
import './ChildComp.css'
function ChildComp({ changeData }) {
    console.log('Child Component')
    return (
        <div style={{ display: "flex", justifyContent: "start" }}>
            <button onClick={() => changeData('Online')} style={{ backgroundColor: "green" }}>Online</button>
            <button onClick={() => changeData('Offline')} style={{ backgroundColor: "red" }}>Offline</button>
        </div>
    )
}

export default memo(ChildComp)