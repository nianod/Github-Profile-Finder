import React, { useState, useEffect } from 'react'
import UserCard from './UserCard'

const ProfFinder = () => {
    const [userName, setUsername] = useState("")
    const [error, setError] = useState(false)
    const [userdata, setuserdata] = useState(null)

    const fetchGithubUser = async () => {
     try{   
        const response = await fetch(`https://api.github.com/users/${userName}`)
        if(!response.ok) {
            throw new Error("Username Not found")
        }
        const data = await response.json()
        console.log(data)
        if(data) {
            setError(false)
            // setUsername('')
            setuserdata(data)
        }
     } catch(err) {
        setError(err.message)
        setuserdata(null)
     }
    }

    const handleSearch = () => {
        if(userName.trim() !== "") {
            fetchGithubUser()
        } 
        
    }  
      

  return (
    <div >
      <div className='flex items-center justify-center mt-2'>
        <input
         className='focus:outline-none focus:ring-2 border rounded p-2 focus:ring-blue-500'
         type="text"
         placeholder='Enter a github username'
         value={userName}
         onChange={(e) => setUsername(e.target.value)}
         />
         <button onClick={handleSearch}
          className='bg-blue-500 p-2 text-white rounded cursor-pointer hover:bg-blue-400'
         >
            Search
         </button>
      </div>
      {
        
        userdata !== null ? < UserCard User= {userdata} /> :null
      }
        {setError && (
        <p className='text-red-600 flex items-center justify-center'>{error}</p>
        )}      
    </div>
  )
}

export default ProfFinder
