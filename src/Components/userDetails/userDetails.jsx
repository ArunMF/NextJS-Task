'use client'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import DataRow from '@/Components/DataRow/DataRow'
import DataLength from '@/Components/DataLength/DataLength'
import ChildComp from '@/Components/ChildComp/ChildComp'
import './userDetails.css'
function allDetails() {

    console.log('All Data Component');
    const [allData, setAllData] = useState([])
    const [onlineData, setOnlineData] = useState([])
    const [offlineData, setOfflineData] = useState([])
    const [checkValue, setValue] = useState('')

    const fetchData = async() =>{
        try {
            const response = await fetch('/data.json'); // Assuming data.json is in the public directory
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
            const jsonData = await response.json();
            console.log(jsonData);
            setAllData(jsonData.data);
            setOnlineData((jsonData.data).filter(item => item.status == 'Online'))
            setOfflineData((jsonData.data).filter(item => item.status == 'Offline'))
          } catch (error) {
            console.error('Error fetching data:', error);
          }
    }

    useEffect(()=>{
        fetchData();
    },[])

    function checking() {
        setValue('checked.')
    }


    const length = useMemo(() => {
        return allData.length
    }, [allData.length])

    const changeData = useCallback((value) => {
        if (value == 'Online') {
            setAllData(onlineData);
        } else if (value == 'Offline') {
            setAllData(offlineData)
        } 
    }, [allData])


    return (
        <div>
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
                                            userId: item.id
                                        }
                                    }} style={{ textDecoration: "none", margin:"10px" }}>
                                        <DataRow itemdata={item} />
                                    </Link>
                            ))
                        }
                    </div>
                </div>
        </div>
    )
}

export default allDetails