import React from 'react'

const UserCard = ({ User }) => {
    const {avatar_url, followers, following, public_repos, location, name, html_url, blog, login} = User
  return (
    <div className='flex flex-col justify-center m-auto mt-5 items-center '>
      <img src={avatar_url} alt={"user"}
       className='rounded-full w-60 h-60'
      />
        <p className='text-xl'>Visit <a target='_blank' href={html_url} className='text-purple-700 underline'>{login}</a></p>
       <div>
        <h1 className=''> Name: <span className='font-bold'>{name}</span></h1>
        <p>Followers: <span className='font-bold'>{followers}</span></p>
        <p>Following: <span className='font-bold'>{following}</span></p>
        <p>Public Repos: <span className='font-bold'>{public_repos}</span></p>
        <p>Blogs:{""} {blog ? (<a 
            target='_blank'
            className='text-purple-700 underline'
            href={blog}>Blogs</a> ) : (
                <span className='text-gray-500'>No blogs available</span>
            )}
        </p>
        <p>Location:{ "" } <span className='font-bold'>{location ? location : "N/A"}</span></p>        
       </div>
    </div>
  )
}

export default UserCard
