import React from 'react'
import { useState } from 'react'

const ProfFinder = () => {
    const [userName, setUsername] = useState("nianod")

    

    const handleSearch = () => {

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
          className='bg-blue-500 p-2 text-white rounded'
         >
            Search
         </button>
      </div>
    </div>
  )
}

export default ProfFinder
