'use client'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import DataRow from '@/Components/DataRow/DataRow'
import DataLength from '@/Components/DataLength/DataLength'
import ChildComp from '@/Components/ChildComp/ChildComp'
import data from '@/app/data.json'
import './allDet.css'
function allDetails() {

    console.log('All Data Component');
    const [allData, setAllData] = useState(data.data)
    const [checkValue, setValue] = useState('')

    const onlineData = (data.data).filter(item => item.status == 'Online');
    const offlineData = (data.data).filter(item => item.status == 'Offline');

    function checking() {
        setValue('checked.')
    }


    const length = useMemo(() => {
        return allData.length
    }, [allData.length])

    const changeData = useCallback((value) => {
        if (value == 'Online') {
            setAllData((data.data).filter(item => item.status == 'Online'));
        } else if (value == 'Offline') {
            setAllData(offlineData)
        } 
    }, [allData])


    return (
        <div>
            <div style={{ padding: '20px' }}>
                <h1>First-Task</h1>
                <div>
                    <h2 style={{ textAlign: "center" }}>All user details</h2>
                    <div style={{ display: "flex", justifyContent: "end" }}>
                        <button onClick={checking}>Check</button>
                    </div>
                    <div>
                        <ChildComp changeData={changeData} />
                        <div style={{ display: "flex", justifyContent: "end", paddingRight: "20px" }}>
                            <DataLength lengthData={length} />
                            {/* <button onClick={checking}>Check</button> */}
                        </div>
                    </div>
                    <div style={{ width: "100%", borderTop: "1px solid black" }}>
                        <div style={{ display: 'flex', borderBottom: "1px solid black" }}>
                            <div className='detDiv' style={{ width: "10%", fontSize: "25px" }}><p><b>ID</b></p></div>
                            <div className='detDiv' style={{ width: "20%", fontSize: "25px" }}><p><b>Name</b></p></div>
                            <div className='detDiv' style={{ width: "10%", fontSize: "25px" }}><p><b>Age</b></p></div>
                            <div className='detDiv' style={{ width: "40%", fontSize: "25px" }}><p><b>Description</b></p></div>
                            <div className='detDiv' style={{ width: "20%", fontSize: "25px" }}><p><b>Status & Date</b></p></div>
                        </div>

                        {
                            allData.map((item) => (
                                    <Link key={item.id} href={{
                                        pathname: '/viewDetails',
                                        query: {
                                            userId: item.id,
                                            username: item.name,
                                            userAge: item.age,
                                            userDesc: item.description,
                                            userStatus: item.status,
                                            userDate: item.createdAt
                                        }
                                    }} style={{ textDecoration: "none", margin:"10px" }}>
                                        <DataRow itemdata={item} />
                                    </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default allDetails