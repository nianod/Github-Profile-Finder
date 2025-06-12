import React from 'react'
import { useState } from 'react'

const ProfFinder = () => {
    const [userName, setUsername] = useState(nianod)

    const handleSearch = () => {
        
    }


  return (
    <div>
      <div>
        <input
         type="text"
         placeholder='Enter a username'
         value={userName}
         />
         <button onClick={handleSearch}>
            Search
         </button>
      </div>
    </div>
  )
}

export default ProfFinder
