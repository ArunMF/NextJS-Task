'use client'
import { SessionProvider, signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'
import UserDetails from '@/Components/userDetails/userDetails'
function Login() {
  // Wrap useSession in SessionProvider
  return (
    <SessionProvider>
      <LoginComp />
    </SessionProvider>
  )
}

function LoginComp() {
  const { data: session } = useSession()
  return (
    <div>
      <div style={{ padding: '20px' }}>
        <div style={{display:"flex"}}>
        <h1 style={{width:"85%"}}>First-Task</h1>
        { session? 
          <div style={{marginTop:"60px", display:"flex", justifyContent:"end"}}>
            <img src={session?.user?.image} alt="img" width="40px" height="40px" onClick={()=>signOut()} style={{borderRadius:"25px"}} />
            <p style={{margin:"10px"}}><b>{session?.user?.name}</b></p>
          </div>
        : ''}
        </div>
        {!session ? (
          <div style={{display:"flex", justifyContent:"center"}}>
            <button onClick={() => signIn()} style={{ color: "black" }}>Login</button>
          </div>
        ) : (
            <UserDetails />
        )}
      </div>
    </div>
  )
}

export default Login
