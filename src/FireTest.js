import React, { useState } from 'react'
import { app, database } from './firebaseConfig'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

export default function FireTest() {
    
    const [data, setData] = useState({})

    function handleChange(e){
        const {name, value} = e.target
        setData(prevData => ({
          ...prevData,
          [name]: value
        })
      )}

      function handleSubmit(){
        console.log(data)

        
      }

  return (
    <div className='fire'>
        <input 
        name='email'
        type="email" 
        value={data.value}
        onChange={handleChange}
        />
        <input 
        name='password'
        type="password" 
        value={data.value}
        onChange={handleChange}
        />
        <input type="submit" className="submit" value="SUBMIT" onClick={handleSubmit}/>
    </div>
  )
}
