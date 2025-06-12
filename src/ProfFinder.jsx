import React, { useState, useEffect } from 'react'
import UserCard from './UserCard'

const ProfFinder = () => {
    const [userName, setUsername] = useState("nianod")
    const [error, setError] = useState(false)
    const [userdata, setuserdata] = useState(null)

    const fetchGithubUser = async () => {
        const response = await fetch(`https://api.github.com/users/${userName}`)
        const data = await response.json()
        console.log(data)
        if(data) {
            setError(false)
            setUsername('')
            setuserdata(data)
        }
    }

    const handleSearch = () => {
        fetchGithubUser()
    }
        
 

  return (
    <div className='flex items-center justify-center mt-5'>
      <div>
        <input
         className='focus:outline-none focus:ring-2 border rounded p-2 focus:ring-blue-500'
         type="text"
         placeholder='Enter a username'
         value={userName}
         onChange={(e) => setUsername(e.target.value)}
         />
         <button onClick={handleSearch}
          className='bg-blue-500 p-2 text-white rounded cursor-pointer hover:bg-blue-400'
         >
            Search
         </button>
         {setError && (
            <p className='text-red-500'>{error}</p>
         )}
      </div>
      {
        userdata !== null ? < UserCard User= {userdata} /> :null
      }
    </div>
  )
}

export default ProfFinder
