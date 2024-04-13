import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'

const CheckEligibility = forwardRef((props,ref)=> {

    const { data } = props;
    const [message,setMsg] = useState('')
    const messageRef = useRef()
  
    useImperativeHandle(ref,()=>({
      checkEligible(){
        if (data.age>=18) {
            messageRef.current.style.color = "green"
            setMsg(`Your age is ${data.age}. You are eligible.`)
        }
        else{
            messageRef.current.style.color = "red"
            setMsg('You are not eligible.')
        }
      }
    }))
  return (
    <div style={{textAlign:"center",marginTop:"20px"}}>
        <p ref={messageRef}><b>{message}</b></p>
        </div>
  )
});

export default CheckEligibility