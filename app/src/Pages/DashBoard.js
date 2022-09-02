import React, { useEffect, useState } from 'react'
// import jwt from 'jsonwebtoken'
import {  useHistory } from 'react-router-dom'

import Ts2 from '../components/Ts2'
import App1 from '../Crypto/App1'
import './pages.css'


const DashBoard = () => {
    const history = useHistory()
    const [quote,setQuote]= useState('')
    const [tempquote,setTempQuote]= useState('')


    async function populateQuote() {
        const req = await fetch('http://localhost:5000/api/quote', {
            headers: {
                'x-access-token': localStorage.getItem('token')
            }
        })
        const data = await req.json()
        if(data.status === 'ok'){
            setQuote(data.quote)
        }else{
            alert(data.error)
        }
    }


    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = localStorage.getItem('token')
            if (!user) {
                localStorage.removeItem('token')
                history.replace('/login')
            }
            else {
                populateQuote();
            }
        }

    },[])

    async function updateQuote(event) {
        event.preventDefault()
        const req = await fetch('http://localhost:5000/api/quote', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('token')
            },
            body: JSON.stringify({
                quote:tempquote,
            })
            
        })
        const data = await req.json()
        if(data.status === 'ok'){
            setQuote(tempquote)
            setTempQuote('')
            
        }else{
            alert(data.error)
        }        
    }
  return (
      <div className="dash">
        
           <h1 style={{textAlign: 'center'}}>
               Hi {quote|| "No Username available"} 
           </h1>
            <form className="form1" onSubmit={updateQuote}>
               <input type="text" placeholder="Enter  Name" value={tempquote} onChange={(e)=>{setTempQuote(e.target.value)}}/>
               <button type="submit" value="Update User Name" >Update User Name</button>
              
           </form>
           <Ts2/>
           <App1 />

      </div>
 
  )
}

export default DashBoard