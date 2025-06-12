import React from 'react'

const UserCard = ({ User }) => {
    const {avatar_url, followers, following, public_repos, location} = User
  return (
    <div>
      <img src={avatar_url} alt={"user"} />
    </div>
  )
}

export default UserCard
